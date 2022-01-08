from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import time, base64
PATH = 'driver/chromedriver'

driver = webdriver.Chrome(PATH)

driver.get('https://web.whatsapp.com')


time.sleep(5)
selector = '#app > div._1ADa8.nMnIl.app-wrapper-web.font-fix > div > div.landing-window > div.landing-main > div > div._25pwu > div > canvas'

canvas = driver.find_element_by_css_selector(selector)
canvas_base64 = driver.execute_script("return arguments[0].toDataURL('image/png').substring(21);", canvas)
# canvas_png = driver.execute_script("return arguments[0].toDataURL('image/png');", canvas)
canvas_png = base64.b64decode(canvas_base64)
# # save to a file
with open(r"canvas.png", 'wb') as f:
    f.write(canvas_png)

driver.quit()
