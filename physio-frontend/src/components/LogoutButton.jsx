function LogoutButton() {

    const logout = () => {

        localStorage.clear();

        window.location.href = "/";
    };

    return (

        <button
            onClick={logout}
            className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-4
                py-2
                rounded-xl
            "
        >
            Logout
        </button>

    );
}

export default LogoutButton;