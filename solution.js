let globalCheckBox = false;
let globalRadio;
let totalOrderSumm;
let globalShipmentPrice;
let firstElementID = 'pid-2567235-0';
let secondElementID = 'pid-2567330-0';
let thirdElementID = 'pid-2567333-0';
let secretOffer = 'lbl-01';
let firstProductShippingPrice = 2.8;
let secondProductShippingPrice = 2.8;
let thirdProductShippingPrice = 0;
globalRadio = firstElementID;
setShipment(firstElementID, firstProductShippingPrice);
document.addEventListener('click', () => {
  if (event.target.id === firstElementID) {
    globalRadio = firstElementID;
    setTimeout(() => {
      setShipment(firstElementID, firstProductShippingPrice);
    }, 250);
  }
  if (event.target.id === firstElementID && globalCheckBox === true) {
    globalRadio = firstElementID;
    setTimeout(() => {
      setShipment(
        firstElementID,
        firstProductShippingPrice,
        false,
        secretOffer
      );
    }, 250);
  }
  if (event.target.id === secondElementID) {
    globalRadio = secondElementID;
    setTimeout(() => {
      setShipment(secondElementID, 2.8);
    }, 250);
  }
  if (event.target.id === secondElementID && globalCheckBox === true) {
    globalRadio = secondElementID;
    setTimeout(() => {
      setShipment(
        secondElementID,
        secondProductShippingPrice,
        false,
        secretOffer
      );
    }, 250);
  }
  if (event.target.id === thirdElementID) {
    globalRadio = thirdElementID;
    setTimeout(() => {
      setShipment(thirdElementID, thirdProductShippingPrice);
    }, 250);
  }
  if (event.target.id === thirdElementID && globalCheckBox === true) {
    globalRadio = thirdElementID;
    setTimeout(() => {
      setShipment(
        thirdElementID,
        thirdProductShippingPrice,
        false,
        secretOffer
      );
    }, 250);
  }
  if (event.target.id === 'bump-offer') {
    setTimeout(() => {
      setShipment(
        globalRadio,
        globalShipmentPrice,
        'bump-offer',
        secretOffer
      );
    }, 250);
  }
});
function setShipment(id, price, bump, offerID) {
  let orderList = document.querySelectorAll(
    '.clearfix.elOrderProductOptinProducts'
  );
  if (bump) {
    if (globalCheckBox === true) {
      globalCheckBox = false;
    } else {
      if (globalCheckBox === false) {
        globalCheckBox = true;
      }
    }
  }
  if (globalCheckBox === false) {
    let first = document.getElementById(id);
    totalOrderSumm = Number(first.dataset.productAmount) + price;
  }
  if (globalCheckBox === true) {
    let first = document.getElementById(id);
    let offer = document.getElementById(offerID);
    totalOrderSumm =
      Number(first.dataset.productAmount) +
      price +
      Number(offer.dataset.productAmount);
  }
  let getText = document.querySelectorAll('#shipment-text');
  let getPrice = document.querySelectorAll('#shipment-price');
  let getTotalOrderList = document.querySelectorAll('#total-item-list');
  if (getPrice.length > 0) {
    getText[0].remove();
    getPrice[0].remove();
  }
  if (getTotalOrderList.length > 0) {
    getTotalOrderList[0].remove();
  }
  let shipment = document.createElement('div');
  shipment.className =
    'pull-left elOrderProductOptinProductName product-name';
  shipment.innerHTML = 'Royal Mail 48 Hour Tracker';
  shipment.id = 'shipment-text';
  shipment.style = 'width:inherit;';
  orderList[4].append(shipment);
  let shipmentPrice = document.createElement('div');
  shipmentPrice.className =
    'pull-right elOrderProductOptinPrice product-price';
  shipmentPrice.innerHTML = `£${price}`;
  shipmentPrice.id = 'shipment-price';
  shipmentPrice.style = 'width:inherit;';
  shipment.after(shipmentPrice);
  radioButton = `£${price}`;
  globalShipmentPrice = price;
  let itemsList = document.createElement('div');
  itemsList.className = 'clearfix elOrderProductOptinLabel';
  itemsList.id = 'total-item-list';
  let orderTotal = document.createElement('div');
  orderTotal.className =
    'pull-left elOrderProductOptinItem elOrderProductOptinItem2';
  orderTotal.id = 'order-total';
  orderTotal.innerHTML = 'Order Total:';
  let orderTotalPrice = document.createElement("div");
  orderTotalPrice.className =
    'pull-right elOrderProductOptinLabelPrice elOrderProductOptinLabelPrice2';
  orderTotalPrice.id = 'order-total-count';
  orderTotalPrice.innerHTML = `£${totalOrderSumm}`;
  if (globalCheckBox === true) {
    console.log(orderList);
    orderList[5].after(itemsList);
    itemsList.append(orderTotal);
    itemsList.append(orderTotalPrice);
  } else {
    console.log(orderList);
    orderList[4].after(itemsList);
    itemsList.append(orderTotal);
    itemsList.append(orderTotalPrice);
  }
}

