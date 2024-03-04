async function fetchData(){
    try {
        const response = await fetch('https://ringsdb.com/api/public/cards/');
        const responseJson = await response.json()
        const card = responseJson[0]
        const name = card.name
        const image = card.imagesrc
        
        const h1 = document.querySelector(".title")
        const cardImage = document.querySelector(".image")

        h1.innerText = name
        cardImage.setAttribute("src", "https://ringsdb.com/" + image)

        //console.log(responseJson)

    } catch (error) {
        console.error(error)
    }
}

fetchData()