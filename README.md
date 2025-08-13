
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Politique de confidentialité – AutoChatflow</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Politique de confidentialité pour les automatisations WhatsApp + n8n d’AutoChatflow.">
  <link rel="canonical" href="https://autochatflow.dpdns.org/privacy-policy.html">
  <meta property="og:title" content="Politique de confidentialité – AutoChatflow">
  <meta property="og:description" content="Traitement des données WhatsApp + n8n, sécurité, bases légales RGPD, droits.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://autochatflow.dpdns.org/privacy-policy.html">
  <meta property="og:image" content="https://autochatflow.dpdns.org/assets/img/og-image.png">
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header>
  <div class="wrap">
    <h1>Politique de confidentialité</h1>
    <p class="muted">Comment AutoChatflow traite vos données.</p>
    <nav class="nav">
      <a href="/" class="btn">Accueil</a>
      <div class="lang">
        <a class="btn" href="?lang=fr" id="btn-fr" aria-pressed="true">FR</a>
        <a class="btn" href="?lang=en" id="btn-en" aria-pressed="false">EN</a>
      </div>
    </nav>
  </div>
</header>

<main class="wrap">
  <section id="fr" class="card">
    <p><strong>Responsable</strong> : AutoChatflow (Mulhouse, France). Contact : <a href="mailto:contact@autochatflow.dpdns.org">contact@autochatflow.dpdns.org</a></p>
    <h2>Données traitées</h2>
    <p>Numéro WhatsApp, contenus nécessaires aux échanges, métadonnées, logs techniques (webhooks n8n), identifiants techniques (IP, user-agent).</p>
    <h2>Finalités</h2>
    <p>Support client, notifications transactionnelles (commandes, RDV), automatisations sur mesure, communications marketing <em>opt-in</em> uniquement.</p>
    <h2>Bases légales</h2>
    <p>Exécution du contrat, consentement (opt-in WhatsApp), intérêt légitime (qualité de service et sécurité).</p>
    <h2>Destinataires & sous-traitants</h2>
    <p>Meta/WhatsApp, hébergeur, prestataires techniques (dont n8n). Accès limité au nécessaire.</p>
    <h2>Transferts hors UE</h2>
    <p>Encadrés (Clauses Contractuelles Types de Meta le cas échéant).</p>
    <h2>Durées</h2>
    <p>Logs techniques : 90 jours. Données clients : jusqu’à 24 mois après dernière interaction puis suppression/anonymisation.</p>
    <h2>Sécurité</h2>
    <p>Chiffrement en transit, contrôles d’accès, limitation des logs, durcissement Docker/n8n.</p>
    <h2>Droits</h2>
    <p>Accès, rectification, effacement, opposition, limitation, portabilité via <a href="mailto:contact@autochatflow.dpdns.org">contact@autochatflow.dpdns.org</a>. Réclamation : CNIL.</p>
    <p class="muted">Dernière mise à jour : 12/08/2025</p>
  </section>

  <section id="en" class="card" hidden>
    <p><strong>Controller</strong>: AutoChatflow (Mulhouse, France). Contact: <a href="mailto:contact@autochatflow.dpdns.org">contact@autochatflow.dpdns.org</a></p>
    <h2>Data processed</h2>
    <p>WhatsApp number, message content as needed, metadata, webhook logs (n8n), technical IDs (IP, user-agent).</p>
    <h2>Purposes</h2>
    <p>Customer support, transactional notifications, tailored automations, marketing communication with prior opt-in.</p>
    <h2>Legal bases</h2>
    <p>Contract performance, consent (WhatsApp opt-in), legitimate interest (service quality & security).</p>
    <h2>Recipients</h2>
    <p>Meta/WhatsApp, hosting provider, technical processors (incl. n8n). Access limited to necessity.</p>
    <h2>International transfers</h2>
    <p>Safeguarded by SCCs where applicable.</p>
    <h2>Retention</h2>
    <p>Technical logs: 90 days. Customer data: up to 24 months after last interaction, then erasure/anonymization.</p>
    <h2>Security</h2>
    <p>In-transit encryption, access controls, log minimization, hardened Docker/n8n setup.</p>
    <h2>Data subject rights</h2>
    <p>Access, rectification, erasure, objection, restriction, portability via <a href="mailto:contact@autochatflow.dpdns.org">contact@autochatflow.dpdns.org</a>. Complaints: local DPA.</p>
    <p class="muted">Last update: 2025-08-12</p>
  </section>
</main>

<footer>
  <div class="wrap">
    <a href="/">Accueil</a> · <a href="/terms.html">Conditions</a> · <a href="/legal.html">Mentions légales</a>
  </div>
</footer>

<script>
(function(){
  const qs=new URLSearchParams(location.search);
  const lang=qs.get('lang')|| (navigator.language||'fr').slice(0,2);
  const fr=document.getElementById('fr'), en=document.getElementById('en');
  const btnFr=document.getElementById('btn-fr'), btnEn=document.getElementById('btn-en');
  const isFR=(lang==='en')?false:true;
  fr.hidden=!isFR; en.hidden=isFR;
  btnFr.setAttribute('aria-pressed', isFR?'true':'false');
  btnEn.setAttribute('aria-pressed', isFR?'false':'true');
})();
</script>
</body>
</html>
