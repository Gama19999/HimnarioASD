// NOMBRES DE LOS HIMNOS
let names = new Map([
	['001','Cantad alegres al Señor'],
	['002','Da gloria al Señor'],
	['003','Unidos en espiritu'],
	['004','Alabanzas sin cesar'],
	['005','A ti glorioso Dios'],
	['006','Hosanna'],
	['007','Oh Dios mi soberano Rey'],
	['008','Suenen dulces himnos'],
	['009','Alabemos al Señor'],
	['010','Alaba al Dios de Abraham'],
	['011','Alma bendice al Señor'],
	['012','Todos juntos reunidos'],
	['013','Al Dios invisible'],
	['014','Engrandecido sea Dios'],
	['015','Loamoste oh Dios'],
	['016','A nuestro Padre Dios'],
	['017','Oh Padre eterno Dios'],
	['018','Load al Padre'],
	['019','Padre nuestro'],
	['020','A Dios el Padre celestial'],
	['021','Gloria sea al Padre'],
	['022','Jehova esta en su santo templo'],
	['023','Silencio Silencio'],
	['024','Imploramos tu presencia'],
	['025','Siento la presencia del Señor'],
	['026','Aqui reunidos'],
	['027','Oh Pastor divino escucha'],
	['028','Tu pueblo jubiloso'],
	['029','Del culto el tiempo llega'],
	['030','Abre mis ojos'],
	['031','Oh Señor al orar'],
	['032','Nos reunimos en tu santuario'],
	['033','Tu presencia Padre amante invocamos'],
	['034','En momentos asi'],
	['035','Oye oh Señor'],
	['036','Oh Dios que oyes cada oracion'],
	['037','Dios os guarde'],
	['038','Que Dios te guarde'],
	['039','Despide hoy tu grey'],
	['040','Shalom'],
	['041','Gracia amor y comunion'],
	['042','Queda Señor'],
	['043','Agua de vida'],
	['044','Despidenos con tu bendicion'],
	['045','Despues Señor'],
	['046','Hoy amanece'],
	['047','Por la manana'],
	['048','Oh Dios si he ofendido un corazon'],
	['049','Cristo ya la noche cierra'],
	['050','Baja el sol'],
	['051','Nuestro sol se pone ya'],
	['052','Señor Jesus el dia ya se fue'],
	['053','Oh amor de Dios'],
	['054','Tan bueno es Dios'],
	['055','Grande Señor es tu misericordia'],
	['056','De tal manera amo'],
	['057','Mi Dios me ama'],
	['058','Grande es el amor divino'],
	['059','Mirad que amor'],
	['060','Santo Santo Santo Tu gloria llena'],
	['061','Santo Santo Santo Dios Omnipotente'],
	['062','Santo Santo Santo santo es el Señor'],
	['063','Al Rey adorad'],
	['064','Yo canto el poder de Dios'],
	['065','El mundo es de mi Dios'],
	['066','Sabes cuantos'],
	['067','Señor yo te conozco'],
	['068','Todo lo que ha creado Dios'],
	['069','Señor mi Dios'],
	['070','Nuestro Dios reina'],
	['071','Cada cosa hermosa'],
	['072','Fue un milagro'],
	['073','La creacion'],
	['074','Himno al Creador'],
	['075','Grande es Jehova'],
	['076','Eterno Dios mi Creador'],
	['077','Sea exaltado'],
	['078','Al mundo paz'],
	['079','Se oye un canto en alta esfera'],
	['080','Venid pastorcillos'],
	['081','Noche de paz'],
	['082','Ya repican las campanas'],
	['083','La primera Navidad'],
	['084','Ve dilo en las montanas'],
	['085','Alla en el pesebre'],
	['086','A medianoche en Belen'],
	['087','Venid fieles todos'],
	['088','Oh aldehuela de Belen'],
	['089','Cristianos alegraos hoy'],
	['090','Somos del oriente'],
	['091','Que niño es este'],
	['092','Angeles cantando estan'],
	['093','Hubo Uno que quiso'],
	['094','Sangro mi soberano Dios'],
	['095','Un dia'],
	['096','Al contemplar la excelsa cruz'],
	['097','En el monte Calvario'],
	['098','Rostro divino'],
	['099','Jamas podra alguien separarnos'],
	['100','Dulces momentos'],
	['101','Cabeza sacrosanta'],
	['102','Cordero de Dios'],
	['103','Jesus resucitado'],
	['104','La tumba le encerro'],
	['105','Cristo ha resucitado'],
	['106','Tuya es la gloria'],
	['107','Canto el gran amor'],
	['108','Amigo fiel es Cristo'],
	['109','Un buen amigo tengo yo'],
	['110','Cristo es el mejor amigo'],
	['111','Como Jesus no hay otro amigo'],
	['112','Ningun otro me amo cual Cristo'],
	['113','Amor que no me dejaras'],
	['114','Dime la antigua historia'],
	['115','Oh cuan grande amor'],
	['116','Cristo esta a mi lado'],
	['117','No se por que'],
	['118','Cuando estes cansado y abatido'],
	['119','De su trono mi Jesus'],
	['120','Cuanto me alegra'],
	['121','Es Jesucristo la vida la luz'],
	['122','Divino pastor'],
	['123','Cuanto nos ama Jesus'],
	['124','Ama el Pastor sus ovejas'],
	['125','Infinito amor de Cristo'],
	['126','Abrigadas y salvas en el redil'],
	['127','Cristo nombre dulce'],
	['128','Tu nombre es dulce buen Jesus'],
	['129','Cual Jesus no hay otro nombre'],
	['130','Cristo Cristo Cristo'],
	['131','Bendito es el nombre de Jesus'],
	['132','Dulce hermoso nombre es Jesus'],
	['133','Venid con canticos venid'],
	['134','Cual mirra fragante'],
	['135','Cristo nombre sublime'],
	['136','Oh cuanto amo a Cristo'],
	['137','De Jesus el nombre invoca'],
	['138','De mi amante Salvador'],
	['139','La tierna voz del Salvador'],
	['140','Te quiero te quiero'],
	['141','Alabadle'],
	['142','Venid cantad de gozo en plenitud'],
	['143','Digno eres tu'],
	['144','Mi Salvador'],
	['145','Con acentos de alegria'],
	['146','Ni en la tierra'],
	['147','A Dios sea gloria'],
	['148','Solo Cristo'],
	['149','Junto a la cruz do Jesus murio'],
	['150','A Cristo doy mi canto'],
	['151','Por eso lo amo'],
	['152','A ti Jesus'],
	['153','Ved a Cristo'],
	['154','Dad gloria al Cordero Rey'],
	['155','En Sion Jesus hoy reina'],
	['156','A Cristo coronad'],
	['157','Majestad'],
	['158','Amanece ya la manana de oro'],
	['159','Yo espero la manana'],
	['160','Viene otra vez nuestro Salvador'],
	['161','Oh cuan gratas las nuevas'],
	['162','En presencia estar de Cristo'],
	['163','Cristo viene esto es cierto'],
	['164','Jesus pronto volvera'],
	['165','Vendra el Señor'],
	['166','Siervos de Dios la trompeta tocad'],
	['167','Quien en deslumbrante gloria'],
	['168','El Rey que viene'],
	['169','Cuando suene la trompeta'],
	['170','La segunda venida de Cristo'],
	['171','Has oido el mensaje'],
	['172','Promesa dulce'],
	['173','Sera al albor'],
	['174','Mira los hitos'],
	['175','Ved a Cristo que se acerca'],
	['176','Tu veras al Rey viniendo'],
	['177','Los tres mensajes angelicos'],
	['178','Contemple la gloria'],
	['179','Cristo viene Aquel dia se acerca'],
	['180','Si lo veremos'],
	['181','Una esperanza'],
	['182','Veremos a Cristo'],
	['183','No me olvide de ti'],
	['184','Nunca te rindas'],
	['185','Al cielo voy'],
	['186','Hace años escuche'],
	['187','Aunque anochezca'],
	['188','Gran alegria'],
	['189','Cristo muy pronto vendra'],
	['190','Santo Espiritu de Cristo'],
	['191','La nueva proclamad'],
	['192','Llena mi ser'],
	['193','Dios nos ha dado promesa'],
	['194','Vive en mi'],
	['195','Abre mis ojos a la luz'],
	['196','Santo Espiritu de Dios'],
	['197','Dulce Espiritu'],
	['198','Desciende Espiritu de amor'],
	['199','Movidos por tu Espiritu'],
	['200','Bautizanos hoy'],
	['201','Cancion del Espiritu'],
	['202','Danos el fuego'],
	['203','Santo Espiritu llena mi vida'],
	['204','Oh cantadmelas otra vez'],
	['205','Dadme la Biblia'],
	['206','Padre tu Palabra es mi delicia'],
	['207','Dios nos habla'],
	['208','Santa Biblia'],
	['209','La Biblia nos habla de Cristo'],
	['210','Huye cual ave'],
	['211','Fija tus ojos en Cristo'],
	['212','A tu puerta Cristo esta'],
	['213','Tierno y amante Jesus nos invita'],
	['214','Mientras Jesus te llama'],
	['215','Con voz benigna te llama Jesus'],
	['216','Dios al prodigo llama'],
	['217','Bienvenida da Jesus'],
	['218','A Jesucristo ven sin tardar'],
	['219','Tan triste y tan lejos de Dios'],
	['220','Alla la puerta abierta esta'],
	['221','Puertas abiertas encontraran'],
	['222','Del trono celestial'],
	['223','Oi la voz del Salvador'],
	['224','Oi la voz del buen Jesus'],
	['225','Un hombre llegose de noche a Jesus'],
	['226','Buscad primero'],
	['227','Preste oidos el humano'],
	['228','Me buscareis y me hallareis'],
	['229','Has pensado lo que puede costar'],
	['230','Abre tu corazon'],
	['231','Todo en el altar'],
	['232','Entregate en oracion'],
	['233','Ven a la Fuente de vida'],
	['234','Temes que en la lucha'],
	['235','La razon de vivir'],
	['236','A Jesus entrega todo'],
	['237','Jesus hoy espera entrar en tu ser'],
	['238','Yo escucho buen Jesus'],
	['239','De Dios vagaba lejos yo'],
	['240','Te ruego oh Dios'],
	['241','Perdon te ruego mi Señor y Dios'],
	['242','Una es Señor mi peticion'],
	['243','Entrego todo a Cristo'],
	['244','Padre Dios'],
	['245','Cumplase oh Cristo tu voluntad'],
	['246','Te quiero mi Señor'],
	['247','Yo te seguire'],
	['248','Que mi vida entera este'],
	['249','Tal como soy'],
	['250','Padre a tus pies me postro'],
	['251','No yo sino el'],
	['252','Dejo el mundo'],
	['253','Tuyo soy Jesus'],
	['254','Anhelo ser limpio'],
	['255','Oh Cristo te adoro'],
	['256','Jesus yo he prometido'],
	['257','Oh ven te invito Cristo'],
	['258','Tu dejaste tu trono'],
	['259','Mi espiritu alma y cuerpo'],
	['260','Junto a la cruz de Cristo'],
	['261','Salvador a ti me rindo'],
	['262','Los tesoros del mundo'],
	['263','Entra en este corazon'],
	['264','Un dia mas por Cristo'],
	['265','La senda ancha dejare'],
	['266','Vivo por Cristo'],
	['267','A la cruz de Cristo voy'],
	['268','Puedo oir tu voz llamando'],
	['269','Prefiero a mi Cristo'],
	['270','Meditar en Jesus'],
	['271','Hoy me llama el mundo en vano'],
	['272','De esclavitud'],
	['273','Tu vida oh Salvador'],
	['274','Que te dare Maestro'],
	['275','Humilde oracion'],
	['276','Con nuestras mentes'],
	['277','Amarte mas'],
	['278','Puede el mundo ver a Jesus en mi'],
	['279','Transformame a tu imagen'],
	['280','Ser semejante a Jesus'],
	['281','He decidido seguir a Cristo'],
	['282','Brilla Jesus'],
	['283','Ven Señor Jesus'],
	['284','Me dice el Salvador'],
	['285','Confio en Jesucristo'],
	['286','Hay una fuente sin igual'],
	['287','Rey de mi vida'],
	['288','Al contemplarte mi Salvador'],
	['289','Que me puede dar perdon'],
	['290','Fuente de la vida eterna'],
	['291','Perdido fui a mi Jesus'],
	['292','Por fe en Cristo el Redentor'],
	['293','Quieres ser salvo de toda maldad'],
	['294','En Jesus por fe confio'],
	['295','Las manos Padre'],
	['296','Comprado con sangre por Cristo'],
	['297','Salvado con sangre por Cristo'],
	['298','Al Calvario solo Jesus ascendio'],
	['299','Hay vida en mirar'],
	['300','Lejos de mi Padre Dios'],
	['301','Cristo es mi amante Salvador'],
	['302','Grato es contar la historia'],
	['303','Sublime gracia'],
	['304','Mi Redentor el Rey de gloria'],
	['305','Maravillosa su gracia es'],
	['306','Llego Jesus'],
	['307','Roca de la eternidad'],
	['308','Dios descendio'],
	['309','La voz de Jesus'],
	['310','Cristo centro de mi vida'],
	['311','Cuando junte Jesus las naciones'],
	['312','Dia grande viene'],
	['313','La hora del Juicio'],
	['314','Cristo Rey Omnipotente'],
	['315','El Juicio empezo'],
	['316','Hay un mundo feliz mas alla'],
	['317','En el hogar do nunca habra'],
	['318','En la mansion de mi Señor'],
	['319','Cuando mi lucha termine al final'],
	['320','Jamas se dice adios alla'],
	['321','Alla sobre montes'],
	['322','Busquemos la patria'],
	['323','He de conocerle entonces'],
	['324','Pronto yo vere a Jesus'],
	['325','No puede el mundo ser mi hogar'],
	['326','Un dia yo he de faltar'],
	['327','Jerusalen mi amado hogar'],
	['328','Nos veremos junto al rio'],
	['329','En la celica morada'],
	['330','Hay un feliz Eden'],
	['331','La manana gloriosa'],
	['332','En la tierra adonde ire'],
	['333','Aunque en esta vida'],
	['334','Cuanto anhelo llegar'],
	['335','Mi hogar celestial'],
	['336','Del bello pais he leido'],
	['337','Nunca mas adios'],
	['338','Las riberas de dicha inmortal'],
	['339','A veces oigo un himno'],
	['340','Oh que musica divina'],
	['341','Mas cerca del hogar'],
	['342','Despues del rio'],
	['343','Quiero llegar a ser parte del cielo'],
	['344','Entonad un himno'],
	['345','Canta y tus penas se iran'],
	['346','Feliz el dia'],
	['347','Con gozo canto al Señor'],
	['348','Dicha grande'],
	['349','Gran gozo hay en mi alma hoy'],
	['350','Andando en la luz de Dios'],
	['351','Yo tengo gozo'],
	['352','Gozaos Cristo es Rey'],
	['353','Suenan melodias en mi ser'],
	['354','Voy caminando'],
	['355','Yo voy feliz'],
	['356','Gozo es conocer a Cristo'],
	['357','Jesus tu eres mi alegria'],
	['358','En el seno de mi alma'],
	['359','Regocijaos siempre'],
	['360','En Jesucristo martir de paz'],
	['361','Percibe mi alma un son'],
	['362','Con sin igual amor'],
	['363','Hay un canto nuevo en mi ser'],
	['364','Jesus da paz'],
	['365','Elevemos al Señor'],
	['366','En Cristo hallo amigo'],
	['367','Gracias Dios'],
	['368','Padre amado'],
	['369','Gratitud y alabanza'],
	['370','Por la excelsa majestad'],
	['371','Jesus te ama'],
	['372','Como agradecer'],
	['373','Mi Redentor es Cristo'],
	['374','Dulce comunion'],
	['375','Sed puros y santos'],
	['376','Dulce oracion'],
	['377','A los pies de Jesucristo'],
	['378','Oh que amigo nos es Cristo'],
	['379','Habla Señor a mi alma'],
	['380','Ando con Cristo'],
	['381','De manana veo su faz'],
	['382','A solas al huerto yo voy'],
	['383','Habla a tu Dios de manana'],
	['384','El jardin de oracion'],
	['385','Hablando con Jesus'],
	['386','Hay un lugar de paz'],
	['387','Aparte del mundo'],
	['388','Debo decir a Cristo'],
	['389','Conversar con Jesucristo'],
	['390','Soy yo Señor'],
	['391','Le importara a Jesus'],
	['392','Hay quien vela mis pisadas'],
	['393','Mi fe contempla a ti'],
	['394','Cuan firme cimiento'],
	['395','Oh cuan dulce es fiar en Cristo'],
	['396','Oh que Salvador'],
	['397','Oh buen Señor velada esta'],
	['398','Cuando sopla airada la tempestad'],
	['399','En estos tiempos'],
	['400','Castillo fuerte es nuestro Dios'],
	['401','Eterna Roca es mi Jesus'],
	['402','Oh salvo en la Roca'],
	['403','Cuando en la lucha'],
	['404','A cualquiera parte'],
	['405','Se quien es Jesus'],
	['406','Jesus es mi luz'],
	['407','Muy cerca de mi Redentor'],
	['408','Cristo me ayuda por el a vivir'],
	['409','Si mi debil fe flaqueare'],
	['410','Cuando te quiero'],
	['411','Bajo sus alas'],
	['412','Todas las promesas'],
	['413','Si la carga es pesada'],
	['414','Oh buen Maestro despierta'],
	['415','Salvo en los tiernos brazos'],
	['416','Oh tenga yo la ardiente fe'],
	['417','Dame la fe de mi Jesus'],
	['418','Padre yo vengo a ti'],
	['419','Por la justicia de Jesus'],
	['420','Nunca desmayes'],
	['421','Cariñoso Salvador'],
	['422','Nada puede ya faltarme'],
	['423','Pertenezco a mi Rey'],
	['424','Como podre estar triste'],
	['425','Dia en dia'],
	['426','Tengo paz'],
	['427','Lleva todo tu pesar a Cristo'],
	['428','Su oveja soy'],
	['429','El puede'],
	['430','Solo no estoy'],
	['431','A el mis problemas le doy'],
	['432','Como el ciervo'],
	['433','Conmigo marcha un angel'],
	['434','Jesus es mi vida'],
	['435','Dios sabe Dios oye Dios ve'],
	['436','El vive hoy'],
	['437','Tu presencia Padre amado da consuelo'],
	['438','Mira hacia Dios'],
	['439','Oh quien pudiera andar con Dios'],
	['440','Quiero Jesus contigo andar'],
	['441','Jesus te necesito'],
	['442','Oh Maestro y Salvador'],
	['443','Hay un lugar do quiero estar cerca de ti'],
	['444','No me pases'],
	['445','Mas de Jesus'],
	['446','Mas cerca oh Dios de ti'],
	['447','Mas santidad dame'],
	['448','Salvador mi bien eterno'],
	['449','Cristo mi piloto se'],
	['450','Oh Jesus Pastor divino'],
	['451','Cerca mas cerca'],
	['452','Contigo quiero andar'],
	['453','Como ser cual Cristo'],
	['454','Yo quisiera andar con Cristo'],
	['455','Mi mano ten'],
	['456','Como la mujer de junto al pozo'],
	['457','More en mi la belleza del Salvador'],
	['458','Orad por mi'],
	['459','Hablame mas de Cristo'],
	['460','Quiero estar cerca de Cristo'],
	['461','A tu lado anhelo estar'],
	['462','Dame a Cristo'],
	['463','Mi oracion'],
	['464','Ven inspiranos'],
	['465','Ven junto a mi'],
	['466','Guiame oh Salvador'],
	['467','Siempre el Salvador conmigo'],
	['468','Paso a paso Dios me guia'],
	['469','Jesus me guia'],
	['470','Guiame Dios'],
	['471','Conduceme Maestro'],
	['472','Jesus mi guia es'],
	['473','Hablame y hablare'],
	['474','Que me importan'],
	['475','El camino es escabroso'],
	['476','Muy lejos el hogar esta'],
	['477','Los que aman al Señor'],
	['478','Se fiel siempre hermano'],
	['479','De la mano Señor'],
	['480','Digno eres oh Señor'],
	['481','Voy al cielo'],
	['482','Quiero cantar'],
	['483','Cuando al cielo lleguemos'],
	['484','Busca al Señor'],
	['485','Unidos en verdad'],
	['486','En los pasos de Jesus'],
	['487','Cristo eres justo Rey'],
	['488','Al andar con Jesus'],
	['489','Solo anhelo Cristo amado'],
	['490','Mejor que los sacrificios'],
	['491','Levantate cristiano'],
	['492','Trabajad Trabajad'],
	['493','Hoy quiero trabajar contigo'],
	['494','Cerca un alma agobiada esta'],
	['495','Mi deber'],
	['496','Sus manos somos'],
	['497','Manos'],
	['498','Puedes demostrar con tus manos'],
	['499','Jesus anduvo por aqui'],
	['500','Hazme tu siervo'],
	['501','Mi vida al servicio de Dios'],
	['502','Brilla en el sitio donde estes'],
	['503','Oh Dios que deseas la vida'],
	['504','Señor de todos'],
	['505','Hijo del reino'],
	['506','De pie de pie cristianos'],
	['507','Tentado no cedas'],
	['508','Contendamos siempre por nuestra fe'],
	['509','Firmes Fuertes'],
	['510','Quien esta por Cristo'],
	['511','Marchare en la divina luz'],
	['512','Nunca esteis desanimados'],
	['513','Honra al hombre de valor'],
	['514','Despertad despertad oh cristianos'],
	['515','Despliegue el cristiano su santa bandera'],
	['516','Firmes y adelante'],
	['517','De pie oh grey de Dios'],
	['518','Jesus esta buscando voluntarios hoy'],
	['519','Despierta hermano sin demorar'],
	['520','Adelante manda el Señor'],
	['521','Al Cristo ved'],
	['522','Suenen las palabras'],
	['523','Los sabios dan su ciencia'],
	['524','Traian en silencio presentes al Señor'],
	['525','Con gratitud llegamos'],
	['526','Oh mi patria te prometo hoy'],
	['527','Señor Jehova omnipotente Dios'],
	['528','Por montanas muy cansado'],
	['529','Iglesia de Cristo'],
	['530','Somos un pequeno pueblo muy feliz'],
	['531','La familia de Dios'],
	['532','Sagrado es el amor'],
	['533','Cuan bueno y agradable'],
	['534','En tu nombre comenzamos'],
	['535','Las faenas terminadas'],
	['536','En sombras de la tarde'],
	['537','Sabado santo'],
	['538','Hoy es dia de reposo'],
	['539','Oh dia delicioso'],
	['540','Ya asoma el sol brillante'],
	['541','Señor reposamos'],
	['542','Amo tu sabado'],
	['543','No te olvides nunca del dia del Señor'],
	['544','Hoy el sabado glorioso'],
	['545','Santo dia'],
	['546','Santo sabado bendito'],
	['547','Sabado es'],
	['548','Mi corazon se llena de alegria'],
	['549','Ya el fin se acerca'],
	['550','Dia santo del Señor'],
	['551','Embajador soy de mi Rey'],
	['552','Oh cuanto necesita'],
	['553','Os pusisteis a arar'],
	['554','Con Cristo avanza hoy'],
	['555','Hoy gozoso medito'],
	['556','Yo quiero siempre brillar'],
	['557','Que estas haciendo por Cristo'],
	['558','Ama a tus projimos'],
	['559','No te de temor'],
	['560','Cristo esta buscando obreros'],
	['561','Oigo del Señor la voz llamando'],
	['562','Esparcid la luz de Cristo'],
	['563','Escuchad Jesus nos dice'],
	['564','Pronto la noche viene'],
	['565','Ve ve oh Sion'],
	['566','Centinelas del Maestro'],
	['567','Si en valles de peligros'],
	['568','Hay lugar en la amplia vina'],
	['569','Id y predicad el evangelio'],
	['570','Voluntario del Señor'],
	['571','La historia de Cristo contemos'],
	['572','Pescadores de hombres'],
	['573','Te envio a ti'],
	['574','Testimonio'],
	['575','Tocad trompeta ya'],
	['576','Proclamo hoy que soy cristiano'],
	['577','Yo quiero trabajar'],
	['578','El pueblo que conoce a su Dios'],
	['579','La fuente veo'],
	['580','Las aguas del bautismo'],
	['581','El pan de vida soy'],
	['582','Hoy venimos cual hermanos'],
	['583','La Cena de la Comunion'],
	['584','Amemonos hermanos'],
	['585','De rodillas partimos hoy el pan'],
	['586','En memoria de mi'],
	['587','Te dedicamos oh Señor'],
	['588','Ven alma que lloras'],
	['589','Perfecto amor'],
	['590','Guia a ti Señor'],
	['591','Todo es bello en el hogar'],
	['592','Si Dios esta feliz hogar'],
	['593','Hogar de mis recuerdos'],
	['594','Señor gracias por mi hogar'],
	['595','Feliz hogar'],
	['596','Edificamos familias'],
	['597','Oracion por un niño'],
	['598','Cristo yo te seguire'],
	['599','En este bello dia'],
	['600','Cuando venga Jesucristo'],
	['601','Cuando leo en la Biblia'],
	['602','Es el amor divino'],
	['603','Yo temprano busco a Cristo'],
	['604','Bellas las manitas son'],
	['605','Jesus tiene tiempo'],
	['606','Llama Jesus el Buen Pastor'],
	['607','Nitido rayo por Cristo'],
	['608','Corazones siempre alegres'],
	['609','Oh jovenes venid'],
	['610','Escuchamos tu llamada'],
	['611','Oh juventud del Rey'],
	['612','Jesus te necesita hoy'],
	['613','Hoy nos toca trabajar'],
	['614','Amenes']
]);


