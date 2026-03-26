/***********************************************************************************************************************

	locale/pt-BR.js – Português (Brazil)

	Localization by: Janos Biro (https://janosbiro.itch.io/).

	Copyright © 2018–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

	For more information about the guidelines used to create this localization, see:
		http://www.motoslave.net/sugarcube/2/docs/#guide-localization

***********************************************************************************************************************/
/* global l10nStrings */
/* eslint-disable strict */

(() => {
	/*******************************************************************************
		General.
	*******************************************************************************/

	l10nStrings.textAbort = 'Abortar';

	l10nStrings.textAborting = 'Abortando';

	l10nStrings.textCancel = 'Cancelar';

	l10nStrings.textClear = 'Limpar';

	l10nStrings.textClose = 'Fechar';

	l10nStrings.textDelete = 'Apagar';

	l10nStrings.textExport = 'Exportar';

	// In lowercase, if possible.
	l10nStrings.textIdentity = 'jogo';

	l10nStrings.textImport = 'Importar';

	l10nStrings.textLoad = 'Carregar';

	l10nStrings.textOff = 'Desligado';

	l10nStrings.textOk = 'OK';

	l10nStrings.textOn = 'Ligado';

	l10nStrings.textSave = 'Salvar';

	// (noun) chance to act (in a game), moment, period
	l10nStrings.textTurn = 'Turno';


	/*******************************************************************************
		Errors.
	*******************************************************************************/

	// NOTE: `passage` is supplied locally.
	l10nStrings.errorNonexistentPassage = 'a passagem "{passage}" não existe';


	/*******************************************************************************
		Warnings.
	*******************************************************************************/

	l10nStrings.warningNoStorage = 'Todas as APIs de armazenamento utilizáveis estão ausentes. As possíveis causas são uma configuração de cookie de terceiros desativada, que também afeta o Web Storage, ou um modo de navegação privada.';

	l10nStrings.warningNoWebStorage = 'A API de armazenamento na Web está ausente, portanto, este {textIdentity} está sendo executado em um modo degradado. Talvez você consiga continuar, mas algumas partes podem não funcionar corretamente.';

	l10nStrings.warningDegraded = 'Alguns recursos necessários para dar suporte a esse {textIdentity} estão ausentes, portanto, ele está sendo executado em um modo degradado. Talvez você consiga continuar, mas algumas partes podem não funcionar corretamente.';

	l10nStrings.warningNoSaves = 'Alguns recursos necessários para suportar salvamentos estão ausentes, portanto, os salvamentos foram desativados para esta sessão.';


	/*******************************************************************************
		API: Save.
	*******************************************************************************/

	l10nStrings.saveErrorDisallowed = 'No momento, não é permitido salvar.';

	l10nStrings.saveErrorDecodeFail = 'incapaz de decodificar o salvamento, provavelmente devido a corrupção';

	l10nStrings.saveErrorDiskLoadFail = 'falha ao carregar o arquivo salvo do disco';

	l10nStrings.saveErrorIdMismatch = 'o salvamento é do {textIdentity} errado';

	l10nStrings.saveErrorInvalidData = 'o salvamento está sem os dados necessários, provavelmente devido a corrupção';

	l10nStrings.saveErrorNonexistent = 'o salvamento não existe';


	/*******************************************************************************
		Base UI.
	*******************************************************************************/

	l10nStrings.uiBarLabelToggle = 'Alternar a barra da interface do usuário';

	l10nStrings.uiBarLabelBackward = 'Retroceder no histórico do {textIdentity}';

	l10nStrings.uiBarLabelForward = 'Avançar no histórico do {textIdentity}';

	// [DEPRECATED]
	l10nStrings.uiBarLabelJumpto = 'Ir para um ponto específico no histórico do {textIdentity}';


	/*******************************************************************************
		Dialog: Alert.
	*******************************************************************************/

	l10nStrings.alertTitle = 'Alerta';


	/*******************************************************************************
		Dialog: Restart.
	*******************************************************************************/

	l10nStrings.restartTitle = 'Recomeçar';

	l10nStrings.restartMesgPrompt = 'Todo o progresso não salvo será perdido. Tem certeza de que deseja reiniciar?';


	/*******************************************************************************
		Dialog: Saves.
	*******************************************************************************/

	l10nStrings.continueTitle = 'Continuar';

	l10nStrings.savesTitle = 'Salvar';

	l10nStrings.savesHeaderBrowser = 'No Navegador';

	l10nStrings.savesHeaderDisk = 'No Disco';

	l10nStrings.savesLabelBrowserClear = 'Limpar todos os salvamentos do navegador';

	l10nStrings.savesLabelBrowserExport = 'Exportar os salvamentos do navegador para o pacote';

	l10nStrings.savesLabelBrowserImport = 'Importar salvamentos do navegador do pacote';

	l10nStrings.savesLabelDiskLoad = 'Carregar do disco';

	l10nStrings.savesLabelDiskSave = 'Salvar no disco';

	l10nStrings.savesTextBrowserAuto = 'Auto';

	l10nStrings.savesTextBrowserSlot = 'Slot';

	l10nStrings.savesTextNoDate = 'data desconhecida';


	/*******************************************************************************
		Dialog: Settings.
	*******************************************************************************/

	l10nStrings.settingsTitle = 'Configurações';

	l10nStrings.settingsTextReset = 'Restaurar os padrões';


	/*******************************************************************************
		Debugging: Error Views.
	*******************************************************************************/

	l10nStrings.errorViewTitle = 'Erro';

	l10nStrings.errorViewLabelToggle = 'Alternar a exibição de erro';


	/*******************************************************************************
		Debugging: Debug bar.
	*******************************************************************************/

	l10nStrings.debugBarLabelToggle = 'Alternar a barra de depuração';

	l10nStrings.debugBarLabelViewsToggle = 'Alternar as visualizações de depuração';

	l10nStrings.debugBarLabelWatchAdd = 'Adicionar nova observação';

	l10nStrings.debugBarLabelWatchAll = 'Observar tudo';

	l10nStrings.debugBarLabelWatchClear = 'Limpar todas as observações';

	l10nStrings.debugBarLabelWatchDelete = 'Excluir esta observação';

	l10nStrings.debugBarLabelWatchPlaceholder = 'nome da variável';

	l10nStrings.debugBarLabelPassagePlaceholder = 'nome da passagem';

	l10nStrings.debugBarLabelPassagePlay = 'Executar passagem';

	l10nStrings.debugBarLabelWatchToggle = 'Alternar o painel de observação';

	l10nStrings.debugBarMesgNoWatches = 'Nenhuma observação definida';

	l10nStrings.debugBarTextAdd = 'Adicionar';

	l10nStrings.debugBarTextPassage = 'Passagem';

	l10nStrings.debugBarTextViews = 'Visualizações';

	l10nStrings.debugBarTextWatch = 'Observação';


	/*******************************************************************************
		Macros.
	*******************************************************************************/

	// (verb) rewind, revert
	l10nStrings.macroBackText = 'Voltar';

	// (verb) go/send back
	l10nStrings.macroReturnText = 'Retornar';


	/*******************************************************************************
		[DEPRECATED] Dialog: Autoload.
	*******************************************************************************/

	l10nStrings.autoloadTitle = 'Carregamento Automático';

	l10nStrings.autoloadMesgPrompt = 'Um salvamento automático existe. Carregar agora ou ir para o início?';

	l10nStrings.autoloadTextCancel = 'Ir para o início';

	l10nStrings.autoloadTextOk = 'Carregar salvamento automático';


	/*******************************************************************************
		[DEPRECATED] Dialog: Jump To.
	*******************************************************************************/

	l10nStrings.jumptoTitle = 'Ir Para';

	l10nStrings.jumptoMesgUnavailable = 'Nenhum ponto de salto disponível atualmente\u2026';


	/*******************************************************************************
		[DEPRECATED] Dialog: Share.
	*******************************************************************************/

	l10nStrings.shareTitle = 'Compartilhar';
})();
