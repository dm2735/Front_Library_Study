import React from 'react';

const PromiseStudy = () => {

    const a = new Promise((resolve, reject) => {
        console.log("프로미스 호출");
        if(1 === 1) {
            resolve();
        } else {
            throw new Error("오류입니다.");
        }
        
    });

    const clickHandler = () => {
        a.then(() => {
            console.log("1번 then 호출");
            return new Promise((resolve, reject) => {
                resolve("리턴!!!!");
            })
        })
        .catch((error) => {
            console.log(error);
        })

        .then(b);
            //then이 호출되면 resolve가 실행이 된다.
            //resolve가 실행되면 resolve의 값이 b에 들어간다.
            //then안에 있는 함수가 호출된다.
    }

    const b = (str) => {
        console.log(str);
    }

    return (
        <div>
            <button onClick={clickHandler}>버튼</button>
        </div>
    );
};

export default PromiseStudy;