// EVENT HANDLERS
$(document).ready(() => {
	$("#tf-search-num").on('input', () => {
		$("#tf-search").removeAttr("data-num");
		let n = $("#tf-search-num").val();

		if (n.length != 0) {
			search_num(n);
		} else {
			$("#options").empty();
			$("#options").css("padding","0");
		}
	});

	$("#tf-search").on('input', () => {
		$("#tf-search").removeAttr("data-num");
		$("#tf-search-num").val("");
		let s = $("#tf-search").val().toUpperCase();

		if (s.length != 0) {
			search_txt(s);
		} else {
			$("#options").empty();
			$("#options").css("padding","0");
		}
	});

	$("#logo-btn").on('click', () => {
		$("#search").css("display","flex");
		$("#app").css("display","none");
		$("#index").css("display","none");
		clear_fields();
		start_on_play();
	});

	$("#indice").on('click', () => {
		$("#index").css("display","grid");
		$("#search").css("display","none");
		$("#app").css("display","none");
		$("#mp3").attr("src","");
	});

	$("#salir").on('click', () => {
		window.api.close();
	});

	$(window).on('keyup', (ev) => {
		console.log(ev.code);
		if (ev.code == "KeyC") $("#cantado").trigger("click");
		else if (ev.code == "KeyL") $("#letra").trigger("click");
		else if (ev.code == "KeyM") $("#musica").trigger("click");
	});

	$("#play").on('click', () => {
		let btn_val = $("#s-form .pressed-button").val();
		let num = $("#tf-search").attr("data-num");
		
		if (btn_val == "") return;

		let music = `./musica/${btn_val[0]}/${num} - ${names.get(num)}.mp3`;

		if (btn_val == "Letra") {
			$("#mp3").attr("src","");
		} else {
			$("#mp3").attr("src",music);
			$("#mp3").get(0).play();
		}

		if (num) {
			$("#search").css("display","none");

			$("#foot").css("display","none");
			$("#menu").css("display","none");
			$("#app").css({
				"display":"grid",
				"background":`url('./letra/${num} - ${names.get(num)}/01.jpg') 50% no-repeat`,
				"background-size":"auto 100%"
			});

			
			$("#app").attr("data-ruta",`./letra/${num} - ${names.get(num)}/`);
			$("#app").attr("data-img","1");
		}
	});
});


