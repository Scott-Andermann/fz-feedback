const RecordingProperty = ({label, value}: {label: string, value: string}) => {
    return ( 
        <div className="flex flex-row justify-between">
            <p className="">{label}</p>
            <p className="">{value}</p>
        </div>
     );
}
 
export default RecordingProperty;