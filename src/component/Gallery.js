//yg trv ka import gallery sin terb brer vea ban
export function Gallery(){
    return(
        <section>
            <h1 style={heading}> Yaaaaa!! It's Front End Timee </h1>
            <Profile />
            <Profile />
            <Profile /> 
        </section>
    )
}
export default function Profile(){
    return(
        <img
            src="https://i.ytimg.com/vi/wnt26Iboy8E/maxresdefault.jpg"
            alt="nguy dek"
            style={{width:250}}
        />
    )
}
// object styleSheet
const heading = {
    textAlign: 'center',
    fontSize: 50
}