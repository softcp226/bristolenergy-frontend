const checkCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  // return "";
  window.location.href = "/login.html";
};

let deposit_amount = document.querySelector("#amount");
let payment_method = document.querySelector("#payment-method");
// let currency = document.querySelector("#currency");
let wallet_address = document.querySelector("#wallet-address");
let submit = document.querySelector("#submit");
let nb = document.querySelector("#nb");
let copied_to_clipboard = false;

// const show_ap_text = (payment_method) => {
//   console.log(payment_method);
//   const proccessor = payment_proccessing.filter(
//     (proccessor) => proccessor.name == payment_method,
//   );
//   wallet_address.innerHTML = proccessor[0].wallet_address;
//    nb.innerHTML = `send ${`$`}${deposit_amount.value} to this ${
//      proccessor[0].name
//    } wallet address/ID:  <b style='color:#000'>${proccessor[0].wallet_address}</b>`;
//    console.log(proccessor);
//   alert(proccessor);
// };

const show_ap_text = (payment_method) => {
  console.log(payment_method);
  switch (payment_method) {
    case "BITCOIN":
      document.querySelector("#deposit-tag").innerHTML = `send ${`$`}${
        deposit_amount.value
      } worth of Bitcoin to this wallet address:<b> bc1qlwyf2xu2sm9u0ccrpamrtps0z52cecu4f74wxr </b>`;

      wallet_address.innerHTML = "bc1qlwyf2xu2sm9u0ccrpamrtps0z52cecu4f74wxr";
      nb.innerHTML = `Payment Wallet NB: send ${`$`}${
        deposit_amount.value
      } worth of Bitcoin to this wallet address:<b> bc1qlwyf2xu2sm9u0ccrpamrtps0z52cecu4f74wxr </b>  and get a screenshot/evidence of payment and then click i have made payment`;

      nb.style.color = "green";
      alert(
        `Please copy the wallet address shown and make payment when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
      );

      break;

    case "ETHEREUM":
      document.querySelector("#deposit-tag").innerHTML = `send ${`$`}${
        deposit_amount.value
      } worth of Ethereum to this wallet address:<b> 0x870915F76Adb878232180551BC59bb22Dd4C37D </b>`;

      wallet_address.innerHTML = "0x870915F76Adb878232180551BC59bb22Dd4C37D";
      nb.innerHTML = `Payment Wallet NB: send ${`$`}${
        deposit_amount.value
      } worth of Ethereum to this wallet address:<b> 0x870915F76Adb878232180551BC59bb22Dd4C37D </b> and click i have made payment`;

      nb.style.color = "green";
      alert(
        `Please copy the wallet address shown and make payment when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
      );

      break;

    case "USDT(TRC20)":
      document.querySelector("#deposit-tag").innerHTML = `send ${`$`}${
        deposit_amount.value
      } worth of USDT(TRC20) to this wallet address:<b>TJdcPux82RkZDp63Zev9n4jjBbVxwrRXWm </b>`;

      wallet_address.innerHTML = "TJdcPux82RkZDp63Zev9n4jjBbVxwrRXWm";
      nb.innerHTML = `Payment Wallet NB: send ${`$`}${
        deposit_amount.value
      } worth of USDT(TRC20) to this wallet address:<b> TJdcPux82RkZDp63Zev9n4jjBbVxwrRXWm </b> and click i have made payment`;

      nb.style.color = "green";
      alert(
        `Please copy the wallet address shown and make payment when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
      );
      break;

    case "PAYEER":
      document.querySelector("#deposit-tag").innerHTML = `send ${`$`}${
        deposit_amount.value
      } to this Payeer ID: <b>P1090558006</b>`;

      wallet_address.innerHTML = "P1090558006";
      nb.innerHTML = `NB: send ${`$`}${
        deposit_amount.value
      } to this Payeer ID:<b>P1090558006 </b> and click i have made payment with screenshot/evidence of payment`;

      nb.style.color = "green";
      alert(
        `Please copy the ID and make payment to it, when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
      );
      break;

    case "PERFECT MONEY":
      document.querySelector("#deposit-tag").innerHTML = `send ${`$`}${
        deposit_amount.value
      } to this Perfect Money ID : <b>U41591180</b>`;

      wallet_address.innerHTML = "U41591180";
      nb.innerHTML = `NB: send ${`$`}${
        deposit_amount.value
      }  to this Perfect Money ID :<b>U41591180</b> and click i have made payment with screenshot/evidence of payment`;

      nb.style.color = "green";
      alert(
        `Please copy payment ID and make payment the get a screenshot/evidence of payment before you click i have made payment`,
      );
      break;

    default:
      document.querySelector("#deposit-tag").innerHTML = `send ${`$`}${
        deposit_amount.value
      } worth of Bitcoin to this wallet address:<b> bc1qlwyf2xu2sm9u0ccrpamrtps0z52cecu4f74wxr </b>`;

      wallet_address.innerHTML = "bc1qlwyf2xu2sm9u0ccrpamrtps0z52cecu4f74wxr";
      nb.innerHTML = `Payment Wallet NB: send ${`$`}${
        deposit_amount.value
      } worth of Bitcoin to this wallet address:<b> bc1qlwyf2xu2sm9u0ccrpamrtps0z52cecu4f74wxr </b>  and get a screenshot/evidence of payment and then click i have made payment`;

      nb.style.color = "green";
      alert(
        `Please copy the wallet address shown and make payment when you're done get a screenshot/evidence of payment and then click 'i have made payment' to proceed`,
      );
      break;
  }
  // if (payment_method.value == "Ethereum") {
  //   document.querySelector(
  //     "#deposit-tag"

  //   ).innerHTML = `send ${`$`}${deposit_amount.value} worth of ethereum to this wallet address:<b> 0x903A4bEad66883Be827c33c46FdA20E84bc68dcc</b>`;
  //   wallet_address.innerHTML = "0x903A4bEad66883Be827c33c46FdA20E84bc68dcc";
  //   nb.innerHTML = `Payment Wallet NB: send ${currency.value}${deposit_amount.value} worth of Ethereum to this wallet address:<b> 0x903A4bEad66883Be827c33c46FdA20E84bc68dcc</b> and click i have made payment`;

  //   nb.style.color = "green";
  //   // alert(
  //   //   `please copy wallet and make payment before you click i have made payment`
  //   // );
  // } else {
  //   document.querySelector(
  //     "#deposit-tag"
  //   ).innerHTML = `send ${currency.value}${deposit_amount.value} worth of Bitcon to this wallet address:<b> 12Q91w1RggiKr2aSCWzUhuxNzopHe1S3K4</b>`;

  //   wallet_address.innerHTML = "12Q91w1RggiKr2aSCWzUhuxNzopHe1S3K4";
  //   nb.innerHTML = `Payment Wallet NB: send ${currency.value}${deposit_amount.value} worth of Bitcon to this wallet address:<b>12Q91w1RggiKr2aSCWzUhuxNzopHe1S3K4</b> and click i have made payment`;

  //   nb.style.color = "green";
  //   // alert(
  //   //   `please copy wallet and make payment before you click i have made payment`
  //   // );
  // }
};


