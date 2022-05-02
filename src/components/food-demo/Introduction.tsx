import Card from "../UI/Card";

const Introduction = () => {

    const introStyle = {
        width: '50%',
        textAlign: 'center',
        fontSize:'0.8rem',
        padding:'0.1rem 1rem',
        color:'#666',
        top:'1rem',
        position:'absolute'
    }

    return (
        <Card style={introStyle}>
            <p style={{fontWeight: 'bolder'}}>Introduction</p>
            <p>Food Demo is an online delivery website, written with React in Typescript for Frontend and Firebase for
                Database, styled with Css Module.</p>
        </Card>
    )
}

export default Introduction;
