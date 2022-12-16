import { useState, useEffect } from "react";
import React from "react";
import Spinner from "./Spinner";
import Card from "./Card";

function Container() {
	const [data, setData] = useState(null);
	const [page, setPage] = useState(1);
	const [url, setUrl] = useState(
		`https://newsapi.org/v2/everything?q=tesla&from=2022-11-16&sortBy=publishedAt&apiKey=0f3c5ed1000247359045725ad78ea91e&&pageSize=10&page=${page}`
	);
	// const [search, setSearch] = useState('tesla');
	//     const [data, setData] = useState([
	// {
	// "source": {
	// "id": null,
	// "name": "Motor.ru"
	// },
	// "author": "Лиза Будрина",
	// "title": "Evolute i-Pro – самый популярный электрокар в России",
	// "description": "В лидеры сегмента электромобилей вышел Evolute i-Pro, китайский седан Dongfeng, который с осени этого года производится на российском заводе «Моторинвест» в Липецкой области под маркой Evolute. «Автостат» со ссылкой на данные АО «Электронный паспорт» сообщает…",
	// "url": "https://motor.ru/news/evs-sales-russia-16-12-2022.htm",
	// "urlToImage": "https://motor.ru/imgs/2022/12/16/08/5715947/3df24b0b05960100d86ef77301309d95e9b1b594.jpg",
	// "publishedAt": "2022-12-16T08:37:06Z",
	// "content": "380 29 , 2021 . - , 0,3 0,7 .\r\n Tesla 84 , 22 . , Tesla . Evolute 79 , Volkswagen 72 . , , .\r\n «» , , Audi ( 29 ). 20 BYD ( )."
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Tom's Guide"
	// },
	// "author": "Aymeric Geoffre-Rouland",
	// "title": "Twitter : Elon Musk censure les comptes de nombreux éminents journalistes",
	// "description": "Après avoir banni le compte Twitter qui suivait son jet privé et supprimé le compte Twitter de Mastodon, Elon Musk vient de bannir une flopée d'éminents journalistes sous couvert de non-respect de la nouvelle politique d'utilisation de la plateforme. Sur Twit…",
	// "url": "https://www.tomsguide.fr/twitter-elon-musk-censure-les-comptes-de-nombreux-eminents-journalistes/",
	// "urlToImage": "https://www.tomsguide.fr/content/uploads/sites/2/2022/12/censure-twitter.jpg",
	// "publishedAt": "2022-12-16T08:34:07Z",
	// "content": "Après avoir banni le compte Twitter qui suivait son jet privé et supprimé le compte Twitter de Mastodon, Elon Musk vient de bannir une flopée d’éminents journalistes sous couvert de non-respect de la… [+2595 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Vnexpress.net"
	// },
	// "author": "VnExpress",
	// "title": "Tesla khó có năm 'tuyệt vời' như Musk kỳ vọng",
	// "description": "Giới phân tích cho rằng Tesla đang gặp vấn đề về nhu cầu và khó đạt mục tiêu giao xe năm nay nếu không hạ giá và tăng ưu đãi.",
	// "url": "https://vnexpress.net/tesla-kho-co-nam-tuyet-voi-nhu-musk-ky-vong-4548713.html",
	// "urlToImage": "https://vcdn1-kinhdoanh.vnecdn.net/2022/12/16/800x-1-1671178136-8419-1671178224.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=kQbExOiSdTyAxqajBylhAg",
	// "publishedAt": "2022-12-16T08:26:58Z",
	// "content": "Gii phân tích cho rng Tesla ang gp vn v nhu cu và khó t mc tiêu giao xe nm nay nu không h giá và tng u ãi.Trong bui báo cáo kt qu kinh doanh hi tháng 10, Musk ã d báo hãng xe in Tesla s có quý cui nm… [+2476 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Kocpc.com.tw"
	// },
	// "author": "Ross Wang",
	// "title": "「玩電」玩到開電力公司，Tesla Electric 將協助用戶賣電賺錢",
	// "description": "於加州的虛擬電廠試驗成功之後，對永續事業發展總非常激進 Elon Musk 先前提到的電力事業顯然是一劑強心針。現在則是確定將「儲能」而優則「賣電」，正式以 Tesla 之名進軍新事業支援販售電力回供電網使用的商業模式。繼續閱讀「玩電」玩到開電力公司，Tesla Electric 將協助用戶賣電賺錢報導內文。\nThe post 「玩電」玩到開電力公司，Tesla Electric 將協助用戶賣電賺錢 appeared first on 電腦王阿達.",
	// "url": "https://www.kocpc.com.tw/archives/473889",
	// "urlToImage": "https://www.kocpc.com.tw/wp-content/uploads/2022/12/1671178806-c8df48393188d2a9d44785838155c812.png",
	// "publishedAt": "2022-12-16T08:25:00Z",
	// "content": "Tesla Powerwall Elon Musk Tesla Tesla Electric Tesla\r\n Tesla – \r\nIntroducing Tesla Electric, the electricity plan that offers low-cost clean energy for homes with Powerwallstarting in Texas https://t… [+251 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Viva.co.id"
	// },
	// "author": "Muhammad Thoifur",
	// "title": "Mau Bangkrut, Tesla Kembali Jual Saham Karena Masalah Ini",
	// "description": "Tesla merupakan perusahaan otomotif besar yang memproduksi mobil listrik. Sudah banyak produk yang mereka kembangkan dan diminati oleh konsumen, termasuk pasar Indonesia.",
	// "url": "https://www.viva.co.id/otomotif/mobil/1555970-mau-bangkrut-tesla-kembali-jual-saham-karena-masalah-ini",
	// "urlToImage": "https://thumb.viva.co.id/media/frontend/thumbs3/2021/08/06/610cd84bb81d0-logo-mobil-listrik-tesla_665_374.jpg",
	// "publishedAt": "2022-12-16T08:19:11Z",
	// "content": "VIVA Otomotif  Tesla merupakan perusahaan otomotif besar yang memproduksi mobil listrik untuk pasar global. Sudah banyak produk yang mereka kembangkan dan diminati oleh konsumen di berbagai negara, t… [+1219 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Biztoc.com"
	// },
	// "author": "marketwatch.com",
	// "title": "Tesla and four other laggards should be avoided next year, this technical analyst says",
	// "description": "Stocks seem stuck. The S&P 500 SPX has been wobbling within a 200-point channel for about a month. Market frenemy Jay Powell on Wednesday made sure with his hawkish stance that it didn’t challenge the top of that range. Mark Newton, head of technical strategy…",
	// "url": "https://biztoc.com/x/63cae6373e611529",
	// "urlToImage": "https://c.biztoc.com/p/63cae6373e611529/og.webp",
	// "publishedAt": "2022-12-16T08:16:04Z",
	// "content": "Stocks seem stuck. The S&amp;P 500 SPX has been wobbling within a 200-point channel for about a month. Market frenemy Jay Powell on Wednesday made sure with his hawkish stance that it didnt challenge… [+167 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Moneycontrol"
	// },
	// "author": "Hindi.Moneycontrol.com Team, Moneycontrol Hindi",
	// "title": "Twitter ने कई पत्रकारों के अकाउंट किए सस्पेंड, क्या Elon Musk की कवरेज पड़ी भारी?",
	// "description": "Twitter : ट्विटर ने गुरुवार को सीएनएन, द न्यूयॉर्क टाइम्स और द वाशिंगटन पोस्ट के लगभग आधा दर्जन से ज्यादा पत्रकारों के अकाउंट बैन कर दिए। खास बात यह रही कि ट्विटर ने कोई वजह बताए बिना यह कार्रवाई की है। इस क्रम में सीएनएन के डॉनी ओ सुलीवन, द न्यूयॉर्क टाइम्स …",
	// "url": "https://hindi.moneycontrol.com/news/world/twitter-suspends-accounts-of-more-than-half-dozen-journalists-from-news-organizations-covering-elon-musk-943531.html",
	// "urlToImage": "https://images.moneycontrol.com/static-hindinews/2022/07/elon-musk-1-770x431.jpg",
	// "publishedAt": "2022-12-16T08:11:22Z",
	// "content": "Journalists who cover Elon Musk have been suspended on Twitter tonight: @Donie O'Sullivan from CNN, Aaron Rupar and the Washington Post's @drewharwell. Rupar tells me he has \"no idea\" why it happened… [+51 chars]"
	// },
	// {
	// "source": {
	// "id": "focus",
	// "name": "Focus"
	// },
	// "author": "Von Gastautor Gabor Steingart",
	// "title": "Gastbeitrag von Gabor Steingart - Elon Musk lebt vor, wie dicht Genie und Wahnsinn beieinander liegen",
	// "description": "Der Chef des Autobauers Tesla polarisiert. Elon Musk war einst der reichste Mann der Welt und eine Art Vorzeige-Unternehmer. Nach einigen fragwürdigen Entscheidungen scheint sein Stern zu sinken. Doch viele Analysten empfehlen Anlegern die Tesla-Aktie zum Kau…",
	// "url": "https://www.focus.de/finanzen/gastbeitrag-von-gabor-steingart-elon-musk-lebt-vor-wie-dicht-genie-und-wahnsinn-beieinander-liegen_id_180460502.html",
	// "urlToImage": "https://p6.focus.de/img/fotos/id_180460501/musk.jpg?im=Crop%3D%280%2C54%2C1200%2C600%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=f178e07ef387475022a93106756a5b3575fe063307fa9d5431cac90acf339073",
	// "publishedAt": "2022-12-16T08:07:51Z",
	// "content": "Der Chef des Autobauers Tesla polarisiert. Elon Musk war einst der reichste Mann der Welt und eine Art Vorzeige-Unternehmer. Nach einigen fragwürdigen Entscheidungen scheint sein Stern zu sinken. Doc… [+6979 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Www.nu.nl"
	// },
	// "author": "onze techredactie",
	// "title": "Twitter blokkeert zonder uitleg accounts van prominente journalisten",
	// "description": "Een aantal vooraanstaande journalisten van onder andere The New York Times, CNN en The Washington Post zijn zonder enige waarschuwing of uitleg geblokkeerd op Twitter. De verslaggevers hebben zich de afgelopen dagen kritisch uitgelaten over de blokkade van ee…",
	// "url": "https://www.nu.nl/tech/6242484/twitter-blokkeert-zonder-uitleg-accounts-van-prominente-journalisten.html",
	// "urlToImage": "https://media.nu.nl/m/jg0x2q5ahlcm_wd1280/twitter-blokkeert-zonder-uitleg-accounts-van-prominente-journalisten-tech-nunl.jpg",
	// "publishedAt": "2022-12-16T08:07:01Z",
	// "content": "16 dec 2022 om 08:54Update: 19 minuten geleden\r\nEen aantal vooraanstaande journalisten van onder andere The New York Times, CNN en The Washington Post zijn zonder enige waarschuwing of uitleg geblokk… [+2072 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Phonandroid"
	// },
	// "author": "William Zimmer",
	// "title": "Voiture électrique : nouveau record du monde, la Lucid Air Sapphire explose la Tesla Model S Plaid",
	// "description": "Depuis son lancement, la Tesla Model S Plaid fait partie des voitures électriques les plus rapides du monde, mais a-t-elle vraiment une chance face à la prochaine Lucid Air Sapphire de 2023 ? La chaîne YouTube Hagerty a fait s’affronter les...",
	// "url": "https://www.phonandroid.com/voiture-electrique-nouveau-record-du-monde-la-lucid-air-sapphire-explose-la-tesla-model-s-plaid.html",
	// "urlToImage": "https://img.phonandroid.com/2022/12/Lucid-Air-Sapphire-vs-Tesla-Model-S-Plaid.jpg",
	// "publishedAt": "2022-12-16T08:05:19Z",
	// "content": "Depuis son lancement, la Tesla Model S Plaid fait partie des voitures électriques les plus rapides du monde, mais a-t-elle vraiment une chance face à la prochaine Lucid Air Sapphire de 2023 ? La chaî… [+2197 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Publico.pt"
	// },
	// "author": "publico@publico.pt",
	// "title": "Sexta na TV: Ray e Elon Musk No Limiar do Desconhecido",
	// "description": "Escolhas para ficar a ver televisão.",
	// "url": "https://www.publico.pt/2022/12/16/culturaipsilon/noticia/sexta-tv-ray-elon-musk-limiar-desconhecido-2031580",
	// "urlToImage": "https://imagens.publico.pt/imagens.aspx/1761213?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Ipsilon.png",
	// "publishedAt": "2022-12-16T08:03:00Z",
	// "content": "O Padre PugilistaTVCine Top, 21h30\r\nMark Wahlberg dá vida a um filme inspirado na história real de Stuart Long, pugilista que se virou para a fé quando um impedimento físico o tirou do ringue. Acabou… [+3799 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Biztoc.com"
	// },
	// "author": "youtube.com",
	// "title": "Elon Musk Unloads More Tesla Shares, Bringing Sale Total to $40 Billion",
	// "description": "According to an SEC filing, Elon Musk has sold another 22 million shares worth $3.6 billion. SUBSCRIBE | http://t.st/TheStreetTV ... #elonmusk",
	// "url": "https://biztoc.com/x/1471bfb741e84148",
	// "urlToImage": "https://c.biztoc.com/p/1471bfb741e84148/og.webp",
	// "publishedAt": "2022-12-16T08:02:15Z",
	// "content": "According to an SEC filing, Elon Musk has sold another 22 million shares worth $3.6 billion. SUBSCRIBE | http://t.st/TheStreetTV ... \r\n#elonmusk\r\n This story appeared on youtube.com, 2022-12-15."
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Gazeta.ru"
	// },
	// "author": "Газета.Ru",
	// "title": "В сети показали Tesla Cybertruck со встроенной палаткой и кинотеатром",
	// "description": "Компания Space Campers представила сборную палатку, которую можно установить на электропикап Tesla Cybertruck, превратив его в полноценный фургон для кемпинга. Об этом сообщает портал Finance Yahoo.\n\nПалатка крепится на верхнюю часть ...",
	// "url": "https://www.gazeta.ru/tech/news/2022/12/16/19284655.shtml",
	// "urlToImage": "https://img.gazeta.ru/files3/37/15951037/space-pic_32ratio_900x600-900x600-17652.jpg",
	// "publishedAt": "2022-12-16T07:58:07Z",
	// "content": "Space Campers ,   Tesla Cybertruck,    . Finance Yahoo.\r\n   ,  .   ,     .  «»  .\r\n ,    . —  ,     .\r\n  Cybertruck $24 . ( 1,5 .). ,  2024 . \r\n Tesla Cybertruck  2019 .      .\r\n «.Ru»  ,   Tesla Ste… [+14 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Caradisiac.com"
	// },
	// "author": "Cédric Pinatel",
	// "title": "Combien les voitures électriques perdent-elles d'autonomie l'hiver ?",
	// "description": "Tout le monde le sait, les voitures électriques perdent de l’autonomie lorsqu’il fait froid à cause des performances limitées de leurs batteries dans ces conditions. Mais dans quelles proportions ?",
	// "url": "https://www.caradisiac.com/combien-les-voitures-electriques-perdent-elles-d-autonomie-l-hiver-199739.htm",
	// "urlToImage": "https://images.caradisiac.com/images/9/7/3/9/199739/S1-combien-les-voitures-electriques-perdent-elles-d-autonomie-l-hiver-739029.jpg",
	// "publishedAt": "2022-12-16T07:57:11Z",
	// "content": "Contrairement à la technologie du moteur thermique, celle des voitures électriques dépend beaucoup des conditions de température. Leurs batteries fonctionnent de manière optimale lorsque la températu… [+1750 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Digitimes"
	// },
	// "author": "DIGITIMES",
	// "title": "China's EV exports won't be a mostly Tesla story for much longer",
	// "description": "Auto exports from China have surged this year as domestic automakers look to establish themselves beyond their home market.",
	// "url": "https://www.digitimes.com/news/a20221216VL209/china-vehicle.html&chid=10",
	// "urlToImage": "https://img.digitimes.com/newsshow/20221216vl209_files/2_2b.jpg",
	// "publishedAt": "2022-12-16T07:53:46Z",
	// "content": "Save my User ID and Password\r\nSome subscribers prefer to save their log-in information so they do not have to enter their User ID and Password each time they visit the site. To activate this function… [+307 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Cornucopia.se"
	// },
	// "author": "Lars Wilderang",
	// "title": "Börserna faller vidare i Asien – måttligare elpriser i norra Sverige – men nu kommer berättelserna om frysande svenska barnfamiljer",
	// "description": "Stockholmsbörsen föll hårt igår tillsammans med de amerikanska börserna och nedgångarna fortsätter i de asiatiska tidszonerna under morgonen. Elpriserna är idag måttligare i norra Sverige, men berättelserna om frysande barnfamiljer börjar nu nå media.",
	// "url": "https://cornucopia.se/2022/12/borserna-faller-vidare-i-asien-mattligare-elpriser-i-norra-sverige-men-nu-kommer-berattelserna-om-frysande-svenska-barnfamiljer/",
	// "urlToImage": "https://cornucopia.se/wp-content/uploads/2022/12/japan_tokyo_taxibilar.jpg",
	// "publishedAt": "2022-12-16T07:53:41Z",
	// "content": "Stockholmsbörsen föll hårt igår tillsammans med de amerikanska börserna och nedgångarna fortsätter i de asiatiska tidszonerna under morgonen. Elpriserna är idag måttligare i norra Sverige, men berätt… [+2913 chars]"
	// },
	// {
	// "source": {
	// "id": "newsweek",
	// "name": "Newsweek"
	// },
	// "author": "Giulia Carbonaro",
	// "title": "Elon Musk Flees Call After Grilling by Journalists: 'Think Elon Has Left'",
	// "description": "Musk faced intense questions from reporters over the banning of several journalists on Twitter.",
	// "url": "https://www.newsweek.com/elon-musk-flees-call-after-grilling-journalists-1767571",
	// "urlToImage": "https://d.newsweek.com/en/full/2165624/elon-musk-twitter.jpg",
	// "publishedAt": "2022-12-16T07:44:06Z",
	// "content": "After suspending the accounts of several journalists on Twitter, Elon Musk reportedly fled a Twitter Spaces conference chat hosted by Buzzfeed's Kate Notopoulos where reporters were questioning him a… [+1957 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Orf.at"
	// },
	// "author": "ORF.at",
	// "title": "Musk sperrt Journalisten auf Twitter",
	// "description": "Der US-Kurzbotschaftendienst Twitter hat die Konten mehrerer Journalisten und Journalistinnen gesperrt, die über das Unternehmen und seinen neuen Chef, Multimilliardär Elon Musk, berichtet hatten. Betroffen war am Donnerstag (Ortszeit) mehr als ein halbes Dut…",
	// "url": "https://orf.at/stories/3297915/",
	// "urlToImage": "https://ibs.orf.at/news?image=https%3A%2F%2Fassets.orf.at%2Fmims%2F2022%2F51%2F49%2Fcrops%2Fw%3D1200%2Ch%3D630%2Cq%3D75%2F1609976_master_590249_twitter_musk_journalisten_ausgesperrt_r.jpg%3Fs%3D789373cafe4d094b0467fc7ba50cfd377d8feb1c",
	// "publishedAt": "2022-12-16T07:37:51Z",
	// "content": "Andere hatten kritisch über das Vorgehen Musks bei Twitter berichtet, wie etwa die New York Times schreibt. Viele der Journalistinnen und Journalisten hatten Zehntausende Follower auf Twitter, hieß e… [+6517 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "MacGeneration"
	// },
	// "author": "Nicolas Furno",
	// "title": "Elon Musk a lancé une purge des comptes qui lui déplaisent sur Twitter",
	// "description": "Avant d’acheter Twitter, Elon Musk le répétait à qui voulait l’entendre : fervent partisan de la liberté d’expression, il comptait faire du réseau social l’endroit sur le web où chacun pourrait s’exprimer sans limite. Quitte à lui faire du mal personnellement…",
	// "url": "https://www.macg.co/services/2022/12/elon-musk-lance-une-purge-des-comptes-qui-lui-deplaisent-sur-twitter-133499",
	// "urlToImage": "https://cdn.mgig.fr/2022/12/mga-017f934c-w375-w1500-w750_accroche.jpg",
	// "publishedAt": "2022-12-16T07:30:00Z",
	// "content": "Avant dacheter Twitter, Elon Musk le répétait à qui voulait lentendre : fervent partisan de la liberté dexpression, il comptait faire du réseau social lendroit sur le web où chacun pourrait sexprimer… [+3782 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Biztoc.com"
	// },
	// "author": "youtube.com",
	// "title": "Musk Sells $3.6 Billion Worth Of Tesla Shares",
	// "description": "Musk Sells $3.6 Billion Worth Of Tesla Shares NBC News Tesla stock slammed this week as Musk sells more shares Yahoo Finance Elon Musk In Financial TROUBLE? Twitter CEO Sells $3.6B Worth Of Tesla Shares The Hill Why Elon Musk's Twitter Affair Could Cots Him T…",
	// "url": "https://biztoc.com/x/45004c05f5fa1bc3",
	// "urlToImage": "https://c.biztoc.com/p/45004c05f5fa1bc3/og.webp",
	// "publishedAt": "2022-12-16T07:22:05Z",
	// "content": "Musk Sells $3.6 Billion Worth Of Tesla Shares NBC NewsTesla stock slammed this week as Musk sells more shares Yahoo FinanceElon Musk In Financial TROUBLE? Twitter CEO Sells $3.6B Worth Of Tesla Share… [+200 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "futurezone.at"
	// },
	// "author": "futurezone.at",
	// "title": "Musk sperrt kritische Journalisten auf Twitter",
	// "description": "Rund ein halbes Dutzend Journalist*innen wurden gesperrt. Die Accounts dürften aber bald wieder zugelassen werden.",
	// "url": "https://futurezone.at/digital-life/musk-sperrt-kritische-journalisten-auf-twitter-doxxing-elonjet-kind-angriff-umfrage-block/402261219",
	// "urlToImage": "https://image.futurezone.at/images/facebook/7494231/46-192787705.jpg",
	// "publishedAt": "2022-12-16T07:18:30Z",
	// "content": "16.12.2022\r\nRund ein halbes Dutzend Journalist*innen wurden gesperrt. Die Accounts dürften aber bald wieder zugelassen werden.\r\nAuch die nun gesperrten Accounts der Journalist*innen hätten laut Musk … [+526 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Hotnews.ro"
	// },
	// "author": null,
	// "title": "Twitter a suspendat conturile mai multor jurnalişti care scriu despre industria tehnologiei",
	// "description": "Twitter a suspendat joi, fără explicaţii, conturile mai multor jurnalişti care scriu despre industria tehnologiei, conform CNN.",
	// "url": "https://economie.hotnews.ro/stiri-companii-25968697-twitter-suspendat-joi-fara-explicatii-conturile-mai-multor-jurnalisti-care-scriu-despre-industria-tehnologiei.htm",
	// "urlToImage": "https://media.hotnews.ro/media_server1/image-2022-10-9-25835884-0-elon-musk.jpg",
	// "publishedAt": "2022-12-16T07:16:00Z",
	// "content": "Twitter a suspendat joi, fr explicaii, conturile mai multor jurnaliti care scriu despre industria tehnologiei, conform CNN.\r\nConturile aparinând lui Donie OSullivan de la CNN, Ryan Mac de la New York… [+2238 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Ixbt.com"
	// },
	// "author": "jin@ixbt.com (Jin)",
	// "title": "Рекордные поставки иномарок в Россию идут через Владивостокскую таможню",
	// "description": "На фоне почти трехкратного падения продаж новых автомобилей в России заметно вырос спрос на автомобили, которые ввозят из других стран. За первые 11 месяцев года через Владивостокскую таможню прошло более 170 тысяч машин, ввезенных для личного пользования. За…",
	// "url": "https://www.ixbt.com/news/2022/12/16/rekordnye-postavki-inomarok-v-rossiju-idut-cherez-vladivostokskuju-tamozhnju.html",
	// "urlToImage": "https://www.ixbt.com/img/n1/news/2022/11/5/1765696211_0_0_3180_1789_1920x0_80_0_0_21e7fa6b0169f23850050ba085054890_large_large.png",
	// "publishedAt": "2022-12-16T07:15:00Z",
	// "content": ", . 11 170 , .\r\n 11 2022 170 . . 66%.\r\n- \r\n, , . , 60 .\r\n , 28 , , . , , .\r\n ,  , , .  78 . .\r\n16 2022 10:15\r\n: Jin\r\n| : \r\n| : \r\n« », « » Omoda C5\r\n<ul><li>: 170 . </li><li> 10:075« », « » Omoda C5. … [+1065 chars]"
	// },
	// {
	// "source": {
	// "id": "der-tagesspiegel",
	// "name": "Der Tagesspiegel"
	// },
	// "author": "Der Tagesspiegel",
	// "title": "„Besorgniserregend, aber nicht überraschend“: Elon Musk sperrt Konten von mehreren Journalisten",
	// "description": "Nach der Twitter-Sperre ihrer Berichterstattung über Elon Musk erwartet der renommierte Sender CNN nun eine Erklärung von dem Multimilliardär. Dieser hält sich bislang zurück.",
	// "url": "https://www.tagesspiegel.de/wirtschaft/besorgniserregend-aber-nicht-uberraschend-elon-musk-sperrt-konten-von-mehreren-journalisten-9043312.html",
	// "urlToImage": "https://www.tagesspiegel.de/images/elon-musk-arrives-on-the-red-carpet-for-the-met-gala-at-the-metropolitan-museum-of-art-celebrating-the-costume-institut1/alternates/BASE_16_9_W1400/elon-musk-arrives-on-the-red-carpet-for-the-met-gala-at-the-metropolitan-museum-of-art-celebrating-the-costume-institut.jpeg",
	// "publishedAt": "2022-12-16T07:07:29Z",
	// "content": "Der US-Kurzbotschaftendienst Twitter hat die Konten von mehreren Journalisten gesperrt, die über das Unternehmen und seinen neuen Chef Elon Musk berichtet hatten. \r\nDie Tagesspiegel-App Aktuelle Nach… [+1833 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Meneame.net"
	// },
	// "author": "elgranmago",
	// "title": "Twitter bloquea la cuenta de varios periodistas que supuestamente revelaron información personal sobre Elon Musk",
	// "description": "En concreto, los periodistas, pertenecientes a medios como 'The New York Times', 'The Washington Post' o la cadena CNN, habían informado sobre la prohibición de una cuenta de Twitter que publicaba actualizaciones en tiempo real sobre el paradero del avión pri…",
	// "url": "https://www.meneame.net/m/actualidad/twitter-bloquea-cuenta-varios-periodistas-supuestamente-personal",
	// "urlToImage": null,
	// "publishedAt": "2022-12-16T07:03:48Z",
	// "content": "El mismo que hablaba de #sensura ahora le ha cogido gustillo. No sé si va a recuperar la pasta que le costó y de paso si sus brillantes volantazos y venta de acciones terminarán de poner la acción de… [+20 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Theregister.com"
	// },
	// "author": "Simon Sharwood",
	// "title": "To the Banmobile! Huawei inks deal to create global high-end automotive brand",
	// "description": "Surely it must realize regulators aren't going to go for this? With its telecoms and consumer electronics businesses prevented from addressing rich overseas markets, Huawei has set itself on the road to a new industry: electric cars.…",
	// "url": "https://www.theregister.com/2022/12/16/huawei_smart_car_ambitions/",
	// "urlToImage": "https://regmedia.co.uk/2022/12/16/shutterstock_editorial_only_batman_batmobile.jpg",
	// "publishedAt": "2022-12-16T07:01:06Z",
	// "content": "With its telecoms and consumer electronics businesses prevented from addressing rich overseas markets, Huawei has set itself on the road to a new industry: electric cars.\r\nNews of the Chinese giant's… [+1644 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Galaxiemedia.fr"
	// },
	// "author": "Jules Ponthieu",
	// "title": "Censure sur Twitter : Elon Musk supprime le compte de son concurrent direct",
	// "description": "Mastodon. Ce nom ne vous dit peut être pas encore grand-chose mais ce nouveau réseau social, auto-identifié comme l’alternative (et donc le concurrent direct) de Twitter fait beaucoup parler de lui ces dernières semaines. Après deux premiers mois chaotiques p…",
	// "url": "https://cms.galaxiemedia.fr/tomsguide/censure-sur-twitter-elon-musk-supprime-le-compte-de-son-concurrent-direct/",
	// "urlToImage": "https://cms.galaxiemedia.fr/content/uploads/sites/2/2022/12/twitter-gf210ae1c6-1280.jpg",
	// "publishedAt": "2022-12-16T07:00:00Z",
	// "content": "Mastodon. Ce nom ne vous dit peut être pas encore grand-chose mais ce nouveau réseau social, auto-identifié comme lalternative (et donc le concurrent direct) de Twitter fait beaucoup parler de lui ce… [+2200 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Hibridosyelectricos.com"
	// },
	// "author": "Javier Gómara",
	// "title": "El nuevo y llamativo color \"Midnight Red Cherry\" del Tesla Model Y ya está en camino",
	// "description": "Tras haberse anunciado hace unas semanas esta es la primera vez que podemos ver el nuevo color Midnight Red Cherry del Tesla Model Y al natural. La Gigafactoría de Berlín ya ensaña con la tonalidad en su taller de pintura.",
	// "url": "https://www.hibridosyelectricos.com/articulo/tesla/midnight-red-cherry-tesla-model/20221215084436065985.html",
	// "urlToImage": "https://www.hibridosyelectricos.com/media/hibridos/images/2022/12/15/2022121508420224926.jpg",
	// "publishedAt": "2022-12-16T07:00:00Z",
	// "content": "En más de una ocasión a Elon Musk se le ha llenado la boca asegurando que el taller de pintura de la Gigafactoría de Berlín es el más avanzado de la industria del automóvil. Aunque nadie pone en duda… [+2476 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Barron's"
	// },
	// "author": "Al Root",
	// "title": "Why Some EV Makers Don’t Make Cars at All",
	// "description": "“Asset light” is catching on among upstart companies selling electric vehicles. Foxconn and Magna International want a piece of the action.",
	// "url": "https://www.barrons.com/articles/tesla-gm-betting-future-on-electric-vehicles-foxconn-magna-51671144997",
	// "urlToImage": "https://images.barrons.com/im-684444/social",
	// "publishedAt": "2022-12-16T07:00:00Z",
	// "content": "Manufacturing excellence has been critical for car makers ever since Henry Ford\r\n popularized the assembly line. Now, some auto makers believe they can win by not making cars at all. A growing number… [+8682 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Mail.ru"
	// },
	// "author": "Никита Лактюшин",
	// "title": "В сети показали Tesla Cybertruck со встроенным кинотеатром (видео)",
	// "description": "Даже есть душевая кабина и обеденный стол. Объявлена цена «расширения» для авто.\nTesla планирует начать продажи Cybertruck уже в 2023 году. Сторонние производители уже начали придумывать необычные приспособления, которые сделают из машины своеобразный швейцар…",
	// "url": "https://hi-tech.mail.ru/news/61080-v-seti-pokazali-tesla-cybertruck-so-vstroennym-kinoteatrom-video/",
	// "urlToImage": "https://resizer.mail.ru/p/244328e7-299b-5293-a594-82853823a750/AQAKZJFRYFJZRai1ExpnRZZ35oLfmgjxrswRZRYYMNGBSW2IUuVyQ1G3rvtCHxcqLVyscB9udi6JfKKHjJMX2H1FFug.png",
	// "publishedAt": "2022-12-16T06:45:00Z",
	// "content": "Tesla Cybertruck 2023 . , . Space Campers . Cybertruck.\r\n . : , Cybertruck . . , .\r\n . , . «» Cybertruck:\r\n , . , . . .\r\n Space Campers , . 24 000 (1,55 ). Cybertruck. , . 2024 .\r\n, Tesla    Cybertru… [+29 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Wflx.com"
	// },
	// "author": "PRNewswire",
	// "title": "NEOBIO Museum Officially Launched in Shanghai, China",
	// "description": null,
	// "url": "https://www.wflx.com/prnewswire/2022/12/16/neobio-museum-officially-launched-shanghai-china/",
	// "urlToImage": "https://www.wflx.com/pf/resources/images/logo-icons/wflx.svg?d=304",
	// "publishedAt": "2022-12-16T06:42:00Z",
	// "content": "Cultivate Tomorrow's Talents and Inspire Boundless Exploration\r\nSHANGHAI, Dec. 16, 2022 /PRNewswire/ -- On December 15, the first interactive, experiential science and technology museum in China the … [+5446 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "FOX 8 Live WVUE"
	// },
	// "author": "PRNewswire",
	// "title": "NEOBIO Museum Officially Launched in Shanghai, China",
	// "description": null,
	// "url": "https://www.fox8live.com/prnewswire/2022/12/16/neobio-museum-officially-launched-shanghai-china/",
	// "urlToImage": "https://www.fox8live.com/pf/resources/images/logo-icons/wvue.svg?d=304",
	// "publishedAt": "2022-12-16T06:42:00Z",
	// "content": "Cultivate Tomorrow's Talents and Inspire Boundless Exploration\r\nSHANGHAI, Dec. 16, 2022 /PRNewswire/ -- On December 15, the first interactive, experiential science and technology museum in China the … [+5446 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "TheJournal.ie"
	// },
	// "author": "AFP",
	// "title": "Twitter suspends accounts of multiple journalists who wrote about Elon Musk",
	// "description": "Among those suspended is CNN’s Donie O’Sullivan.",
	// "url": "https://www.thejournal.ie/twitter-suspends-accounts-journalists-writing-musk-5948190-Dec2022/",
	// "urlToImage": "https://img2.thejournal.ie/article/5948190/river/?height=400&version=5948191",
	// "publishedAt": "2022-12-16T06:40:38Z",
	// "content": "TWITTER HAS SUSPENDED accounts of more than a half-dozen journalists who had been writing about the company and its new owner Elon Musk.\r\nSilencing journalists at Twitter while claiming to be a free … [+3949 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Cowcotland.com"
	// },
	// "author": "Sébastien Vandeborre",
	// "title": "Jouer ou conduire, il faut choisir ! Tesla ajoute Steam sur ses voitures (sauf celles en Atom)",
	// "description": "Jamais à court d'idée pour ajouter des fonctionnalités absolument inutiles aux voitures, Tesla et Elon Musk ont présenté l'intégration de Steam dans les véhicules du groupe. Un bon moyen de passer le temps pendant que la voiture est en charge, mais à une cond…",
	// "url": "https://www.cowcotland.com/news/84492/jouer-ou-conduire-il-faut-choisir-tesla-ajoute-steam-sur-ses-voitures-sauf-celles-en-atom.html",
	// "urlToImage": "https://www.cowcotland.com/images/news/2022/12/tesla-f.jpg",
	// "publishedAt": "2022-12-16T06:40:00Z",
	// "content": "Jamais à court d'idée pour ajouter des fonctionnalités absolument inutiles aux voitures, Tesla et Elon Musk ont présenté l'intégration de Steam dans les véhicules du groupe. Un bon moyen de passer le… [+268 chars]"
	// },
	// {
	// "source": {
	// "id": "liberation",
	// "name": "Libération"
	// },
	// "author": "LIBERATION, AFP",
	// "title": "Elon Musk suspend les comptes Twitter de journalistes qui couvraient… Twitter",
	// "description": "Mercredi, le patron du réseau social avait suspendu le compte qui rapportait automatiquement les trajets de son jet privé. Il a ensuite suspendu ceux qui avaient relayé cette information.",
	// "url": "https://www.liberation.fr/lifestyle/hightech/elon-musk-suspend-les-comptes-twitter-de-journalistes-qui-couvraient-twitter-20221216_VQZAOUQWCZE27MV6ZMJWCK3P4A/",
	// "urlToImage": "https://www.liberation.fr/resizer/Qcooe4dVe8lVlo5QD1hyntIzRCU=/1200x0/filters:format(jpg):quality(70):focal(1977x1456:1987x1466)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/GLXQKPYBEJFB3JA3CDGU5PRTGI.jpg",
	// "publishedAt": "2022-12-16T06:38:31Z",
	// "content": "CNN, le New York Times, ou le Washington Post mais aussi de nombreux journalistes indépendants font partie toutes dernières cibles dElon Musk. Twitter a suspendu jeudi les comptes de plusieurs journa… [+2467 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Overclockers.ru"
	// },
	// "author": "Niko4123",
	// "title": "Tesla превращает свои автомобили в игровые ПК на колесах и продает SSD за 350 долларов",
	// "description": "Автомобили Tesla моделей S и X оснащены мощным вариантом AMD Zen 2 и графическим процессором класса RDNA2 с 16 ГБ ОЗУ и вычислительной мощностью до 10 терафлопс, как у PlayStation 5",
	// "url": "https://overclockers.ru/blog/New_Intel_Raptor_ES/show/81223/tesla-prevraschaet-svoi-avtomobili-v-igrovye-pk-na-kolesah-i-prodaet-ssd-za-350-dollarov",
	// "urlToImage": "https://overclockers.ru/st/legacy/blog/416880/343636_O.jpg",
	// "publishedAt": "2022-12-16T06:34:50Z",
	// "content": "Tesla 2022 Steam   1 350 . \r\n Tesla S X 2022 Steam 2022.44.25. , AMD Zen 2 RDNA2 16 10 , PlayStation 5. Steam , AAA, Cyberpunk 2077 Witcher 2, 17- 8- , , . .\r\nTesla SSD 1 , . 350 . - , \" , , , \". , .… [+92 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Appbank.net"
	// },
	// "author": "テクノロジー記事班",
	// "title": "イーロン・マスク激怒、Twitter代替SNS「マストドン」が触れた逆鱗",
	// "description": "イーロン・マスクが買収した後、数々の方針転換が行われているTwitter。そんな中、マスク氏はTwitterの代替サービスとして注目されていた分散型SNS「マストドン(Mastodon)」の公式Twitterを停止し、タ […]",
	// "url": "https://www.appbank.net/2022/12/16/technology/2356808.php",
	// "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/12/2022-1216-Twitter-thumb-1.jpeg",
	// "publishedAt": "2022-12-16T06:32:58Z",
	// "content": "TwitterTwitterSNS(Mastodon)Twitter\r\n*Category:\r\n Technology *SourceThe Verge(1) ,(2) ,@elonmusk(Twitter) ,Tesla\r\nTwitterTwitterUISNSTwitter\r\nThe VergeTwitter1216239812\r\nWayback Machine12:39PM ET6:12P… [+277 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "Barron's"
	// },
	// "author": "Al Root",
	// "title": "The Surprise Winner if Elon Musk Falls Further Down the Rich List",
	// "description": "Elon Musk's wealth has taken a beating lately. Investors are undoubted aware. They probably feel more pain than Musk when Tesla stock falls.",
	// "url": "https://www.barrons.com/articles/elon-musk-tesla-third-richest-person-51671136265",
	// "urlToImage": "https://images.barrons.com/im-686224/social",
	// "publishedAt": "2022-12-16T06:30:00Z",
	// "content": "Elon Musks wealth has taken a beating lately, making him only the worlds second-richest person. More declines could place him in third in a shift that would highlight how vast wealth can be found in … [+2690 chars]"
	// },
	// {
	// "source": {
	// "id": null,
	// "name": "L'Usine Nouvelle"
	// },
	// "author": "Elise Pontoizeau",
	// "title": "[L'industrie c'est fou] Voici ce à quoi auraient pu ressembler des appareils ménagers créés par Gaudí",
	// "description": "Le graphiste irlandais Marcus Byrne a imaginé une série d’appareils ménagers à l’esthétique inspirée des œuvres de l’architecte catalan Antoni Gaudí. Entre formes irrégulières, mosaïques et textures variées, ce projet artistique visuellement étonnant, est à c…",
	// "url": "https://www.usinenouvelle.com/article/l-industrie-c-est-fou-voici-ce-a-quoi-auraient-pu-ressembler-des-appareils-menagers-crees-par-gaudi.N2078256",
	// "urlToImage": "https://www.usinenouvelle.com/mediatheque/1/9/5/001410591_896x598_c.jpg",
	// "publishedAt": "2022-12-16T06:30:00Z",
	// "content": "Vous revenez de Barcelone et êtes déjà nostalgique de votre voyage? Votre intérieur sobrement décoré manque de peps? Avec ces appareils ménagers au look inspiré de lunivers de larchitecte catalan Ant… [+1908 chars]"
	// }]);

	// const fetchData = async ()=>{
	//     newData= await fetch(url);
	//     jsonData=await newData.json();

	//     setData(jsonData);
	// }
	// useEffect(() => {
	//     fetchData();
	// }, [])

	const handleNextClick = (event) => {
		event.preventDefault();
		const newPage = page + 1;
		setPage(newPage);
		setUrl(
			`https://newsapi.org/v2/everything?q=tesla&from=2022-11-16&sortBy=publishedAt&apiKey=0f3c5ed1000247359045725ad78ea91e&&pageSize=10&page=${page}`
		);
		fetchData();
		console.log(page);
	};
	const handlePrevClick = (event) => {
		event.preventDefault();
		if (page >= 1) {
			const newPage = page - 1;
			setPage(newPage);
			setUrl(
				`https://newsapi.org/v2/everything?q=tesla&from=2022-11-16&sortBy=publishedAt&apiKey=0f3c5ed1000247359045725ad78ea91e&&pageSize=10&page=${page}`
			);
			fetchData();
		}
	};

	const fetchData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setData(data.articles);
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return data == null ? (
		<Spinner />
	) : (
		<div className="container">
			<div className="container">
				<div className="row my-3">
					{data.map((obj) => {
						return (
							<div className="col-md-4 my-1" value={obj.url}>
								<Card
									// className="col"
									title={obj.title}
									desc={obj.description}
									urlToNews={obj.url}
									urlToImage={obj.urlToImage}
									content={obj.content}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="container">
				<button
					disabled={page <= 1}
					type="button"
					onClick={handlePrevClick}
					class="btn btn-primary my-3 mx-5"
				>
					Prev
				</button>
				<button
					type="button"
					onClick={handleNextClick}
					class="btn btn-primary my-3 mx-5"
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Container;