// BACKEND FUNCTIONS
function search_txt(text) {
	let possibles = new Map();

	for (let [k,v] of names) {
		if (v.toUpperCase().includes(text)) {
			possibles.set(k,v);
		}
	}

	let options = $("#options");
	if (possibles.size == 0) {
		options.empty();
		options.css("padding","0");
		return;
	}

	options.empty();
	options.css("padding","0.5rem 1rem");
	for (let [k,v] of possibles) {
		let div = $("<div class='cursor' onclick='autocomplete(this)' tabindex='0'></div>");
		div.text(`${k} - ${v}`);
		div.attr("data-num",k);

		div.on('keyup', (ev) => {
			if (ev.code == "Enter") $($(ev.target).get(0)).trigger('click');
		});

		options.append(div);
	}
}

function search_num(n) {
	let num = n;
	let possibles = new Map();
	
	if (num.length == 1) num = `00${n}`;
	if (num.length == 2) num = `0${n}`;

	for (let [k,v] of names) {
		if (k.includes(num)) {
			possibles.set(k,v);
		}
	}

	let options = $("#options");
	if (possibles.size == 0) {
		options.empty();
		options.css("padding","0");
		return;
	}

	options.empty();
	options.css("padding","0.5rem 1rem");
	for (let [k,v] of possibles) {
		let div = $("<div class='cursor' onclick='autocomplete(this)' tabindex='0'></div>");
		div.text(`${k} - ${v}`);
		div.attr("data-num",k);

		div.on('keyup', (ev) => {
			if (ev.code == "Enter") $($(ev.target).get(0)).trigger('click');
		});

		options.append(div);
	}
}

