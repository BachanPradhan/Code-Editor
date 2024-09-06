// document.addEventListener('DOMContentLoaded', () => {
//     const htmlCode = document.getElementById('html-code');
//     const cssCode = document.getElementById('css-code');
//     const jsCode = document.getElementById('js-code');
//     const preview = document.getElementById('preview');

//     const updatePreview = () => {
//         const html = htmlCode.value;
//         const css = '<style>' + cssCode.value + '</style>';
//         const js = '<script>' + jsCode.value + '<\/script>';

//         const previewDoc = preview.contentDocument || preview.contentWindow.document;
//         previewDoc.open();
//         previewDoc.write(html + css + js);
//         previewDoc.close();
//     };

//     htmlCode.addEventListener('input', updatePreview);
//     cssCode.addEventListener('input', updatePreview);
//     jsCode.addEventListener('input', updatePreview);
// });


document.addEventListener('DOMContentLoaded', () => {
    const htmlCodeMirror = CodeMirror.fromTextArea(document.getElementById('html-code'), {
        mode: 'text/html',
        theme: 'material',
        lineNumbers: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    });

    const cssCodeMirror = CodeMirror.fromTextArea(document.getElementById('css-code'), {
        mode: 'css',
        theme: 'material',
        lineNumbers: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    });

    const jsCodeMirror = CodeMirror.fromTextArea(document.getElementById('js-code'), {
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    });

    const preview = document.getElementById('preview');

    const updatePreview = () => {
        const html = htmlCodeMirror.getValue();
        const css = '<style>' + cssCodeMirror.getValue() + '</style>';
        const js = '<script>' + jsCodeMirror.getValue() + '<\/script>';

        const previewDoc = preview.contentDocument || preview.contentWindow.document;
        previewDoc.open();
        previewDoc.write(html + css + js);
        previewDoc.close();
    };

    htmlCodeMirror.on('change', updatePreview);
    cssCodeMirror.on('change', updatePreview);
    jsCodeMirror.on('change', updatePreview);
});

