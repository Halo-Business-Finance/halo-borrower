// import axios from "axios";
// import { useEffect, useState } from "react";

// const LoanTypes = (data) => {

//     const [details, setDetails] = useState([]);

//     const headers = {
//         "Content-Type": "application/json",
//     };
    
    
//     const url =
//         process.env.NEXT_PUBLIC_BASE_URL +
//         "/api/loan-type/get-all";
    
//     useEffect(() => { 
//         axios({
//         method: "GET",
//         url: url,
//         headers: headers,
//         }).then(
//         (respo) => {
            
//             setDetails(respo.data.payload);
//             (details);
//         },
//         (error) => {
//             (error);
//         }
//         );
//     },[]);
   


// 		return (
// 			<>
            
//                 {details.map((datai, dataname) =>{

//                     const base_url = process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
//                     (base_url);
//                     (process.env.NEXT_PUBLIC_BASE_URL );
//                     return(
                        
//                         <div className="loan-type-section">
// 							<div className="loan-type">
// 								<div className="loan-type-select">
// 									<div className="loan-type-contain first">
//                                         <input type="hideen" value= {datai.id}/>
//                                         <img src= {base_url} />
// 									</div>
//                                     <p>{datai.loanTitle}</p>

// 								</div>
// 							</div>
// 						</div>

//                     )
//                 })}
// 			</>
// 		);
// };

// export default LoanTypes;
