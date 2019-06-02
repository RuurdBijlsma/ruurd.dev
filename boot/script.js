async function wake() {
    let pw = document.getElementById('password').value;
    console.log(pw);
    let r = await fetch('https://wake.ruurdbijlsma.com/', {
        method: "POST",
        body: { pass: pw }
    });
    let result = await r.text();
    alert(result);
}