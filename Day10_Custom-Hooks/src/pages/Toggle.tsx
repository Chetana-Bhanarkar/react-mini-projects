import useToggle from "../hooks/useToggle"

const Toggle = () => {
    const toggle = useToggle(false);

    return (
        <>
            <p>{toggle.toggleValue ? 'I am showing' : ''}</p>
            <button onClick={toggle.toggleText} >{toggle.toggleValue ? 'Hide' : 'Show'}</button>
        </>
    )
};

export default Toggle;