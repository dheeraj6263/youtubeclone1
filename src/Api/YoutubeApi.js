import axios from 'axios'
let Key = "AIzaSyC6lpChaRLvs5nSMERxxsXycxz_Dhfep0k"
export const baseParams = {
    part: "snippet",
    maxResults: 10,
    key: Key,
}
let YoutubeApi = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",




});
export default YoutubeApi