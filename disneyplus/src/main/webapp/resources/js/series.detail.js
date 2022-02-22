document.addEventListener("click", (e) => {
  if (e.target.id == "delBtn") {
    e.preventDefault();
    document.querySelector("#delForm").submit();
  }
});

document.getElementById("season").addEventListener("click", (e) => {
  document.getElementById("reviewV").style.height = "0px";
  document.getElementById("reviewV").style.overflow = "hidden";
  document.getElementById("reviewV").style.visibility = "hidden";

  document.getElementById("descriptionV").style.height = "0px";
  document.getElementById("descriptionV").style.overflow = "hidden";
  document.getElementById("descriptionV").style.visibility = "hidden";

  document.getElementById("seasonV").style.height = "auto";
  document.getElementById("seasonV").style.overflow = "visible";
  document.getElementById("seasonV").style.visibility = "visible";
});

document.getElementById("review").addEventListener("click", (e) => {
  document.getElementById("seasonV").style.height = "0px";
  document.getElementById("seasonV").style.overflow = "hidden";
  document.getElementById("seasonV").style.visibility = "hidden";

  document.getElementById("descriptionV").style.height = "0px";
  document.getElementById("descriptionV").style.overflow = "hidden";
  document.getElementById("descriptionV").style.visibility = "hidden";

  document.getElementById("reviewV").style.height = "auto";
  document.getElementById("reviewV").style.overflow = "visible";
  document.getElementById("reviewV").style.visibility = "visible";
});

document.getElementById("des").addEventListener("click", (e) => {
  document.getElementById("seasonV").style.height = "0px";
  document.getElementById("seasonV").style.overflow = "hidden";
  document.getElementById("seasonV").style.visibility = "hidden";

  document.getElementById("descriptionV").style.height = "auto";
  document.getElementById("descriptionV").style.overflow = "visible";
  document.getElementById("descriptionV").style.visibility = "visible";

  document.getElementById("reviewV").style.height = "0px";
  document.getElementById("reviewV").style.overflow = "hidden";
  document.getElementById("reviewV").style.visibility = "hidden";
});

async function getSeason(season, mno) {
  try {
    const resp = await fetch("/series/season/" + mno + "/" + season);
    const seasonR = await resp.json();
    return await seasonR;
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("seasonbtn")) {
    let season = e.target.dataset.sindex;
    let mno = document.querySelector("input[name=mno]").value;
    getSeason(season, mno).then((result) => {
      let detail = document.getElementById("details_episodes");
      if (result.length) {
        detail.innerHTML = "";
        let go = `<div class="my-row row-cols-1 row-cols-md-3 g-4">`;
        let i = 0;
        for (const svo of result) {
          i++;
          go += `<div class="col"><div class="my-card">`;
          go += `<a href="/series/play?sno=${svo.sno}" style="background-image: url(/upload/${svo.thumbnail});" class="card-img-top my-poster2"></a>`;
          go += `<div class="card-body"><h5 class="card-title">${i}. ${svo.title}`
          if (auth == 'true') {
            go +=`&nbsp;<a href="/series/season/modify?sno=${svo.sno}" class="btn btn-light my-btn-sm">수정</a>`;
          }
          go += `</h5><p class="card-text">${svo.description}</p></div></div></div>`;
        }
        go += `</div>`;
        detail.innerHTML += go;
      }
    });
  }
});
