<script>
	import Content from './Content.svelte'
	import Sidebar from './Sidebar.svelte'

	let selectedIndex = 0;

	let selectedItem = 0;

	let modules = [
        {
            "module_name":"Intro",
            "module_description":"Intro Module",
            "modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch1%20Introduction-SgnD0jbXTSUo25un1a0qjbHDRwvqML.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/nkLZs64E5JI?si=3bgyzp52xKhdrXdH"
                }
            ],
            "module_open":false,
            "index":0
        },
        {
            "module_name":"SW",
            "module_description":"Software Processes",
			"modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch2%20SW%20Processes-aXwSjoWt9KhPqZ4o2A2SOQJD5qKjDO.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/zYK5-9MnEBg?si=1KW2sBHB3WEeaxaB"
                }
            ],
            
            "module_open":false,
            "index":1
        },{
            "module_name":"Agile SW",
            "module_description":"Agile Software Development",
			"modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch3%20Agile%20SW%20Dev-tTOEPFXVYAdhp8cWIiUKuPXd4aloBK.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/io9UbI5AWiU?si=CnqZ46OODpuEGQ_-"
                }
            ],
            "module_open":false,
            "index":2
        },{
            "module_name":"Requirements",
            "module_description":"Requirements Engineering Module",
			"modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch4%20Req-81mw9LuZzYAMVj3PQHIVaZ5tZrESh4.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/bz4aTRnXLPw?si=BR9cvvdAVi70VPTM"
                }
            ],
            "module_open":false,
            "index":3
        },{
            "module_name":"System Modeling",
            "module_description":"Modeling Module",
            "modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch5%20System_modeling-KD9zDWJPT6ZqX1UUgdiB7rxXUvKYwi.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/Gt53N6nzItg?si=-sVk0J75jzT1DlGw"
                }
            ],
            "module_open":false,
            "index":4
        },{
            "module_name":"SW Architecture",
            "module_description":"Software Architectural Design",
            "modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch6%20Architectural%20design-qxCfUG4qrNke73ELbSat6D2mEGfagT.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":""
                }
            ],
            "module_open":false,
            "index":5
        },{
            "module_name":"Software Implementation",
            "module_description":"Implementation Methods",
            "modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch7%20Implementation%20(4)-xZI7pSu7VuhfrCADQ8Bp2JLcIv5lP1.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/Fi3_BjVzpqk?si=1v5qeyKCRurtBVya"
                }
            ],
            "module_open":false,
            "index":6
        },{
            "module_name":"Software Testing",
            "module_description":"Testing Module",
            "modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch8.TestingF-8ZUkBfzP9E5QFUkkHRpCHtyPAbwdTP.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/E7gB7f7zIMQ?si=uzi9A_gwHbswSsd2"
                }
            ],
            "module_open":false,
            "index":7
        },{
            "module_name":"Software Evolution",
            "module_description":"Evolution",
            "modules_content":[
                {
                    "item_index":0,
                    "item_name":"item1",
                    "item_type":"pdf",
                    "item_url":"https://elme9pv3viromrve.public.blob.vercel-storage.com/Ch9%20Evolution-1cqOHE6LWHyPZYmHdn4d4l2ZdyHnbE.pdf"
                },
                {
                    "item_index":1,
                    "item_name":"item2",
                    "item_type":"pdf",
                    "item_url":"https://www.youtube.com/embed/xFOE8_uJz0U?si=Lv8NDg4k1tMkTtwD"
                }
            ],
            "module_open":false,
            "index":8
        }
        ];

</script>

<svelte:head>
	<title>Modules</title>
	<meta name="description" content="Read the modules" />
</svelte:head>

<section>
		<Sidebar bind:selectedIndex bind:selectedItem {modules}/>
		<Content bind:selectedIndex bind:selectedItem {modules}/>
	
</section>


<style>

	section{
		margin-top: 1rem;
		width: 95vw;
		height: 90vh;
		overflow-y: hidden;
		margin-inline: auto;
		display: flex;

	}
</style>