items.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    let claimButton = "";
    if(item.status === "found"){
        claimButton = `<button onclick="claimItem('${item._id}')">Claim Item</button>`;
    }
    div.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.description || ""}</p>
        <p>Category: ${item.category}</p>
        <p>Status: ${item.status}</p>
        ${item.image ? `<img src="http://localhost:5000/uploads/${item.image}" width="100">` : ""}
        ${claimButton}
    `;
    container.appendChild(div);
});