const show_input_error = (input) => {
  input.style.border = "2px solid red";
};
const hide_input_error = (input) => {
  input.style.border = "2px solid #fff";
};

deposit_amount.onkeyup = () => {
  hide_input_error(deposit_amount);
  if (!deposit_amount.value) return;
  // if (!currency.value) return;
  if (!payment_method.value) return;
  show_ap_text(payment_method.value);

  // wallet_address.innerHTML = "investkey";
};
// currency.onchange = () => {
//   hide_input_error(currency);
//   if (!currency.value) return;
//   if (!deposit_amount.value) return;
//   if (!payment_method.value) return;
//   wallet_address.innerHTML = "currency.key";
//   show_ap_text(payment_method.value);
// };

payment_method.onchange = () => {
  hide_input_error(payment_method);
  if (!payment_method.value) return;
  if (!deposit_amount.value) return;
  // if (!currency.value) return;
  wallet_address.innerHTML = "p_method key";
  show_ap_text(payment_method.value);
};

document.querySelector("#copy-to-clipboard").onclick = () => copyToClipboard();

function copyToClipboard() {
  var copyText = wallet_address.innerHTML;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    if (copyText.length < 1) return;
    alert("Copied wallet to clipboard");
    copied_to_clipboard = true;
  });
}

const handle_submit_deposit_01 = async (form) => {
  try {
    document.querySelector("#submit").innerHTML = "proccessing...";
    const response = await fetch(
      "https://bristolenergy.glitch.me/api/user/create_deposit",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/action/loading.html?${result.message}`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

document.querySelector("#submit").onclick = () => {
  if (!deposit_amount.value) return show_input_error(deposit_amount);
  // if (parseInt(deposit_amount.value) < 100) {
  //   document.querySelector(".errMessage").innerHTML =
  //     "deposit amount must not be lesser than minimum deposit of $100 USD";
  //   show_input_error(deposit_amount);
  //   return;
  // }
  if (!payment_method.value) return show_input_error(payment_method);

  // if (!currency.value) return show_input_error(currency);
  nb.style.color = "#26b6d4";
  handle_submit_deposit_01({
    token: checkCookie("token"),
    user: checkCookie("user"),
    deposit_amount: deposit_amount.value,
    payment_method: payment_method.value,
    // currency: currency.value,
  });
  // if (copied_to_clipboard != true)
  //   return alert(
  //     "Please click on copy wallet button to copy wallet and make payment before clicking i have made payment"
  //   );
};
