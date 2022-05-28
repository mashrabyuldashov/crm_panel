const groupTeacherActive = document.querySelector(".Groups1")
groupTeacherActive.classList.add("active")
const studentsTeacherActive = document.querySelector(".Students2")

studentsTeacherActive.addEventListener("click", () => {
    studentsTeacherActive.classList.add("active")
    groupTeacherActive.classList.remove("active")
    document.querySelector(".groups-teacher-views").style.display = "none"
    document.querySelector(".students-teacher-views").style.display = "block"
})

groupTeacherActive.addEventListener("click", () => {
    studentsTeacherActive.classList.remove("active")
    groupTeacherActive.classList.add("active")
    document.querySelector(".students-teacher-views").style.display = "none"
    document.querySelector(".groups-teacher-views").style.display = "block"
})

const tost = document.querySelector(".my_tosts")
const close_tost = document.querySelector(".tost_closes")
const md_modal = document.querySelector("#exampleModal777")
console.log(md_modal);

document.querySelector(".table-body-groups-teacher").addEventListener("click", (e) => {
    if (e.target.matches(".add_homework")) {
        let id = Number(e.target.id) + 505
        let title = document.querySelector('#exampleDataList' + id)
        fetch("/teacher/addhomework", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: e.target.id,
                homework: title.value
            })
        })

        tost.style.display = "block"

        setTimeout(() => {
            tost.style.display = "none"
            window.location.reload()
        }, 2000);

        // window.location.reload()
    }
})


close_tost.addEventListener("click", () => {
    tost.style.display = "none"
})