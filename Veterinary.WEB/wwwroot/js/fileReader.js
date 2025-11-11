window.fileReaderHelper = {
    readAsDataUrl: function (input, dotNetRef) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            // e.target.result = "data:image/...;base64,...."
            dotNetRef.invokeMethodAsync("OnImageLoaded", e.target.result);
        };
        reader.readAsDataURL(file);
    }
};