// replace every lowercase L with a capital I
// and every capital I with alowercase L
// add funny images to let the user know they have been pranked!
const main = () => {

    const scheming :string[] = [
                   "https://st4.depositphotos.com/1001911/21888/v/1600/depositphotos_218880448-stock-illustration-scheming-emoticon.jpg"
                   ,"https://i.kym-cdn.com/entries/icons/original/000/031/260/Screen_Shot_2019-09-24_at_4.22.16_PM.png"
                   ,"https://media.tenor.com/IQcYOoTEuXYAAAAC/holy-moly.gif" 
                   ,"https://media.tenor.com/PJCNWkE311YAAAAd/slowly-turning-emoji.gif"
               ]
    const imgs = document.getElementsByTagName("img")

    for (let i :number = 0; i < imgs.length; i++) {
        imgs[i].src = scheming[Math.floor(Math.random()*scheming.length)]
    }

    const p = document.getElementsByTagName("p");
    const lis = document.getElementsByTagName("li");

    const prank = (ps) => {
        for (let i :number = 0; i < ps.length; i++) {
            const par = ps[i].innerText.split('');
            for(let ii = 0; ii <  par.length; ii++) {
                if (par[ii] === "l")
                    par[ii] = "I";
                else if (par[ii] === "I") 
                    par[ii] = "l";
            }
            ps[i].innerText = par.join('');
            ps[i].style.color = ("#" + Math.floor(Math.random() * 255).toString(16)  + 
            Math.floor(Math.random() * 255).toString(16)  + 
            Math.floor(Math.random() * 255).toString(16))
        }
    }
    prank(p)
    prank(lis)

    const h1s = document.getElementsByTagName("h1")
    prank(h1s)
    const goof = (hs) => {
        for (let i :number = 0; i < hs.length; i++) {
            hs[i].innerText = "you just got pranked!"
        }
    }

    goof(h1s)
    goof(document.getElementsByTagName("h2"))
    goof(document.getElementsByTagName("h3"))
    goof(document.getElementsByTagName("h4"))
    goof(document.getElementsByTagName("h5"))
    goof(document.getElementsByTagName("h6"))
}
main()
