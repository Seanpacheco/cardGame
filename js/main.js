document.querySelector('#clickMe').addEventListener('click', makeReq)


async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  document.querySelector('#imgOne').src = data.cardOneImg
  document.querySelector('#imgTwo').src = data.cardTwoImg
  document.querySelector('#imgThree').src = data.cardThreeImg
  document.querySelector('#imgFour').src = data.cardFourImg
  document.querySelector('#imgFive').src = data.cardFiveImg
  document.querySelector('#imgSix').src = data.cardSixImg
  document.querySelector('#imgSeven').src = data.cardSevenImg
}