import React from "react";

function Order() {
  return (
    <>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", marginTop: "80px", backgroundColor: "#f2f2f2" }}>
        <div style={{ backgroundColor: "#752121", width: "100%", maxWidth: "400px", margin: "20px auto", textAlign: "center", borderRadius: "10px", color: "white", justifyContent: "center", alignItems: "center", display: "flex" }}>
          <h1>Order Requests</h1>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "30px" }}>
          <thead>
            <tr>
              <th style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#277521", color: "white", fontSize: "20px" }}>Type</th>
              <th style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#277521", color: "white", fontSize: "20px" }}>Amount</th>
              <th style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#277521", color: "white", fontSize: "20px" }}>Location</th>
              <th style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#277521", color: "white", fontSize: "20px" }}></th>
              <th style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#277521", color: "white", fontSize: "20px" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>Plastic</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>10kg</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>17/A Wadduwa, Kaluthara</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>
                <button style={{ backgroundColor: "#277521", color: "white", borderRadius: "5px", border: "none", padding: "8px 16px", cursor: "pointer", transition: "background-color 0.3s ease" }}>Accept</button>
              </td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>
                <button style={{ backgroundColor: "#752121", color: "white", borderRadius: "5px", border: "none", padding: "8px 16px", cursor: "pointer", transition: "background-color 0.3s ease" }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>Paper</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>100kg</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>102 Kiribathgoda, Wawala</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>
                <button style={{ backgroundColor: "#277521", color: "white", borderRadius: "5px", border: "none", padding: "8px 16px", cursor: "pointer", transition: "background-color 0.3s ease" }}>Accept</button>
              </td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>
                <button style={{ backgroundColor: "#752121", color: "white", borderRadius: "5px", border: "none", padding: "8px 16px", cursor: "pointer", transition: "background-color 0.3s ease" }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>Plastic</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>5kg</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>17/A Wadduwa, Kaluthara</td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>
                <button style={{ backgroundColor: "#277521", color: "white", borderRadius: "5px", border: "none", padding: "8px 16px", cursor: "pointer", transition: "background-color 0.3s ease" }}>Accept</button>
              </td>
              <td style={{ padding: "12px", textAlign: "center", border: "2px solid white", backgroundColor: "#abdf94", fontSize: "18px" }}>
                <button style={{ backgroundColor: "#752121", color: "white", borderRadius: "5px", border: "none", padding: "8px 16px", cursor: "pointer", transition: "background-color 0.3s ease" }}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button style={{ backgroundColor: "#752121", color: "white",width:"1%", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer", float: "right", marginRight: "2%",  marginTop: "5%" }}>Back</button>
      </div>
      
    </>
  );
}

export default Order;
