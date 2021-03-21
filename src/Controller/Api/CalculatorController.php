<?php

namespace App\Controller\Api;

use App\Entity\History;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Swagger\Annotations as SWG;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;


/**
 * @SWG\Tag(name="Calculator")
 * Class CalculatorController
 * @package App\Controller\Api
 */
class CalculatorController extends AbstractFOSRestController
{
    /**
     * @SWG\Parameter(name="Authorization", in="header", required=true, type="string", description="API-TOKEN {JWT_TOKEN}")
     * @SWG\Response(
     *    response=200,
     *    description="Result of calculation",
     *    @SWG\Schema(type="integer", example="10")
     * )
     * @Rest\Post("/api/calculate", name="api_calculate")
     * @Rest\RequestParam(name="data", description="Calculated string")
     * @param string $data
     * @return mixed
     * @Rest\View(serializerGroups={"history"})
     */
    public function calculateAction(string $data)
    {
        $em = $this->getDoctrine()->getManager();
        $expressionLanguage = new ExpressionLanguage();
        $result = $expressionLanguage->evaluate($data);

        $history = new History();
        $history->setUser($this->getUser());
        $history->setData($data);
        $history->setResult($result);


        $em->persist($history);
        $em->flush();

        return $result;
    }

    /**
     * @SWG\Parameter(name="Authorization", in="header", required=true, type="string", description="API-TOKEN {JWT_TOKEN}")
     * @SWG\Response(
     *    response=200,
     *    description="Returns history",
     *    @SWG\Schema(
     *        type="array",
     *        @SWG\Items(
     *            type="object",
     *            @SWG\Property(property="id", type="integer", example="1"),
     *            @SWG\Property(property="data", type="string", example="(1+3)*4"),
     *            @SWG\Property(property="result", type="string", example="15"),
     *            @SWG\Property(property="username", type="string", example="admin"),
     *            @SWG\Property(property="created_at", type="string", example="2021-03-20T22:28:37+00:00")
     *         )
     *     )
     * )
     * @Rest\Get("/api/history", name="api_history")
     * @Rest\View(serializerGroups={"history"})
     */
    public function getHistoryAction()
    {
        $historyRecords = $this->getUser()
            ->getRecords();

        return $historyRecords;

    }
}
