/**
 * Internationalization (i18n) Module
 * Provides multi-language support for the ChatGPT Extractor
 */

const i18n = (function() {
  'use strict';

  const translations = {
    en: {
      title: 'ChatGPT Export Extractor',
      subtitle: 'Extract and analyze your ChatGPT conversation exports',
      description: 'Upload your ChatGPT export file (conversations.json) to parse, view, and export your conversation data in various formats.',
      backLink: '← Back to Nebula Ultimate',
      howToExport: '📥 How to Export Your ChatGPT Conversations',
      exportInstructions: [
        'Go to <strong>ChatGPT</strong> (chat.openai.com)',
        'Click on your <strong>profile icon</strong> in the bottom left corner',
        'Select <strong>"Settings"</strong> from the menu',
        'Go to <strong>"Data controls"</strong> → <strong>"Export data"</strong>',
        'Click <strong>"Export"</strong> and wait for the email with your download link',
        'Download the ZIP file, extract it, and find <strong>conversations.json</strong>',
        'Upload the conversations.json file below!'
      ],
      uploadTitle: 'Upload ChatGPT Export',
      chooseFile: 'Choose File',
      tryDemo: 'Try Demo Data',
      noFileSelected: 'No file selected',
      exportStatsTitle: 'Export Statistics',
      totalConversations: 'Total Conversations',
      totalMessages: 'Total Messages',
      userMessages: 'User Messages',
      assistantMessages: 'Assistant Responses',
      exportOptionsTitle: 'Export Options',
      exportAsJSON: 'Export as JSON',
      exportAsText: 'Export as Text',
      exportAsMarkdown: 'Export as Markdown',
      exportAsHTML: 'Export as HTML',
      searchTitle: 'Search Conversations',
      searchPlaceholder: 'Search conversations by title or content...',
      messages: 'messages',
      noMatches: 'No conversations match your search.',
      loadingFile: 'Loading file...',
      loadingDemo: 'Loading demo data...',
      successfullyLoaded: 'Successfully loaded {count} conversation(s)!',
      errorParsing: 'Error parsing JSON: {error}',
      errorProcessing: 'Error processing data: {error}',
      errorLoadingDemo: 'Error loading demo data: {error}',
      noConversations: 'No conversations found in the export file.',
      downloaded: 'Downloaded {filename}',
      footerText: 'ChatGPT Export Extractor – Part of Nebula Ultimate',
      footerSubtext: 'Extract, analyze, and export your ChatGPT conversations with ease',
      perPage: 'Per page:',
      showingResults: 'Showing {start}-{end} of {total}',
      previous: 'Previous',
      next: 'Next',
      loadMore: 'Load More',
      language: 'Language'
    },
    es: {
      title: 'Extractor de Exportaciones de ChatGPT',
      subtitle: 'Extrae y analiza tus exportaciones de conversaciones de ChatGPT',
      description: 'Sube tu archivo de exportación de ChatGPT (conversations.json) para analizar, ver y exportar tus datos de conversación en varios formatos.',
      backLink: '← Volver a Nebula Ultimate',
      howToExport: '📥 Cómo Exportar tus Conversaciones de ChatGPT',
      exportInstructions: [
        'Ve a <strong>ChatGPT</strong> (chat.openai.com)',
        'Haz clic en tu <strong>icono de perfil</strong> en la esquina inferior izquierda',
        'Selecciona <strong>"Configuración"</strong> del menú',
        'Ve a <strong>"Controles de datos"</strong> → <strong>"Exportar datos"</strong>',
        'Haz clic en <strong>"Exportar"</strong> y espera el correo con tu enlace de descarga',
        'Descarga el archivo ZIP, extráelo y encuentra <strong>conversations.json</strong>',
        '¡Sube el archivo conversations.json a continuación!'
      ],
      uploadTitle: 'Subir Exportación de ChatGPT',
      chooseFile: 'Elegir Archivo',
      tryDemo: 'Probar Datos de Demostración',
      noFileSelected: 'Ningún archivo seleccionado',
      exportStatsTitle: 'Estadísticas de Exportación',
      totalConversations: 'Total de Conversaciones',
      totalMessages: 'Total de Mensajes',
      userMessages: 'Mensajes del Usuario',
      assistantMessages: 'Respuestas del Asistente',
      exportOptionsTitle: 'Opciones de Exportación',
      exportAsJSON: 'Exportar como JSON',
      exportAsText: 'Exportar como Texto',
      exportAsMarkdown: 'Exportar como Markdown',
      exportAsHTML: 'Exportar como HTML',
      searchTitle: 'Buscar Conversaciones',
      searchPlaceholder: 'Buscar conversaciones por título o contenido...',
      messages: 'mensajes',
      noMatches: 'Ninguna conversación coincide con tu búsqueda.',
      loadingFile: 'Cargando archivo...',
      loadingDemo: 'Cargando datos de demostración...',
      successfullyLoaded: '¡Se cargaron {count} conversación(es) con éxito!',
      errorParsing: 'Error al analizar JSON: {error}',
      errorProcessing: 'Error al procesar datos: {error}',
      errorLoadingDemo: 'Error al cargar datos de demostración: {error}',
      noConversations: 'No se encontraron conversaciones en el archivo de exportación.',
      downloaded: 'Descargado {filename}',
      footerText: 'Extractor de Exportaciones de ChatGPT – Parte de Nebula Ultimate',
      footerSubtext: 'Extrae, analiza y exporta tus conversaciones de ChatGPT con facilidad',
      perPage: 'Por página:',
      showingResults: 'Mostrando {start}-{end} de {total}',
      previous: 'Anterior',
      next: 'Siguiente',
      loadMore: 'Cargar Más',
      language: 'Idioma'
    },
    fr: {
      title: 'Extracteur d\'Export ChatGPT',
      subtitle: 'Extrayez et analysez vos exports de conversations ChatGPT',
      description: 'Téléchargez votre fichier d\'export ChatGPT (conversations.json) pour analyser, visualiser et exporter vos données de conversation dans différents formats.',
      backLink: '← Retour à Nebula Ultimate',
      howToExport: '📥 Comment Exporter vos Conversations ChatGPT',
      exportInstructions: [
        'Allez sur <strong>ChatGPT</strong> (chat.openai.com)',
        'Cliquez sur votre <strong>icône de profil</strong> en bas à gauche',
        'Sélectionnez <strong>"Paramètres"</strong> dans le menu',
        'Allez dans <strong>"Contrôles des données"</strong> → <strong>"Exporter les données"</strong>',
        'Cliquez sur <strong>"Exporter"</strong> et attendez l\'email avec votre lien de téléchargement',
        'Téléchargez le fichier ZIP, extrayez-le et trouvez <strong>conversations.json</strong>',
        'Téléchargez le fichier conversations.json ci-dessous !'
      ],
      uploadTitle: 'Télécharger l\'Export ChatGPT',
      chooseFile: 'Choisir un Fichier',
      tryDemo: 'Essayer les Données de Démo',
      noFileSelected: 'Aucun fichier sélectionné',
      exportStatsTitle: 'Statistiques d\'Export',
      totalConversations: 'Total des Conversations',
      totalMessages: 'Total des Messages',
      userMessages: 'Messages de l\'Utilisateur',
      assistantMessages: 'Réponses de l\'Assistant',
      exportOptionsTitle: 'Options d\'Export',
      exportAsJSON: 'Exporter en JSON',
      exportAsText: 'Exporter en Texte',
      exportAsMarkdown: 'Exporter en Markdown',
      exportAsHTML: 'Exporter en HTML',
      searchTitle: 'Rechercher des Conversations',
      searchPlaceholder: 'Rechercher des conversations par titre ou contenu...',
      messages: 'messages',
      noMatches: 'Aucune conversation ne correspond à votre recherche.',
      loadingFile: 'Chargement du fichier...',
      loadingDemo: 'Chargement des données de démo...',
      successfullyLoaded: '{count} conversation(s) chargée(s) avec succès !',
      errorParsing: 'Erreur d\'analyse JSON : {error}',
      errorProcessing: 'Erreur de traitement des données : {error}',
      errorLoadingDemo: 'Erreur de chargement des données de démo : {error}',
      noConversations: 'Aucune conversation trouvée dans le fichier d\'export.',
      downloaded: '{filename} téléchargé',
      footerText: 'Extracteur d\'Export ChatGPT – Partie de Nebula Ultimate',
      footerSubtext: 'Extrayez, analysez et exportez vos conversations ChatGPT facilement',
      perPage: 'Par page :',
      showingResults: 'Affichage de {start}-{end} sur {total}',
      previous: 'Précédent',
      next: 'Suivant',
      loadMore: 'Charger Plus',
      language: 'Langue'
    }
  };

  let currentLanguage = 'en';

  function setLanguage(lang) {
    if (translations[lang]) {
      currentLanguage = lang;
      localStorage.setItem('chatgpt-extractor-lang', lang);
      return true;
    }
    return false;
  }

  function getLanguage() {
    return currentLanguage;
  }

  function t(key, params = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key] || key;
    
    // Replace parameters
    Object.keys(params).forEach(param => {
      text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
    });
    
    return text;
  }

  function getAvailableLanguages() {
    return Object.keys(translations);
  }

  // Initialize language from localStorage
  const savedLang = localStorage.getItem('chatgpt-extractor-lang');
  if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
  } else {
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      currentLanguage = browserLang;
    }
  }

  return {
    setLanguage,
    getLanguage,
    t,
    getAvailableLanguages
  };
})();

// Export for Node.js/Jest testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
