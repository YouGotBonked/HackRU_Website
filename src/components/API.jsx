
export default function useSkinVerify() {

    const serverName = "https://dinghy-praising-manicotti.ngrok-free.dev"

    async function skinVerify(image) {
        try{
            const healthy = fetch(`${serverName}/health`, {
                headers: { 'ngrok-skip-browser-warning': 'true' }
            });
            if (!healthy || healthy.model_loaded === false) throw new Error("API not working");

            const formData = new FormData();
            formData.append('file', image);        // image should be a File or Blob
            formData.append('consent', true);

            const response = await fetch(`${serverName}/predict`, {
                method: 'POST',
                body: formData,
                headers: { 'ngrok-skip-browser-warning': 'true' }
            });

            const results = await response.json();
            //console.log(response.status, response.headers.get('content-type'), results);
            //const finalResults = JSON.parse(results);
            const final = {
                top_class: results.top_class,
                prob: results.probs[results.top_class],
                disclaimer: results.disclaimer,
            }
            console.log(final);
            return final
        } catch (e){
            console.log(e)
        }
    }

    return skinVerify
}