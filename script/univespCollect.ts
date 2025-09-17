import { chromium } from 'playwright';
import { UnivespJSON } from './interface';

const univespCollect = (async (): Promise<UnivespJSON> => {
  const disciplinas: UnivespJSON = { disciplinas: [] };

  const { UNIVESP, USERNAME, PASSWORD } = Bun.env;

  if (!UNIVESP || !USERNAME || !PASSWORD) {
    console.error("⚠️ Variáveis de ambiente UNIVESP, USERNAME ou PASSWORD não estão definidas.");
    process.exit(1);
  }

  const browser = await chromium.launch(); // Use headless mode
  const page = await browser.newPage();

  try {
    await page.goto(UNIVESP);

    await page.fill('//*[@id="form:usuario"]', USERNAME);
    await page.fill('//*[@id="form:senha"]', PASSWORD);
    await page.keyboard.press('Enter');

    // Wait for a specific element after login
    await page.waitForSelector('#accordionSidebar', { timeout: 5000 });

    await page.click('//*[@id="accordionSidebar"]/li[2]');
    await page.waitForSelector('#collapseInfoAcade', { timeout: 5000 });

    await page.click('//*[@id="collapseInfoAcade"]');

    for (let i = 0; i < 6; i++) {
      const nomeDisciplina = await page.locator(`//*[@id="form:j_idt553:0:j_idt558:${i}:j_idt561"]/span`).textContent();
      const cargaDisciplina = await page.locator(`//*[@id="form:j_idt553:0:j_idt558:${i}:j_idt565"]/span[2]`);
      const statusDisciplina = await page.locator(`//*[@id="form:j_idt553:0:j_idt558:${i}:j_idt565"]/span[3]`)

      if (!nomeDisciplina) {
        console.warn(`⚠️ Não foi possível obter o nome da disciplina para o índice ${i}.`);
      }
      if (!cargaDisciplina) {
        console.warn(`⚠️ Não foi possível obter a carga horária para o índice ${i}.`);
      }
      if (!statusDisciplina) {
        console.warn(`⚠️ Não foi possível obter o status da disciplina para o índice ${i}.`)
      }
      
      disciplinas.disciplinas.push({
        nome: nomeDisciplina?.trim() || `Disciplia ${i + 1} não encontrada`,
        carga: (await cargaDisciplina?.textContent())?.trim() || 'Carga não encontrada',
        status: (await statusDisciplina?.textContent())?.trim() || 'Status não encontrado'
      })

    }

  } catch (error) {
    console.error("Erro ao coletar disciplinas da UNIVESP: ", error);
  } finally {
    await browser.close();
  }

  return disciplinas;
});

const run = (async() => {
  try {
    const data = await univespCollect()
    const jsonData = JSON.stringify(data, null, 2)

    await Bun.write("./public/univespData.json", jsonData)
    console.log("✅ Disciplinas salvas em univespData.json");

  } catch (e) {
    console.error("Erro ao executar a coleta: ", e);
    process.exit(1);
  }
})()

run