const mp = new MercadoPago('API_KEY', {
    locale: 'es-MX',
 });
 
 document.getElementById("checkout-btn").addEventListener("click", async () => {
    try {
       const orderData = {
          title: document.querySelector(".name").innerText,
          quantity: 1,
          price: 5,
       };
 
       const response = await fetch("http://localhost:3000/create_preference", {
          method: "POST",
          headers: {
             "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
       });
 
       const preference = await response.json();
       createCheckoutButton(preference.id);
    } catch (error) {
       console.error(error);
    }
 });
 
 const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();
 
    const renderComponent = async () => {
       if (window.checkoutButton) window.checkoutButton.unmount();
 
       await bricksBuilder.create("wallet", "wallet_container", {
          initialization: {
             preferenceId: preferenceId,
             redirectMode: "modal",
          },
          customization: {
             texts: {
                valueProp: 'smart_option',
             },
          },
       });
 
    };
    renderComponent();
 };

 // Alejandro Montes https://github.com/AlepsMM03