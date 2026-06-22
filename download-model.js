import { snapshot_download } from "https://cdn.jsdelivr.net/npm/@huggingface/hub";

await snapshot_download({
    repo_id: "Xenova/whisper-base",
    local_dir: "./models/whisper-base"
});

console.log("Model downloaded");
