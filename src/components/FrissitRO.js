import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class FrissitRO extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.initTable();
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    initTable() {

        this.Ww = [
            this.createData2(<a href='http://www.bausoft.hu/RO/WinWatt-RO_S_Update.exe' >WinWatt-RO S frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/RO/WinWatt-RO_M_Update.exe' >WinWatt-RO M frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/RO/WinWatt-RO_L_Update.exe' >WinWatt-RO L frissítő</a>,
                <p>4.4 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/RO/WinWatt-RO_XL_Update.exe' >WinWatt-RO XL frissítő</a>,
                <p>5.0 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/RO/WinWatt-RO_XXL_Update.exe' >WinWatt-RO XXL frissítő</a>,
                <p>5.1 MB</p>),
        ];
    }

    createData2(Updater, Size) {
        return { Updater, Size };
    }

    render() {
        return (
            <div className="FrissitRO pl3 pr4">
                <Helmet><title>Román nyelvű frissítő készletek</title></Helmet>
                <h2>Román nyelvű frissítő készletek</h2>
                <p>Programjaink román nyelvű változatának frissítő készlete található meg itt.</p>
                <p><Link to="/public/Ww32.html">WinWatt-RO változatok</Link> frissítői, <Link to="/public/Ww32Ver.html">8.15 (2020. február 10.)</Link></p>
                <TableContainer component={Paper} className="min250 max400">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow >
                                <TableCell align="center" padding="none"><h4>Frissítő program</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.Ww.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray height8" : "height8"}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Updater}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default FrissitRO;