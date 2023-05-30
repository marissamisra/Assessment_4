const complimentBtn = document.getElementById("compliment-button");
const fortuneBtn = document.getElementById("fortune-button");
const form = document.querySelector("#make-wish");
const input = document.querySelector("#wish-text");
const wishList = document.querySelector("#wish-list");
const resetBtn = document.querySelector("#reset-btn");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then((res) => {
      const data = res.data;
      alert(data);
    });
};

const submitWish = (e) => {
  e.preventDefault();
  const wishValue = input.value;
  const body = {
    wish: wishValue,
  };
  axios
    .post("http://localhost:4000/api/wishes", body)
    .then(wishesCallback)
    .catch(errCallback);
};

const wishesCallback = (wishData) => {
  if (wishData.status === 200) {
    axios.get("http://localhost:4000/api/wishes").then((res) => {
      const wishesArray = res.data;
      const list = document.createElement("ul");
      wishesArray.forEach(wish => {
        const listItem = document.createElement('li')
        listItem.innerHTML = wish 
        list.appendChild(listItem)
      })
      createList(list)
    });
  }
};

const resetForm = () => {
    wishList.innerHTML = ''
    input.value = ''
    axios.delete('http://localhost:4000/api/wishes').then((res) => {
        if(res.status === 200) {
            alert('Wishes have been reset')
        }
    })
}

const createList = list => {
    wishList.innerHTML = ''
    wishList.appendChild(list)
}

const errCallback = (err) => {
  if (err && err.response && err.response.status === 403) {
    alert("No wishes remaining");
  }
};

resetBtn.addEventListener("click", resetForm)
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
form.addEventListener("submit", submitWish);
