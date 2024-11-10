const send = document.getElementById('send');
send.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    // ambil value checkbox yang dicentang
    const checked = document.querySelectorAll('input[type="checkbox"]');
    const frontend = checked[0].checked;
    const backend = checked[1].checked;
    const fullstack = checked[2].checked;

    // buat link whatsapp untuk mengirimkan pesan
    const whatsappPesan = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject: ${project} \nFrontend: ${frontend ? 'Yes' : 'No'}\nBackend: ${backend ? 'Yes' : 'No'}\nFullstack: ${fullstack ? 'Yes' : 'No'}`);
    const nmrWhatsapp = "6282264244554";
    const url = `https://api.whatsapp.com/send?phone=${nmrWhatsapp}&text=${whatsappPesan}`;
    window.open(url);
});

// fungsi untuk ke halaman index
const back = document.getElementById('back');
back.addEventListener('click', () => {
    window.location.href = 'index.html';
});