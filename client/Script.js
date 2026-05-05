const button = document.querySelector("button")
button.addEventListener("click", ()=>{
  // app.use(express.json)

  fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      console.log(url)
      window.location = url
    })
   
    .catch(e => {
      console.error(e.error)
      })
})





// const button = document.querySelector("button")

// button.addEventListener("click", () => {
//   // Prevent double-clicks
//   button.disabled = true
//   button.textContent = "Loading..."

//   fetch("http://localhost:3000/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [
//         { id: 1, quantity: 3 },
//         { id: 2, quantity: 1 },
//       ],
//     }),
//   })
//     .then(res => {
//       if (res.ok) return res.json()
//       return res.json().then(json => Promise.reject(json))
//     })
//     .then(({ url }) => {
//       window.location = url
//     })
//     .catch(e => {
//       console.error(e.error)
//       // Re-enable button on error so user can retry
//       button.disabled = false
//       button.textContent = "Checkout"
//       alert("Something went wrong. Please try again.")
//     })
// })