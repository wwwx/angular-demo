import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language-select',
    templateUrl: './language-select.component.html',
    styleUrls: ['./language-select.component.css']
})
export class LanguageSelectComponent implements OnInit {

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        // 语言初始化(若未设置语言, 则取浏览器语言)
        const currentLanguage = localStorage.getItem('Current-Language') || this.translate.getBrowserCultureLang();
        // console.log(currentLanguage);
        // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
        this.translate.setDefaultLang('zh-CN');
        this.translate.use(currentLanguage);
        // 记录当前设置的语言
        localStorage.setItem('Current-Language', currentLanguage);
    }


    setLanguage(lang: string): void {
        this.translate.use(lang);
        localStorage.setItem('Current-Language', lang);
    }

}
