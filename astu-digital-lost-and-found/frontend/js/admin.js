const API = "http://localhost:5000/api";

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

// Fetch and show stats
async function loadStats() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API}/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    const statsDiv = document.getElementById("stats");
    statsDiv.innerHTML = `
        <p>Total Items: ${data.totalItems}</p>
        <p>Lost: ${data.lostItems}</p>
        <p>Found: ${data.foundItems}</p>
        <p>Claimed: ${data.claimedItems}</p>
        <p>Total Claims: ${data.totalClaims}</p>
    `;
}

// Fetch all claims
async function loadClaims() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API}/claims`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const claims = await res.json();
    const claimsDiv = document.getElementById("claims");
    claimsDiv.innerHTML = "";

    claims.forEach(claim => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <p>Item: ${claim.item.title} (${claim.item.status})</p>
            <p>Requested By: ${claim.requestedBy.name} (${claim.requestedBy.email})</p>
            <p>Status: ${claim.status}</p>
            ${claim.status === "pending" ? `
                <button onclick="updateClaim('${claim._id}', 'approved')">Approve</button>
                <button onclick="updateClaim('${claim._id}', 'rejected')">Reject</button>
            ` : ""}
        `;
        claimsDiv.appendChild(div);
    });
}

// Approve / Reject claim
async function updateClaim(claimId, status) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API}/claims/${claimId}`, {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
    });
    const data = await res.json();
    if(res.ok){
        alert(`Claim ${status}!`);
        loadClaims();
        loadStats();
    } else {
        alert(data.message || "Error updating claim");
    }
}

// Initial load
loadStats();
loadClaims();