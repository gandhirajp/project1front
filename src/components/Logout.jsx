import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';


const Logout = () => {

    const history = useHistory();

    const logout = async () => {
       
                try {
                    const res = await fetch('/logout',{
                        method: "GET",
                        headers: {
                            Accept : "application/json",
                            "Content-Type": "application/json"
                        },
                       credentials: "include"
                    });
        
                    if (res.status === 401 || !res) {
                        window.alert("Please Logout Later")
                    } else {
                        history.push("/");
                        window.location.reload();
                    }
                }  
                catch (error) {
                    console.log(error)
                }
            }
    
    useEffect(() => {
      logout();
    }, [])
    

  return (
    <div>

    </div>
  )
}

export default Logout




















// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Logout = () => {

//    const navigate = useNavigate()
   

//     const logout = async () => {
       
//         try {
//             const res = await fetch('http://localhost:3001/logout', {
//                 method: "GET",
//                 headers: {
//                     Accept:"application/json",
//                     "Content-Type": "application/json"
//                 },
//                credentials: "include"
//             });

//             if (res.status === 401 || !res) {
//                 window.alert("Please Logout Later")
//             } else {
//                 navigate("/")
//                 window.location.reload();
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//        logout();
//     },[]);
    

//   return (
//     <div>
        
//     </div>
//   )
// }

// export default Logout