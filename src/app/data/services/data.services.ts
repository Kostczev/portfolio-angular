import { Injectable } from '@angular/core';
import { Job, Project, Skill, SocialLink } from '../interface/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _skills: Skill[] = [
    {
      name: 'JavaScript'
    },
    {
      name: 'HTML'
    },
    {
      name: 'CSS'
    },
    {
      name: 'SCSS'
    },
    {
      name: 'Figma'
    },
  ];
  private _learnedSkills: Skill[] = [
    {
      name: 'TypeScript'
    },
    {
      name: 'Angular'
    },
  ];
  private _jobs: Job[] = [
    {
      period: 'Январь 2023 - настоящее время',
      company: 'BLIZKO',
      role: 'Специалист по веб-дизайну',
      responsibilities: [
        'Разрабатывал и внедрял адаптивные и кроссбраузерные маркетинговые страницы по макетам Figma, что способствовало повышению конверсии.',
        'Полный цикл разработки: от создания макета и верстки до интеграции с бэкенд-сервисами.',
        'Реализовал систему сбора данных с форм:',
        '· Изначально — на Google Apps Script (интеграция с Google Sheets).',
        '· После санкций — мигрировал систему на стек Яндекс.Облака (Yandex Cloud Functions, YDB, Dashboards), обеспечив бесперебойный сбор данных.',
        '· Занимался версткой email-рассылок, обеспечивая их корректное отображение в различных почтовых клиентах.'
      ],
      skills: [
        'HTML',
        'JS',
        'CSS',
        'Figma',
      ]
    },
    {
      period: '2021 - 2023',
      company: 'Магистратура УрФу',
      role: 'Студент',
      responsibilities: [
        '09.04.03 Прикладная информатика'
      ],
      skills: []
    },
    {
      period: '2017 - 2021',
      company: 'Бакалавриат УрФу',
      role: 'Студент',
      responsibilities: [
        '09.04.03 Прикладная информатика'
      ],
      skills: []
    },
  ];
  private _projects: Project[] = [
    {
      title: 'Учебный проект - Соцсеть',
      description: [
        'Нашел достаточно классный видео урок по ангуляру и повторил его содержимое',
        'Для авторизации в сети необходимо получить логин и пароль в телеграмм боте автора https://t.me/icherniakov_info_bot',
        'Проект реализует следующий функционал:',
        '· авторизация',
        '· отпарвка/получение сообщений',
        '· отправка и комментирование постов',
        '· редактирование своего профиля',
        '· поиск людей (без реализации взаимодействия с ними)',
        'За счет этого курса получилось поработать с разнообразным функционалом Angular'
      ],
      techStack: [
        'Angular',
        'TypeScript',
        'RxJS',
      ],
      imageUrl: '/portfolio-angular/assets/imgs/tik-talk.png',
      projectUrl: 'https://kostczev.github.io/tik-talk/',
      githubUrl: 'https://github.com/Kostczev/tik-talk/'
    },
    {
      title: 'Страница с текущего места - Сайты и интернет-магазины',
      description: [
        'Стояла задача переработать страницы с примерами работ компании',
        'Старая реализация имела несколько страниц с разницей в предоставляемой выдаче по сегментам и устаревший дизайн',
        'Единое место для "складывания" новых кейсов не имелось и приходилось класть их на нужную страницу "руками"',
        'Разработал дизайн страницы',
        'Сформировал систему вывода примеров черуез js, убрал лишние страницы и необходимость их поддрежки',
        'Реализовал фильтрацию по сегментам и городам',
      ],
      techStack: [],
      imageUrl: '/portfolio-angular/assets/imgs/blizko-page_our-cases.png',
      projectUrl: 'https://kostczev.github.io/blizko-page_our-cases/',
      githubUrl: 'https://github.com/Kostczev/blizko-page_our-cases/'
    },
    {
      title: 'Страница с текущего места - Реклама в Яндекс ПромоСтраницах',
      description: [
        'Разработка дизайна в Figma',
        'Адаптивная верстка',
      ],
      techStack: [],
      imageUrl: '/portfolio-angular/assets/imgs/blizko-page_promo-page.png',
      projectUrl: 'https://kostczev.github.io/blizko-page_promo_page/',
      githubUrl: 'https://github.com/Kostczev/blizko-page_promo_page/'
    },
    {
      title: 'Старое партфолио',
      description: [
        'Было оформленно на VEU.JS'
      ],
      techStack: [],
      imageUrl: '/portfolio-angular/assets/imgs/old-portfolio.png',
      projectUrl: 'https://kostczev.github.io/portfolio/',
      githubUrl: 'https://github.com/Kostczev/portfolio'
    },
  ];
  private _socialLinks: SocialLink[] = [
    {
      name: 'github',
      url: 'https://github.com/Kostczev',
    },
    {
      name: 'telegram',
      url: 'https://t.me/Kostczev',
    },
    {
      name: 'whatsapp',
      url: 'https://wa.me/89506541212',
    },
  ];

  get skills(): Skill[] { return this._skills; }
  get learnedSkills(): Skill[] { return this._learnedSkills; }
  get jobs(): Job[] { return this._jobs; }
  get projects(): Project[] { return this._projects; }
  get socialLinks(): SocialLink[] { return this._socialLinks; }
}
