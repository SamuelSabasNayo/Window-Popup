var section1 = document.querySelector(".section1");
        section2 = document.querySelector(".section2"),
        btn = document.querySelector("button"),
        X = document.querySelector(".X");

        btn.addEventListener("click", appear);

        function appear() {
            section2.style.display = "block";
            section1.style.filter = "blur(5px)";
        }

        X.addEventListener("click", disappearX);

        function disappearX() {
            section2.style.display = "none";
            section1.style.filter = "blur(0px)";
        }

        section2.addEventListener("click", disappearSection2)

        function disappearSection2(e) {
            if (e.target.className == "section2") {
                section2.style.display = "none";
                section1.style.filter = "blur(0px)"; 
            }
        }