import React from 'react';

const DataTable = (props) => {
    const dataTable = props.partsData.map((partData) => {
        return (
         <tr>
            <td>{partData.name}</td>
            <td><a href={partData.number}><i className="fas fa-download"></i></a></td>
         </tr>
        )
    });

//     var errorMessage = `
//              <div className="alert alert-success">
//                 {props.error}
//             </div>
// `
//     if ( props.error === null) {
//         errorMessage = null;
//     }

    return (
        <main>
            <div className="container">
                <br/>
                <table className="table table-striped" style={{textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th>نام قطعه</th>
                        <th>لینک دانلود</th>
                    </tr>
                    </thead>
                    <tbody>
                     {dataTable}
                    </tbody>
                </table>
                {/*<br/>*/}
                {/*<ul className="pagination">*/}
                    {/*<li className="page-item disabled"><a className="page-link" href="#">قبلی</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">بعدی</a></li>*/}
                {/*</ul>*/}
            </div>
            <br/>
        </main>
    )
};

export default DataTable;

// const styleCss = {
//     backgroundImage: url(${Background})
// };       <Navigation/>
