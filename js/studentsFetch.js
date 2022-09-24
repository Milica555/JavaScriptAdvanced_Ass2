// s
async function dataFetch() {


    const url = "https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt";

    const data = await fetch(url).then(function (response) {
        if (response.status !== 200) {
            throw Error("Error while reading file.");
        }
        return response.text();
    });

    console.log(data);

    let parsedData = data.split("\n");

    return getStudents(parsedData).then(result => result);
}
