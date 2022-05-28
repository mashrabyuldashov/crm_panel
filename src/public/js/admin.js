const modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function() {
    document.documentElement.classList.toggle('light');
    modeSwitch.classList.toggle('active');
});

const courseActive = document.querySelector(".Courses1")
courseActive.classList.add("active")

const teachersActive = document.querySelector(".Teachers2")
const groupsActive = document.querySelector(".Groups3")
const studentsActive = document.querySelector(".Students4")

const coursesView = document.querySelector(".courses-views")
const teachersView = document.querySelector(".teachers-views")
const groupsView = document.querySelector(".groups-views")
const studentsView = document.querySelector(".students-views")

teachersActive.addEventListener("click", () => {
    teachersActive.classList.add("active")
    courseActive.classList.remove("active")
    groupsActive.classList.remove("active")
    studentsActive.classList.remove("active")
    teachersView.style.display = "block"
    coursesView.style.display = "none"
    groupsView.style.display = "none"
    studentsView.style.display = "none"
})

courseActive.addEventListener("click", () => {
    courseActive.classList.add("active")
    teachersActive.classList.remove("active")
    groupsActive.classList.remove("active")
    studentsActive.classList.remove("active")
    coursesView.style.display = "block"
    teachersView.style.display = "none"
    groupsView.style.display = "none"
    studentsView.style.display = "none"
})

groupsActive.addEventListener("click", () => {
    groupsActive.classList.add("active")
    courseActive.classList.remove("active")
    teachersActive.classList.remove("active")
    studentsActive.classList.remove("active")
    groupsView.style.display = "block"
    teachersView.style.display = "none"
    coursesView.style.display = "none"
    studentsView.style.display = "none"
})

studentsActive.addEventListener("click", () => {
    studentsActive.classList.add("active")
    groupsActive.classList.remove("active")
    courseActive.classList.remove("active")
    teachersActive.classList.remove("active")
    studentsView.style.display = "block"
    teachersView.style.display = "none"
    coursesView.style.display = "none"
    groupsView.style.display = "none"
})


document.querySelector(".adding_course").addEventListener("click", () => {
    fetch("http://localhost:9000/admin/coursepost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList.value,
            price: exampleDataList2.value
        })
    })
    window.location.reload()
})

let putId;
const putDataName = document.querySelector("#recipientName")
const putDataPrice = document.querySelector("#recipientName2")

document.querySelector(".table-body").addEventListener("click", async(e) => {
    if (e.target.matches(".edit_btn")) {
        const res = await fetch(`/admin/coursegetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        putId = data.id
        putDataName.value = data.name
        putDataPrice.value = data.price

    } else if (e.target.matches(".delete_btn")) {

        window.location.reload()
        fetch(`/admin/coursedelete/${e.target.id}`, { method: "DELETE" })

    } else if (e.target.matches(".updated_btn_courses")) {

        fetch(`/admin/courseupdate/${putId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putDataName.value,
                price: putDataPrice.value
            })
        })
        window.location.reload()
    }
})

document.querySelector(".adding_teacher").addEventListener("click", () => {

    fetch('http://localhost:9000/admin/teacherpost', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList11.value,
            salary: exampleDataList12.value,
            password: exampleDataList15.value,
            courseId: exampleDataList13.value
        })
    })

    window.location.reload()
})

let putTeacherId
const putTeacherDataName = document.querySelector("#exampleDataList111")
const putTeacherDataSalary = document.querySelector("#exampleDataList121")
const putTeacherDataPassword = document.querySelector("#exampleDataList151")
const putTeacherDataCourseId = document.querySelector("#exampleDataList131")

document.querySelector(".table-body-teachers").addEventListener("click", async(e) => {
    if (e.target.matches(".delete_btn_teacher")) {
        fetch(`http://localhost:9000/admin/teacherdelete/${e.target.id}`, { method: "DELETE" })
        window.location.reload()
    } else if (e.target.matches(".edit_btn_teacher")) {
        const res = await fetch(`/admin/teachergetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        putTeacherId = data.id
        putTeacherDataName.value = data.name
        putTeacherDataSalary.value = data.salary
        putTeacherDataPassword.value = data.password
        putTeacherDataCourseId.value = data.courseId

    } else if (e.target.matches(".updated_btn_teachers")) {
        console.log(putTeacherId)
        fetch(`/admin/teacherupdate/${putTeacherId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putTeacherDataName.value,
                salary: putTeacherDataSalary.value,
                password: putTeacherDataPassword.value,
                courseId: putTeacherDataCourseId.value
            })
        })
        window.location.reload()
    }
})

document.querySelector(".adding_groups").addEventListener("click", () => {
    fetch("http://localhost:9000/admin/grouppost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList34.value,
            teacherId: exampleDataList35.value
        })
    })
    window.location.reload()
})

let putGroupId
const putGroupDataName = document.querySelector("#exampleDataList444")
const putGroupDataTeacherId = document.querySelector("#exampleDataList445")

document.querySelector(".table-body-groups").addEventListener("click", async(e) => {
    if (e.target.matches(".delete_btn_groups")) {
        fetch(`http://localhost:9000/admin/groupdelete/${e.target.id}`, { method: "DELETE" })
        window.location.reload()
    } else if (e.target.matches(".edit_btn_goups")) {
        const res = await fetch(`/admin/groupgetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        console.log(data);

        putGroupId = data.id
        putGroupDataName.value = data.name
        putGroupDataTeacherId.value = data.teacherId

    } else if (e.target.matches(".updated_btn_groups")) {
        console.log(putTeacherId)
        fetch(`/admin/groupupdate/${putGroupId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putGroupDataName.value,
                teacherId: putGroupDataTeacherId.value
            })
        })
        window.location.reload()
    }
})


document.querySelector(".adding_students").addEventListener("click", () => {
    fetch("http://localhost:9000/admin/studentpost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: exampleDataList901.value,
            password: exampleDataList900.value,
            groupId: exampleDataList899.value
        })
    })
    window.location.reload()
})

let putStudentId
const putStudentDataName = document.querySelector("#exampleDataList2006")
const putStudentDataPassword = document.querySelector("#exampleDataList2005")
const putStudentDataGroupId = document.querySelector("#exampleDataList2004")

document.querySelector(".table-body-students").addEventListener("click", async(e) => {
    if (e.target.matches(".delete_btn_student")) {
        fetch(`http://localhost:9000/admin/studentdelete/${e.target.id}`, { method: "DELETE" })
        window.location.reload()
    } else if (e.target.matches(".edit_btn_students")) {
        const res = await fetch(`/admin/studentgetupdate/${e.target.id}`, { method: "PUT" })
        const data = await res.json()

        console.log(data);

        putStudentId = data.id
        putStudentDataName.value = data.name
        putStudentDataPassword.value = data.password
        putStudentDataGroupId.value = data.groupId

    } else if (e.target.matches(".updated_btn_students")) {
        fetch(`/admin/studentupdate/${putStudentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: putStudentDataName.value,
                password: putStudentDataPassword.value,
                groupId: putStudentDataGroupId.value
            })
        })
        window.location.reload()
    }
})