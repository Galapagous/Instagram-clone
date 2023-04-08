import Export1 from "../Assets/explore-1.jpg"
import Export2 from "../Assets/explore-2.jpg"
import Export3 from "../Assets/explore-3.jpg"
import Export4 from "../Assets/food22.jpg"
import Explore from "../Assets/explore-vid.mp4"

const ExploreData = [
    {
        id: 1,
        type: "combineImage",
        data: [Export1, Export2, Export3],
        likes: 200,
        comments: 10
    },
    {
        id: 2,
        type: "video",
        data: {Explore},
        likes: 300,
        comments: 30
    },
    {
        id: 3,
        type: "combineImage",
        data: [Export1, Export2, Export3],
        likes: 400,
        comments: 40
    },
    {
        id: 4,
        type: "combineImage",
        data: [Export1, Export2, Export3],
        likes: 500,
        comments: 50
    }
]

export default ExploreData