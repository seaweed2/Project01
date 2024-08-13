window.addEventListener("DOMContentLoaded",function(){
    // 자바스크립트로 브라우저에게 언제 어느때에 무엇을 어떻게 해야할지 설명
    
    // 누가
    const loadBtn = document.querySelector("#load_btn");
    const usersTbl = document.querySelector("#users_tbl")

    // 할 일
    loadBtn.addEventListener("click", function(){
        loadBtn.disabled = false;

        // 데이터 수신(= data fetching)
        const result = fetch("http://localhost:3000/getAllUsers").then((res) => res.json()).then((data) => {
            //console.log(data);
            data.forEach((el) => {
                //console.log(el, i);
                const row = document.createElement("tr"); // javascript로 tr 태그 생성
                row.innerHTML = `
                    <td>${el.id}</td>
                    <td>${el.name}</td>
                    <td>${el.email}</td>
                    <td>${el.reg_date}</td>
                    <td>${el.sns}</td>
                    <td>${el.intro}</td>
                `;
                usersTbl.appendChild(row);
            });
            //데이터 개수만큼 반복. MDN foreach 검색하여 사용법 확인
            loadBtn.disabled = true; // 한 번 클릭후 버튼을 누를 수 없게 설정
        });
    });
});