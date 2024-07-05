const bcrypt = require('bcryptjs');

( async () => {
    try{
        const salt = await bcrypt.genSalt(15)
        const hash = await bcrypt.hash("testing", salt);
        console.log(`key: ${hash}`)
        const d = await bcrypt.compare("testing", hash);
        console.log(d)
    } catch (err) {

    }
})();