function autocomplete(elem) {
	let num = $(elem).attr("data-num");
	$("#tf-search").val(names.get(num));
	$("#tf-search").attr("data-num",num);
	$("#tf-search-num").val(num);
	$("#options").empty();
	$("#options").css("padding","0");
	document.getElementById("play").focus();
}

function pressed(elem) {
	$("#s-form .pressed-button").removeClass("pressed-button");
	$(elem).addClass("pressed-button");
}

function clear_fields() {
	$("#tf-search").removeAttr("data-num");
	$("#tf-search").val("");
	$("#tf-search-num").val("");
	$("#options").empty();
	$("#options").css("padding","0");
	$("#foot").css("display","flex");
	$("#menu").css("display","flex");
	document.getElementById('tf-search-num').focus();
	$("#indx-cont").removeClass("blank-back");
	$("#indx-cont").empty();
}

function start_on_play() {
	$("#app").removeAttr("data-ruta");
	$("#app").css("background","");
	$("#s-form .pressed-button").removeClass("pressed-button");
	$("#btn-play-pause").attr("data-state","play");
	$("#btn-play-pause img").attr("src","./images/controls/pause.png");
	$("#mp3").animate({volume: 0}, 1000, () => {
		$("#mp3").attr("src","");
		$("#mp3").prop("volume", 1);
	});
}