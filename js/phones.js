const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    showPhones(phones);
}

const showPhones = phones => {
    // console.log(phones);

    phoneContainer = document.getElementById('phone-container');

    phones.forEach(phone => {
        console.log(phone);

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl p-4 border`;
        phoneCard.innerHTML = `
        <figure>
            <img src="${phone.image}"
                alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
}

loadData();