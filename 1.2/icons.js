import {icons} from "/1.2/svg.js";
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll("[icon]").forEach(icon => {

        let icosz = icon.hasAttribute("size") ? icon.getAttribute("size") : 16;

        switch( icon.getAttribute("icon") ) {
            case 'anchor':
                icon.innerHTML = icons.anchor(icosz);
                ariaLabel("Ancora");
            break;
            case 'arrowright':
                icon.innerHTML = icons.arrowRight(icosz);
                ariaLabel("Seta para a direita");
            break;
            case 'arrowleft':
                icon.innerHTML = icons.arrowleft(icosz);
                ariaLabel("Seta para a esquerda");
            break;
            case 'calendar':
                icon.innerHTML = icons.calendar(icosz);
                ariaLabel("Calendario");
            break;
            case 'calendarfill':
                icon.innerHTML = icons.calendarfill(icosz);
                ariaLabel("Calendario");
            break;
            case 'camera':
                icon.innerHTML = icons.camera(icosz);
                ariaLabel("Camera de fotografia");
            break;
            case 'check':
                icon.innerHTML = icons.check(icosz);
                ariaLabel("Verificado");
            break;
            case 'caret':
                icon.innerHTML = icons.caret(icosz);
                ariaLabel("Cursor suspenso");
            break;
            case 'chevronup':
                icon.innerHTML = icons.chevronUp(icosz);
                ariaLabel("Seta para cima");
            break;
            case 'chevronright':
                icon.innerHTML = icons.chevronRight(icosz);
                ariaLabel("Seta para a direita");
            break;
            case 'chevrondown':
                icon.innerHTML = icons.chevronDown(icosz);
                ariaLabel("Seta para a direita");
            break;
            case 'chevronleft':
                icon.innerHTML = icons.chevronLeft(icosz);
                ariaLabel("Seta para a esquerda");
            break;
            case 'clipboard':
                icon.innerHTML = icons.clipboard(icosz);
                ariaLabel("Copiar para Area de transferencia");
            break;
            case 'clipboardfill':
                icon.innerHTML = icons.clipboardfill(icosz);
                ariaLabel("Copiar para Area de transferencia");
            break;
            case 'edit':
                icon.innerHTML = icons.edit(icosz);
                ariaLabel("Editar");
            break;
            case 'download':
                icon.innerHTML = icons.download(icosz);
                ariaLabel("Baixar arquivo");
            break;
            case 'upload':
                icon.innerHTML = icons.upload(icosz);
                ariaLabel("Enviar arquivo");
            break;
            case 'email':
                icon.innerHTML = icons.email(icosz);
                ariaLabel("Envelope de e-mail");
            break;
            case 'emailAt':
                icon.innerHTML = icons.emailAt(icosz);
                ariaLabel("Envelope de e-mail");
            break;
            case 'eye':
                icon.innerHTML = icons.eye(icosz);
                ariaLabel("Visualizar");
            break;
            case 'eye-slash':
                icon.innerHTML = icons.eyeSlash(icosz);
                ariaLabel("Ocultar");
            break;
            case 'eye-lowvision':
                icon.innerHTML = icons.eyeLowVision(icosz);
                ariaLabel("Home");
            break;
            case 'film':
                icon.innerHTML = icons.film(icosz);
                ariaLabel("Envelope de e-mail");
            break;
            case 'folder':
                icon.innerHTML = icons.folder(icosz);
                ariaLabel("Pasta ou Diretório");
            break;
            case 'home':
                icon.innerHTML = icons.home(icosz);
                ariaLabel("Home");
            break;
            case 'key':
                icon.innerHTML = icons.key(icosz);
                ariaLabel("Chave");
            break;
            case 'lamp':
                icon.innerHTML = icons.lamp(icosz);
                ariaLabel("Lampada");
            break;
            case 'link':
                icon.innerHTML = icons.link(icosz);
                ariaLabel("Link");
            break;
            case 'login':
                icon.innerHTML = icons.login(icosz);
                ariaLabel("Conecte-se");
            break;
            case 'logout':
                icon.innerHTML = icons.logout(icosz);
                ariaLabel("Sair");
            break;
            case 'location':
                icon.innerHTML = icons.location(icosz);
                ariaLabel("Localizaçao");
            break;
            case 'locked':
                icon.innerHTML = icons.locked(icosz);
                ariaLabel("Cadeado trancado");
            break;
            case 'unlocked':
                icon.innerHTML = icons.unlocked(icosz);
                ariaLabel("Cadeado destrancado");
            break;
            case 'info':
                icon.innerHTML = icons.info(icosz);
                ariaLabel("Informacao");
            break;
            case 'image':
                icon.innerHTML = icons.image(icosz);
                ariaLabel("Imagem");
            break;
            case 'images':
                icon.innerHTML = icons.images(icosz);
                ariaLabel("Imagens");
            break;
            case 'music':
                icon.innerHTML = icons.music(icosz);
                ariaLabel("Audio");
            break;
            case 'newtab':
                icon.innerHTML = icons.newtab(icosz);
                ariaLabel("Abre link em nova aba");
            break;
            case 'phone':
                icon.innerHTML = icons.phone(icosz);
                ariaLabel("Telefone");
            break;
            case 'pin':
                icon.innerHTML = icons.pin(icosz);
                ariaLabel("Pino");
            break;
            case 'question':
                icon.innerHTML = icons.question(icosz);
                ariaLabel("Interrogaçao - Duvida");
            break; 
            case 'quotesubopen':
                icon.innerHTML = icons.quotesSubOpen(icosz);
                ariaLabel("Abre aspas");
            break;
            case 'quotesupclose':
                icon.innerHTML = icons.quotesSupClose(icosz);
                ariaLabel("Fecha aspas");
            break;
            case 'warningsquare':
                icon.innerHTML = icons.warningSquare(icosz);
                ariaLabel("Exclamaçao - Atençao");
            break;
            case 'warning':
                icon.innerHTML = icons.warning(icosz);
                ariaLabel("Exclamaçao - Atençao");
            break;
            case 'search':
                icon.innerHTML = icons.search(icosz);
                ariaLabel("Pesquisar");
            break;
            case 'send':
                icon.innerHTML = icons.send(icosz);
                ariaLabel("Enviar");
            break;
            case 'sendfill':
                icon.innerHTML = icons.sendfill(icosz);
                ariaLabel("Enviar");
            break;
            case 'share':
                icon.innerHTML = icons.share(icosz);
                ariaLabel("Opções de compartilhamento");
            break;
            case 'shopcart':
                icon.innerHTML = icons.shopcart(icosz);
                ariaLabel("Carrinho de compras");
            break;
            case 'sitemap':
                icon.innerHTML = icons.sitemap(icosz);
                ariaLabel("Mapa do site - Informações sobre páginas da web");
            break;
            case 'spinner':
                icon.innerHTML = icons.spinner(icosz);
                ariaLabel("Carregando");
            break;
            case 'spinner2':
                icon.innerHTML = icons.spinner2(icosz);
                ariaLabel("Carregando");
            break;
            case 'spinner3':
                icon.innerHTML = icons.spinner3(icosz);
                ariaLabel("Carregando");
            break;
            case 'spinner4':
                icon.innerHTML = icons.spinner4(icosz);
                ariaLabel("Carregando");
            break;
            case 'tags':
                icon.innerHTML = icons.tags(icosz);
                ariaLabel("Tags - Categorias");
            break;
            case 'tagsfill':
                icon.innerHTML = icons.tagsfill(icosz);
                ariaLabel("Tags - Categorias");
            break;
            case 'textarea':
                icon.innerHTML = icons.textarea(icosz);
                ariaLabel("Ãrea de texto");
            break;
            case 'time':
                icon.innerHTML = icons.time(icosz);
                ariaLabel("RelÃ³gio");
            break;
            case 'trash':
                icon.innerHTML = icons.trash(icosz);
                ariaLabel("Excluir");
            break;
            case 'user':
                icon.innerHTML = icons.user(icosz);
                ariaLabel("Pessoa - Usuario");
            break;
            case 'close':
                icon.innerHTML = icons.close(icosz);
                ariaLabel("close");
            break;
            /* brands */
            case 'behance':
                icon.innerHTML = icons.behance(icosz);
                ariaLabel("Behance");
            break;
            case 'blogger':
                icon.innerHTML = icons.blogger(icosz);
                ariaLabel("Blogger");
            break;
            case 'dropbox':
                icon.innerHTML = icons.dropbox(icosz);
                ariaLabel("Dropbox");
            break;
            case 'facebook':
                icon.innerHTML = icons.facebook(icosz);
                ariaLabel("Facebook");
            break;
            case 'git':
                icon.innerHTML = icons.git(icosz);
                ariaLabel("Git");
            break;
            case 'github':
                icon.innerHTML = icons.github(icosz);
                ariaLabel("Github");
            break;
            case 'instagram':
                icon.innerHTML = icons.instagram(icosz);
                ariaLabel("Instagram");
            break;
            case 'linkedin':
                icon.innerHTML = icons.linkedin(icosz);
                ariaLabel("Linkedin");
            break;
            case 'pinterest':
                icon.innerHTML = icons.pinterest(icosz);
                ariaLabel("Pinterest");
            break;
            case 'stackoverflow':
                icon.innerHTML = icons.stackoverflow(icosz);
                ariaLabel("Stack Overflow");
            break;
            case 'telegram':
                icon.innerHTML = icons.telegram(icosz);
                ariaLabel("Telegram");
            break;
            case 'tumblr':
                icon.innerHTML = icons.tumblr(icosz);
                ariaLabel("Tumblr");
            break;
            case 'twitter':
                icon.innerHTML = icons.twitter(icosz);
                ariaLabel("Twitter");
            break;
            case 'ubuntu':
                icon.innerHTML = icons.ubuntu(icosz);
                ariaLabel("Ubuntu");
            break;
            case 'vimeo':
                icon.innerHTML = icons.vimeo(icosz);
                ariaLabel("Vimeo");
            break;
            case 'whatsapp':
                icon.innerHTML = icons.whatsapp(icosz);
                ariaLabel("WhatsApp");
            break;
            case 'windows':
                icon.innerHTML = icons.windows(icosz);
                ariaLabel("Windows");
            break;
            case 'joomla':
                icon.innerHTML = icons.joomla(icosz);
                ariaLabel("Joomla CMS");
            break;
            case 'wordpress':
                icon.innerHTML = icons.wordpress(icosz);
                ariaLabel("WordPress CMS");
            break;
            case 'youtube':
                icon.innerHTML = icons.youtube(icosz);
                ariaLabel("YouTube");
            break;
            case 'google':
                icon.innerHTML = icons.google(icosz);
                ariaLabel("Google");
            break;
            case 'chrome':
                icon.innerHTML = icons.chrome(icosz);
                ariaLabel("Navegador Chrome");
            break;
            case 'edge':
                icon.innerHTML = icons.edge(icosz);
                ariaLabel("Navegador Edge");
            break;
            case 'iexplorer':
                icon.innerHTML = icons.iExplorer(icosz);
                ariaLabel("Navegador Internet Explorer");
            break;
            case 'firefox':
                icon.innerHTML = icons.firefox(icosz);
                ariaLabel("Navegador Mozilla Firefox");
            break;
            case 'opera':
                icon.innerHTML = icons.opera(icosz);
                ariaLabel("Navegador Opera");
            break;
            case 'safari':
                icon.innerHTML = icons.safari(icosz);
                ariaLabel("Navegador Safari");
            break;
        }

        var span = document.createElement("span");
        span.classList.add("screen_reader");
        span.innerText = ariaLabel(icon.getAttribute("aria-label"));
        icon.append(span);

        if(icon.hasAttribute("top")) {
            icon.style.top = icon.getAttribute("top")+"px";
            if(!window.getComputedStyle(icon).position) {
                icon.style.position = "relative";
            }
        }

        function ariaLabel(label) {
            return icon.hasAttribute("aria-label") ? icon.getAttribute("aria-label") : icon.setAttribute("aria-label", label);
        }

    });
});
