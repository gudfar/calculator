import React, {useEffect, useState} from 'react';
import {ErrorIndicator, Spinner} from "../index";
import '../../../css/calculator.css';
import {useDispatch, useSelector} from "react-redux";
import {calculate, fetchHistory} from "../../actions/calculator";

const HistoryPage = () => {

    const dispatch = useDispatch();
    const { records, loading, error } = useSelector(
        ({historyReducer: {records, loading, error}}) => ({records, loading, error})
    );

    useEffect(() => {
        fetchHistory(dispatch);
    }, [dispatch]);

    if (loading) {
        return (<Spinner/>);
    }

    if (error) {
        return (<ErrorIndicator/>);
    }

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Data</th>
                    <th scope="col">Result</th>
                    <th scope="col">User</th>
                    <th scope="col">Date</th>
                </tr>
                </thead>
                <tbody>

                {records.map((record) => (
                    <tr key={record.id}>
                        <th scope="row">{record.id}</th>
                        <td>{record.data}</td>
                        <td>{record.result}</td>
                        <td>{record.username}</td>
                        <td>{(new Date(record.created_at)).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};


export default HistoryPage;
