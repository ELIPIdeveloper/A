import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers";

env.allowLocalModels = true;
env.localModelPath = "./models/";

let pipe;

export async function loadModel(){
    pipe = await pipeline(
        "automatic-speech-recognition",
        "whisper-base",
        { local_files_only: true }
    );

    alert("مدل آماده شد (آفلاین)");
}

window.loadModel = loadModel;

window.run = async function(){

    const file = document.getElementById("audio").files[0];
    if(!file) return alert("فایل انتخاب نشده");

    const res = await pipe(file, {
        language: "fa",
        task: "transcribe"
    });

    document.getElementById("out").value = res.text;
}
