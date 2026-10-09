window.PAPER_DATA_UPDATED_AT = "2026-10-09";
window.PAPER_ITEMS = [
  {
    "id": "2610.12470",
    "title": "Dex-One2Many: Learning Dexterous Manipulation from a Single Human Demonstration",
    "authors": [
      "Jusuk Lee",
      "Sungha Kim",
      "Yeonsoo Park",
      "Jonguk Cheon",
      "Yoonkyo Jung",
      "Yongjun You",
      "H. Jin Kim",
      "Jia-Bin Huang",
      "Furong Huang",
      "Youngseok Jang",
      "Seungjae Lee"
    ],
    "abstract": "While learning dexterous manipulation from a single human video offers a promising alternative to costly robot demonstrations, many recent methods predominantly imitate demonstrated motions. Such strict motion matching often limits generalization to initial object poses, goal poses, and grasps not shown in the video. Alternatively, discovering a policy via reinforcement learning (RL) allows for broad generalization, but without prior guidance, it struggles with high-dimensional exploration in complex, multi-stage tasks. To address these coupled generalization and exploration challenges, we present Dex-One2Many, a real-to-sim-to-real framework that learns a generalizable dexterous manipulation policy from a single human video. Our key insight is to abstract the video into sequential scene graphs that guide RL, enabling efficient exploration while preserving broad generalizability. The graphs serve as generative constraints for sampling diverse reset states and provide dense rewards for each stage. Because the graphs constrain relations rather than exact poses, these reset states cover object poses and grasps beyond the video, while initializing each stage from them with dense rewards keeps exploration short and guided. Trained entirely in simulation, Dex-One2Many transfers zero-shot to a real multi-fingered hand. Across five tool-use and manipulation tasks, Dex-One2Many exceeds baselines by 6.5% in seen configurations, while its robust generalization widens this gap to 71% in unseen scenarios.",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12470"
  },
  {
    "id": "2610.12469",
    "title": "Rubric-CEPR: Self-Evolving Image Editing via Reward-Verified Self-Distillation",
    "authors": [
      "Ritesh Thawkar",
      "Shubham Patle",
      "Shravan Venkatraman",
      "Rao Muhammad Anwer"
    ],
    "abstract": "Instruction-guided image editors have become highly capable, yet improving them further still depends on human-edited training pairs or external reward models. Such supervision is costly to obtain and can reward plausible failures: a realistic output may leave the requested change undone or alter content that should be preserved. In this work, we strive to improve a pretrained image editor using only its own generations, without human-edited targets or an external training-time reward model. To this end, we propose a self-evolving framework, named Rubric-CEPR, that verifies the editor's own samples with its internal representations through a rubric-augmented Contrastive Edit-Preservation Reward (CEPR). A Planner proposes structured edit instructions from unlabeled images, the Editor samples multiple candidate edits, and a frozen Critic scores each candidate with decomposed rubric checks for edit realization, removal of the old state, and content preservation, using features already exposed by the editor. Non-compensatory gates reject infeasible candidates, and the best verified candidate is distilled into the editor through lightweight adapter training. On Qwen-Image-Edit, Rubric-CEPR improves ImgEdit from 4.36 to 4.60 (+5.5%), with a +24.9% gain on object isolation, and transfers to GEdit-Bench and Complex-Edit. The same procedure also improves Step1X-Edit by +7.8% on ImgEdit. We hope our approach will serve as a solid baseline for image editors that improve themselves from their own verified samples. Our code is publicly available at $\\href{https://riteshthawkar.github.io/Rubric-CEPR/}{\\text{this URL}}$",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12469"
  },
  {
    "id": "2610.12468",
    "title": "DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training",
    "authors": [
      "Junyan Li",
      "Ruizhi Li",
      "Yu Liu",
      "Xiangshuo Liu",
      "Mingchao Sun",
      "Hongyu Pan",
      "Mu Xu",
      "Lue Fan",
      "Zhaoxiang Zhang"
    ],
    "abstract": "We present DreamTrue, a multi-view, cross-embodiment robot world model for action-faithful and physically plausible video prediction. Training such a model on existing robot datasets faces two obstacles: imprecise calibration can impair action following, while limited coverage of unsuccessful interactions can bias predictions toward successful outcomes. To improve action following across embodiments, we render action trajectories into image-space conditions and introduce offline geometric calibration to align these conditions with the target videos. To broaden interaction coverage, we introduce counterfactual post-training, modifying recorded action trajectories and generating future videos under a wider range of actions and contact configurations. To provide feedback on these predictions without paired ground-truth futures, we construct a human-annotated video dataset covering robot, object, and interaction defects and use it to train an embodied video reward model. Its scores guide reinforcement-learning post-training toward more physically plausible interaction outcomes. On AgiBot, DreamTrue attains state-of-the-art action following, while reducing the human-assessed interaction defect rate from from 48.12% to 6.25%. Notably, our model ranks first in the world model track of the AgiBot World Challenge 2026. The project page can be found at https://brave-eai.github.io/DreamTrue.",
    "published": "2026-10-08T17:59:51Z",
    "updated": "2026-10-08T17:59:51Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12468"
  },
  {
    "id": "2610.12466",
    "title": "On the estimation and validity of AI time horizons---a statistical look at the METR plot",
    "authors": [
      "Drew T. Nguyen",
      "William Fithian"
    ],
    "abstract": "METR's 50\\% time horizon measures the human completion time of software tasks that an AI solves with 50\\% probability, allowing AI capabilities to be expressed in interpretable units. On 228 tasks and 26 AIs, we recompute the time horizons using splines and item-response theory to relax the assumption that the AI difficulty of a task depends linearly on the log of human time. Our fitted spline can be interpreted as a function that \\emph{converts} human time to AI difficulty; it is nearly flat in a region from 2--30 min but close to linear elsewhere. Hence, a time-horizon jump from 3 min to 30 min is much easier than one from 30 min to 5 hours despite the same multiplier of $10 \\times$. Overall, we contribute time-horizon point estimates that perform better under a cross-validated suite of proper scoring rules, as well as diagnostic plots for assessing time horizons' construct validity. We suggest that time horizons be interpreted together with the diagnostic plots, especially as new time-horizon-based benchmarks are proposed or existing ones grow to include longer tasks.",
    "published": "2026-10-08T17:59:50Z",
    "updated": "2026-10-08T17:59:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.12466"
  },
  {
    "id": "2610.12463",
    "title": "From Reactive Containment to Proactive Assurance: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents",
    "authors": [
      "Abbas Raftari"
    ],
    "abstract": "In 2026, cybersecurity evaluations involving OpenAI, Anthropic, and Google agents reached real systems outside their authorized test scope. The paths were different. OpenAI agents exploited research infrastructure, coordinated across runs, and compromised parts of Hugging Face's production environment. Anthropic reported cases in which a misconfigured third-party environment exposed real systems to agents pursuing simulated cyber tasks. In a separately reported evaluation, Google's Gemini accessed three real organizations through an unintended internet route; Google stated that the model stopped in all three instances. Taken together, the cases show why an evaluation cannot rely on an assumed boundary. That boundary must be verified while the agent is operating. This comparative instrumental case study develops a Proactive Agent Security Assurance Cycle (PASAC) and a five-layer Boundary Assurance Stack. The framework combines risk-tiered task design, executable scope contracts, pre-run validation, least-capability access, independent egress enforcement, credential restrictions, cross-run monitoring, automatic stop conditions, and evidence-based reauthorization. A leading-indicator model, nine design propositions, and seven falsifiable hypotheses turn these lessons into a testable research program. Because the public Gemini record is limited to attributed statements and journalism, its detailed causal mechanism remains provisional. The central conclusion is straightforward: proactive agent security requires continuous assurance across the full execution system, not confidence in any single sandbox or safeguard.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.12463"
  },
  {
    "id": "2610.12464",
    "title": "What 30,000 Hours of Ego-centric Video Does Not Teach",
    "authors": [
      "Jiahua Dong",
      "Anurag Bagchi",
      "Yash Jangir",
      "Muhammad Zubair Irshad",
      "Sergey Zakharov",
      "Martial Hebert",
      "Homanga Bharadhwaj",
      "Yu-Xiong Wang",
      "Vitor Campagnolo Guizilini",
      "Pavel Tokmakov"
    ],
    "abstract": "World models offer a promising alternative to physics-based simulators, yet remain far from practical deployment. We ask how far scaling ego-centric human video takes them, using a dataset of 30,000 hours spanning over 1,000 scene types and 14,000 contributors. Rather than relying on opaque downstream metrics, we directly evaluate agent and object-interaction fidelity on a challenging out-of-distribution benchmark. Increasing training data by 100x improves both, but unevenly: the agent is modeled well, while object fidelity remains far lower and improves slowly. We show that the agent gains need not come from data, and a careful visual conditioning design saturates fidelity with a fraction of it, which lets us measure object fidelity on its own and discover its saturation point. We then introduce a supervision scheme that shifts capacity from scene appearance toward object dynamics, improving object fidelity though a substantial gap remains. Finally, our conclusions transfer to downstream humanoid modeling. Overall, our results suggest that scaling ego-centric data brings agent modeling close to its limit while leaving its effects on the world far behind, and that closing this gap will depend on how models are trained, not only on how much data they see.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12464"
  },
  {
    "id": "2610.12461",
    "title": "OuroWorld: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs",
    "authors": [
      "You-Zhe Xie",
      "Ting-Wei Chou",
      "Yu-Hsuan Li",
      "Kaipeng Zhang",
      "Zhixiang Wang",
      "Yu-Lun Liu"
    ],
    "abstract": "Recent 3D world models generate photorealistic, explorable scenes that remain frozen in time. OuroWorld is a mask-free framework that turns any static 3D Gaussian Splatting scene into a 3D cinemagraph: a dynamic scene with vivid, diverse motion looping seamlessly from any viewpoint. A vision-language model infers plausible dynamics and guides a video model to synthesize a reference video, which we lift and complete into multi-view videos. To learn from this imperfect supervision, we propose Inconsistency-Robust Periodic 4DGS: a Fourier-series deformation field guarantees looping by construction, while a Grounded Drift Field anchored at the reference view absorbs cross-view inconsistency. Unlike prior Eulerian methods limited to fluid-like motion, we capture general deformation, object motion, and illumination change. We introduce a ground-truth-free evaluation covering vividness, naturalness, loop seam coherence, and scene quality. On 39 reconstructed and generated scenes, OuroWorld outperforms all baselines and wins 70.8%-99.0% of user-study comparisons. Project page: https://ouroworld.userwei.com",
    "published": "2026-10-08T17:59:46Z",
    "updated": "2026-10-08T17:59:46Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.12461"
  },
  {
    "id": "2610.12459",
    "title": "WorldGuide: Goal-Directed Video World Model for Procedural Task Execution",
    "authors": [
      "Ankan Deria",
      "Komal Kumar",
      "Hisham Cholakkal",
      "Fahad Shahbaz Khan",
      "Salman Khan"
    ],
    "abstract": "Video generators and video-based world models can synthesize plausible visual trajectories, but long-horizon procedural tasks require generation to adapt to what has actually been produced. A model must determine the next action from its generated state, execute that action, and recognize when the task is complete. Open-loop generation cannot adapt to execution outcomes, while existing closed-loop systems often rely on pretrained executors or indirect verification. This leaves a gap between deciding an action and successfully realizing it. We formulate procedural video generation as \\emph{closed-loop task execution in visual world space} and introduce \\textbf{WorldGuide}. Given only an initial image and a task goal, WorldGuide predicts an atomic action, generates its corresponding video clip, and uses the generated result to select the next action or terminate. The Planner and Executor are trained on the same step-level procedural demonstrations: the Planner learns to predict the next atomic action or task completion from visual progress, while the Executor is directly trained to realize the predicted actions. Hierarchical visual memory maintains state across long-horizon execution with bounded history token cost. Due to the lack of step-level action-video supervision for joint planner-executor training, we introduce \\textbf{WorldGuide Bench}: approximately 59K step-annotated videos across 245 tasks and 27 procedural categories. WorldGuide achieves a 33.33\\% Task Success on \\textbf{WorldGuide-Bench}, compared with 29.90\\% for the strong recent video model MiniMax-H3, even though MiniMax-H3 receives reference action plans, and achieves 47.69\\% on \\textbf{VideoCraft-Bench} compared with 32.73\\% for MiniMax-H3 under goal-only conditioning. These results demonstrate the importance of coupling planning with learned execution for goal-directed procedural video generation.",
    "published": "2026-10-08T17:59:31Z",
    "updated": "2026-10-08T17:59:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12459"
  },
  {
    "id": "2610.12458",
    "title": "OmniCapBench: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning",
    "authors": [
      "Zhongyu Yang",
      "Jiale Tao",
      "Ruitao Chen",
      "Zuhao Yang",
      "Yingfang Yuan",
      "Xueliang Zhao",
      "Auden",
      "Kai Wang",
      "Shuai Shao",
      "Biao Wang",
      "Steve Yves",
      "Qinglin Lu"
    ],
    "abstract": "Multimodal large language models (MLLMs) are rapidly evolving toward continuous audio--visual reasoning, creating an urgent need for evaluations that expose their capability limits. Audio--visual captioning is an ideal diagnostic task, yet current benchmarks face a coupled trade-off: whole-caption scores provide coverage without localization, local probes provide localization without coverage, and unconstrained LLM judges introduce instability. We introduce OmniCapBench (Omni-Video Caption Benchmark), a benchmark that reframes audio--visual caption evaluation as a deep-structured diagnostic framework. OmniCapBench shifts the prediction target from free-form text to sets of atomic, verifiable evaluation units across three tracks: entity references, visual shots, and audio events, enabling reliable scoring with deterministic constraint checks and localized LLM-based semantic comparisons. With 786 densely annotated videos, OmniCapBench effectively distinguishes MLLM perception errors, including temporal grounding failures, identity drift, cross-modal misalignment, and hallucinated descriptions. Evaluating frontier MLLMs reveals strong local perception but weak long-horizon audio--visual reasoning, particularly in identity drift and cross-modal misalignment, providing a fine-grained roadmap for omnimodal development.",
    "published": "2026-10-08T17:59:21Z",
    "updated": "2026-10-08T17:59:21Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12458"
  },
  {
    "id": "2610.12455",
    "title": "Hybrid Cinematography: Previsualizing and Managing Hallucination Risk in Generative Video Reshooting",
    "authors": [
      "Nhan",
      "Tran",
      "Neal Wadhwa",
      "Abe Davis",
      "Stefan Stojanov"
    ],
    "abstract": "On a film set, the camera move is committed during a take. Generative video reshooting lets filmmakers change it afterward, but may require hallucinating unrecorded content, a gap sometimes discovered only after leaving the set. We present Hybrid Cinematography, a workflow that bridges physical capture and generative reshooting to manage hallucination risk while filmmakers can still act on it. Using an editable 3D shot plan and a proxy of the take, our previsualization evaluates hallucination risk in real time. Seeing where the take lacks support, filmmakers can iteratively adjust the plan, explore moves that balance capture and generation, shoot guided pickups, or knowingly accept hallucination. We demonstrate the workflow through a mobile augmented reality application for on-set planning, capture, and review, and an offline pipeline for existing video. A study with experienced filmmakers reveals how previsualizing risk informs camera decisions and exposes tensions between creative intent and generative hallucination.",
    "published": "2026-10-08T17:59:11Z",
    "updated": "2026-10-08T17:59:11Z",
    "categories": [
      "cs.HC",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12455"
  },
  {
    "id": "2610.12452",
    "title": "BrickBench: Evaluating Agentic Brick Design",
    "authors": [
      "Peter Kulits",
      "Yiqing Xu",
      "R. Kenny Jones",
      "Cordelia Schmid",
      "Jiajun Wu"
    ],
    "abstract": "We propose BrickBench, a benchmark for agentic text-conditioned LEGO-set design. Given a prompt, an agent is tasked with producing an assembly that not only satisfies semantic and design criteria, but that can also be physically built. To do so, it must select parts from a discrete library and reason jointly about local and global constraints. We score validity, alignment, and design across three settings that vary in scale and part availability. We provide BrickAgent, an environment for coding agents to construct, inspect, and validate their designs. We find that leading agents largely satisfy verifiable physical and semantic requirements, but fall short of human designs. We release our benchmark and environment at http://www.brickben.ch",
    "published": "2026-10-08T17:58:56Z",
    "updated": "2026-10-08T17:58:56Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.12452"
  },
  {
    "id": "2610.12451",
    "title": "VersaCamVLA: Camera-Configurable VLA Policies for Robotic Manipulation",
    "authors": [
      "Boyao Han",
      "Chen Shi",
      "Jingjing Qian",
      "ZhuoTan Tian",
      "Li Jiang"
    ],
    "abstract": "Vision-Language-Action (VLA) models have emerged as powerful foundations for robotic manipulation, but their reliance on fixed camera configurations during training makes them brittle to changes in camera count or pose during deployment. To overcome these limitations, we propose VersaCamVLA, a camera-configurable framework that decouples camera-set representation from action learning. VersaCamVLA learns a unified scene-token interface that maps an arbitrary, variable set of posed RGB views into fixed-size latent scene tokens. This is achieved via multi-signal target-view prediction and Wrist-Augmented Pose Sampling (WAPS), which leverages natural wrist-camera motion for free pose diversity. At deployment, a lightweight spatial encoder injects these compact scene tokens into a pretrained base VLA as a supplementary visual condition, requiring no explicit 3D sensing or novel-view rendering. Experiments on RoboTwin, LIBERO, and a real-robot platform demonstrate that VersaCamVLA consistently outperforms prior VLA methods and direct multi-view baselines, maintaining robust performance across varying camera counts and unseen camera poses.",
    "published": "2026-10-08T17:58:47Z",
    "updated": "2026-10-08T17:58:47Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.12451"
  },
  {
    "id": "2610.11303",
    "title": "Efficient Multi-Granularity Knowledge Transfer for Radiology Report Generation",
    "authors": [
      "Xubin Zhong",
      "Zheyu Zhang",
      "Wenjian Qin",
      "Ning Wen"
    ],
    "abstract": "Radiology report generation can automatically generate clinical descriptions from X-ray images, thereby significantly improving the efficiency of radiologists. This task is challenging because it requires medical knowledge to accurately identify diseases and describe them in a professional manner. However, existing methods often overlook the importance of enhancing medical knowledge in describing pivotal areas, a capability that requires models to effectively extract and aggregate knowledge at multiple levels of granularity. Accordingly, we herein propose a novel and compact Efficient Multi-Granularity Knowledge Transfer (\\textbf{EMGKT}) method to address the above issues. First, we encode global knowledge embeddings using a medical vision-language model, which provides contextual medical knowledge. Moreover, we devise a novel Fine-Grained Knowledge Distillation (FGKD) training task which efficiently extract fine-grained knowledge. Specifically, the FGKD training task contains teacher embeddings and student embeddings. Teacher embeddings are encoded using extra priors; while student embeddings are learned from the teacher embeddings through knowledge distillation. During inference, the student embeddings are used to enhance fine-grained knowledge while the teacher embeddings are discarded, resulting in negligible computational costs and no need for extra priors. Finally, we further develop a mixture of disease diagnosis expert classifiers to enhance knowledge extraction. The classifiers are initialized using disease embeddings and are modeled as different experts to address various granularity features. Notably, \\textbf{EMGKT} can be efficiently applied to most existing methods. Extensive experiments are conducted on two widely-used public datasets and various baselines, which demonstrates the effectiveness and transferability of \\textbf{EMGKT}.",
    "published": "2026-10-08T06:09:28Z",
    "updated": "2026-10-08T06:09:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11303"
  },
  {
    "id": "2610.11302",
    "title": "iCATS: Fast Video Generation via Interaction-Aware Sparse Attention and Timestep-Adaptive Sparsity",
    "authors": [
      "Chengfeng Han",
      "Baole Ai",
      "Xianlu Bian",
      "Jie Yao",
      "Zilong Huang",
      "Ang Wang",
      "Dandan Ding"
    ],
    "abstract": "Training-free sparse attention offers a practical acceleration solution to Diffusion Transformers (DiTs) via reducing computations without fine-tuning. It typically involves estimating the importance of query-key regions and deriving sparse masks to compute only the important candidates, which inevitably introduces approximation errors that may degrade generation quality. To better balance the efficiency-quality trade-off, we propose iCATS, integrating improved importance estimation and sparse mask construction with an efficient hardware execution strategy. Specifically, for importance estimation, unlike previous works that perform independent clustering over query and key tokens based on feature similarity to estimate attention scores, iCATS demonstrates that clustering based on query-key dot-product interactions is more accurate and further reformulates this objective as a simple quadratic form for low-cost computation. For sparse mask construction, instead of using a fixed top-p rule, we observe that tolerance to sparse approximation errors varies across denoising timesteps and therefore introduce an SNR-guided sparsity schedule to adjust sparsity dynamically, leading to higher accuracy. Finally, for hardware execution, we devise a tail-merging strategy to reduce padding overhead caused by irregular cluster sizes, improving GPU kernel utilization. Extensive experiments show that iCATS achieves $2.03\\times$ acceleration with 31.017 dB PSNR on HunyuanVideo-T2V-13B and $1.55\\times$ acceleration with 29.301 dB PSNR on Wan2.1-T2V-14B, delivering a state-of-the-art efficiency-quality trade-off.",
    "published": "2026-10-08T06:09:04Z",
    "updated": "2026-10-08T06:09:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11302"
  },
  {
    "id": "2610.11300",
    "title": "Characterizing Overconfident Failure in LLM-Based Code Generation",
    "authors": [
      "Ravishka Rathnasuriya",
      "Wei Yang"
    ],
    "abstract": "Large language models (LLMs) are increasingly used for automated code generation, but generated programs can appear syntactically plausible while still failing execution-based correctness checks. Existing validation methods, such as testing and program analysis, remain essential but are often incomplete, costly, or applied only after generation. Model-derived uncertainty is therefore a natural early reliability signal. This paper studies the dilemma of overconfidence in code LLMs where incorrect programs are often generated with token-level confidence comparable to correct programs. We study this dilemma across four open-source code models and three execution-based benchmarks. Our analysis begins by investigating whether existing uncertainty metrics provide reliable proxies for execution correctness in code generation. We then characterize overconfidence at both global and local token levels, asking whether incorrect programs remain indistinguishable from correct ones under confidence and entropy summaries, including selective generation and the limits of instruction tuning. Finally, we evaluate whether common mitigation strategies reduce this failure mode. Our study yields four findings. First, existing uncertainty signals provide only partial and model-dependent evidence of execution failure. Second, overconfidence persists at both program and token levels, and uncertainty-based selection does not consistently improve accepted-set accuracy. Third, instruction tuning can increase certainty on failing generations without consistently improving correctness discrimination. Fourth, common mitigation techniques improve specific aspects of reliability but do not reliably resolve overconfident failure. Our exploratory latent analysis suggests that hidden representations may encode correctness-related signals that output confidence does not expose.",
    "published": "2026-10-08T06:07:44Z",
    "updated": "2026-10-08T06:07:44Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11300"
  },
  {
    "id": "2610.11299",
    "title": "DuplexAgent-RSI: Recursive Harness Improvement for Full-Duplex Voice Agent Collaboration",
    "authors": [
      "Yingda Shen",
      "Yuxiang Wang",
      "Kunyu Feng",
      "Qinke Ni",
      "Jiaqi Li",
      "Minghao Hsu",
      "Junan Zhang",
      "Dekun Chen",
      "Yutong Bian",
      "Zhizheng Wu"
    ],
    "abstract": "Voice agents are converging on a collaboration pattern: a full-duplex interaction model stays on the live channel as the entry to the conversation, while search, reasoning, and coding are handled through asynchronous delegation. A duplex model supports continuous listening and speaking, but complex reasoning and tool use may exceed its capabilities. A coding agent can plan and execute extended tasks, but its sequential interface is a poor fit for live conversation. Combining them requires a harness that coordinates task acceptance, progress, cancellation, replacement, and result delivery while keeping the conversation responsive. Existing harnesses often rely on coupled heuristics, making them difficult to improve systematically from evidence. We present DuplexAgent, a full-duplex collaboration system whose harness expresses this workflow as six editable modules, and Duplex-Harness-RSI, a closed loop that revises them from interaction traces. A simulator automatically generates timed test conversations, runs the system, and produces failure traces that identify the collaboration modules requiring repair. Reasoning LLMs and coding agents in the delegation pool also serve the improvement loop: the Exam Planner selects the next tests from observed weaknesses and the repair archive, and the Harness Editor proposes targeted module changes. The capabilities that serve the user thus also improve the system's coordination. Experiments on intelligence, agentic, and duplex benchmarks show that DuplexAgent combines continuous interaction with difficult reasoning and complex task execution, achieving stronger spoken-knowledge and executable-tool scores than the compared delegated systems while maintaining strong interruption response. A harness ablation further shows that this modular, verifiable loop outperforms the initial harness and repeated editing that lacks its diagnosis and repair archive.",
    "published": "2026-10-08T06:06:42Z",
    "updated": "2026-10-08T06:06:42Z",
    "categories": [
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.11299"
  },
  {
    "id": "2610.11296",
    "title": "Spatial-Frequency-Aware Implicit Neural Representation of Multidimensional Signals via MLP-KAN Fusion",
    "authors": [
      "Wen Yan",
      "Ligen Shi",
      "Jun Qiu",
      "Haimiao Zhang",
      "Lina Wu",
      "Chang Liu"
    ],
    "abstract": "Implicit Neural Representations (INRs) have emerged as a compelling paradigm for modeling multidimensional signals by mapping continuous coordinates to signal values. However, Multi-Layer Perceptrons (MLP)-based INRs inherently suffer from spectral bias, which favors low-frequency components and suppresses the reconstruction of essential high-frequency details. While existing techniques, such as Fourier feature mappings, mitigate this issue, they often rely on sensitive manual tuning and are prone to spectral artifacts. In this paper, we propose a spatial-frequency-aware INR framework that combines an MLP branch with a Kolmogorov-Arnold network (KAN) branch for complementary frequency-oriented modeling. The MLP branch provides a low-frequency-oriented representation of smooth structures, whereas the KAN branch complements localized variations and fine details. To coordinate the two branches, we integrate the discrete wavelet transform (DWT) and inverse discrete wavelet transform (IDWT) into the output fusion stage. The outputs of the two branches are decomposed into wavelet coefficients, and the corresponding coefficients are additively fused before inverse wavelet reconstruction. A wavelet-domain band-separation regularization further penalizes high-frequency responses in the MLP branch and low-frequency responses in the KAN branch, thereby encouraging complementary frequency-oriented behavior. Experiments on 1D signals, 2D images, 3D volumes and signed distance functions, videos, and 4D light-fields demonstrate the applicability of the proposed representation across the evaluated signal modalities. Results demonstrate improved reconstruction fidelity across the evaluated signal modalities.",
    "published": "2026-10-08T06:03:29Z",
    "updated": "2026-10-08T06:03:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11296"
  },
  {
    "id": "2610.11294",
    "title": "ORDO: Operation-level Round-aware Dynamic Ordering for MIP Presolve",
    "authors": [
      "Zehuan Chen",
      "Chunhe Song"
    ],
    "abstract": "Presolve strongly affects mixed-integer programming (MIP) performance, yet learning-based methods only optimize parameter configurations and cannot express the non-commutative temporal dependencies among actions, whose default order is nearly unique on most domains, yet functionally necessary: artificially shuffling the order of the same sequence inflates the tail of the solve-time distribution by up to several-fold. We recast presolve planning as autoregressive sequence generation over a unified atomic action space, moving the decision object to action sequences; we call this framework ORDO---Operation-level Round-aware Dynamic Ordering for MIP Presolve. Its payoff is cross-domain generalization: on multiple unseen domains it attains end-to-end zero-shot speedup---to our knowledge the first for presolve action sequences---varying by domain and not explained by corpus richness, the strongest domain reaching the largest speedup once racing is added. Deployment uses sequence racing, in which candidate sequences run concurrently and the winner is kept, enabled by an execution-and-observation facility, added by modifying the SCIP source, that injects sequences along the native path and records which actions actually execute and in which round.",
    "published": "2026-10-08T05:59:52Z",
    "updated": "2026-10-08T05:59:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11294"
  },
  {
    "id": "2610.11289",
    "title": "Open-ended Scientific Discovery with Possibilistic Reasoning",
    "authors": [
      "Anita Yang",
      "Siu Lun Chau",
      "Tomoya Wakayama",
      "Krikamol Muandet",
      "Masaki Adachi"
    ],
    "abstract": "Autonomous scientific discovery with LLMs requires generating and testing hypotheses adaptively as evidence accumulates while maintaining statistical validity. Existing anytime-valid methods can handle data-dependent hypotheses, but open-ended discovery poses a deeper challenge: the best discovered hypothesis may still be the best of a bad lot, with better explanations yet undiscovered, while even background knowledge such as physical laws may require revision in light of new findings. In response, we formalize the problem as Abductive Autonomous Scientific Discovery (AASD) using possibility theory. We introduce abductive utility, a computable measure of discovery progress, and possibility frontier search, the first algorithm for AASD, which maintains anytime validity and achieves $\\varepsilon$-optimal abductive utility asymptotically under suitable conditions. Experiments on synthetic and real-world scientific-discovery tasks show strong performance.",
    "published": "2026-10-08T05:52:14Z",
    "updated": "2026-10-08T05:52:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11289"
  },
  {
    "id": "2610.11287",
    "title": "REMORY: Learning Residual Memory for Context Compaction",
    "authors": [
      "Hanchen Xia",
      "Baoyou Chen",
      "Yutang Ge",
      "Naihao Deng",
      "Senqiao Yang",
      "Zilong Dong",
      "Weihao Yuan",
      "Siyu Zhu"
    ],
    "abstract": "Long-horizon agents compact their history to continue within a finite context window, but a textual summary alone may not support every subsequent decision. We introduce REMORY, a neural memory network that supplements the summary with a bounded sequence of soft memory tokens. Given the history and summary, the network learns to generate tokens that help a frozen LLM approximate the continuation it would produce with the full history. The tokens are conditioned on the summary and appended after it, forming an analogue of a residual connection along the sequence dimension. On SummHay, REMORY improves source attribution at nearly unchanged insight coverage and approaches the full-context joint score using only 5.2% of the input positions. Across long-horizon agent benchmarks, Qwen3.8-27B and GLM-5.3-Flash show consistent gains with residual memory. Both models also exhibit substantially fewer repeated tool outputs and tool errors on BrowseComp and Terminal-Bench 2.1.",
    "published": "2026-10-08T05:50:50Z",
    "updated": "2026-10-08T05:50:50Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11287"
  },
  {
    "id": "2610.11286",
    "title": "When Scene Text Hijacks the Scene: Uncovering, Exploiting, and Mitigating Rendered-Text Semantic Leakage in Image Generation Models",
    "authors": [
      "Feifei Li",
      "Runjie Wang",
      "Xiaohan Zhang",
      "Zhenxing Qian",
      "Mi Wen",
      "Mi Zhang"
    ],
    "abstract": "The reliability and accountability of image generative models (IGMs) are essential for building responsible and trustworthy AI systems. Recent IGMs, such as Nano Banana and GPT-Image, now support complex instruction following, realistic image synthesis, and controllable scene-text rendering. As these capabilities expand, safety analysis must also account for new control channels introduced by complex prompts. In this work, we study rendered-text semantic leakage, a largely overlooked phenomenon in open-domain text rendering. Although rendered text is intended to serve as a local visual constraint that should be reproduced verbatim in the generated image, it also carries linguistic semantics that may be interpreted by the model as part of the input instruction. This makes rendered text a potential semantic control channel whose safety implications remain insufficiently understood. We systematically characterize this phenomenon by decoupling the main visual prompt from the rendered text and measuring their individual and compositional effects on generated images. We quantify semantic leakage and rendering fidelity, and further analyze how leakage emerges from intermediate model evidence. We then show that harmful semantics embedded in scene text can persist through LLM-based prompt enhancement pipelines and steer non-text image regions, even when the main visual prompt remains benign. Finally, we propose a preliminary mitigation approach that reduces unsafe semantic transfer from rendered text to non-text regions while preserving the intended text-rendering behavior on FLUX-2-dev. Our findings reveal rendered text as a dual-use carrier of visible data and latent semantics, exposing a text-centric cross-modal attack surface in modern IGMs.",
    "published": "2026-10-08T05:50:40Z",
    "updated": "2026-10-08T05:50:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11286"
  },
  {
    "id": "2610.11284",
    "title": "DynaTE: Accelerating Diffusion LLMs via Dynamic Token Execution",
    "authors": [
      "Minghan Jiang",
      "Jiayi Wang",
      "Shuaiting Li",
      "Haibin Shen",
      "Kejie Huang"
    ],
    "abstract": "Diffusion-based LLMs (dLLMs) have recently emerged as a promising alternative to autoregressive (AR) LLMs by enabling bidirectional parallel refinement, alleviating the sequential decoding bottleneck of AR generation. However, their parallel iterative refinement mismatches AR accelerators optimized for sequential decoding and their discrete token generation differs from DiT accelerators designed for continuous denoising. Recent dLLM accelerators have explored workload-specific optimizations to reduce vocabulary processing overhead and redundant computation across denoising iterations. However, these approaches retain all tokens in parallel execution, despite varying token refinement utility and execution requirements. This paper presents DynaTE, a hardware--software co-design architecture that dynamically adapts accelerator execution to evolving token states during dLLM decoding. DynaTE first enables adaptive token execution by skipping low-utility token computation, while a dimension-reconfigurable PE array maintains high utilization under varying active-token patterns. Second, DynaTE exploits dynamic token dependencies through FLDD to refine a small number of locally dependent tokens within the current iteration, reducing the overall number of denoising iterations, while a Merge--Split--Merge dataflow hides the resulting serial overhead. Third, a streaming vocabulary engine interleaves multiple token streams from the LM head to accommodate irregular output variations caused by selective token computation and uneven vocabulary-selection demands. Evaluated on two representative dLLMs, DynaTE achieves 2.05--2.78$\\times$ speedup and 2.99--3.93$\\times$ higher energy efficiency over state-of-the-art dLLM accelerators, while delivering 2.55$\\times$ speedup and 6.07$\\times$ higher energy efficiency over Jetson AGX Orin.",
    "published": "2026-10-08T05:49:50Z",
    "updated": "2026-10-08T05:49:50Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11284"
  },
  {
    "id": "2610.11283",
    "title": "Being-M0.7: A Latent World-Action Model for Humanoid Robots",
    "authors": [
      "Junpeng Yue",
      "Boyuan Li",
      "Yuxuan Wang",
      "Zepeng Wang",
      "Yuhui Fu",
      "Feiyang Xie",
      "Yu Zhang",
      "Jing Zhang",
      "Xianqi Zhang",
      "Weibo Li",
      "Xiaofei Zheng",
      "Yuming Fang",
      "Jiangxing Wang",
      "Zongqing Lu"
    ],
    "abstract": "Humanoid loco-manipulation requires coordinated locomotion and manipulation informed by future scene evolution and whole-body motion, yet learning these capabilities is constrained by scarce robot demonstrations. Human video and motion datasets offer scalable supervision, but many contain only video or motion rather than paired video-motion data. Moreover, human motion does not directly specify executable robot actions. We present Being-M0.7, a latent world-action model that transfers visual-motion priors learned from mixed-modality human data to humanoid control through pre-training, robot mid-training, and action post-training. We curate a corpus from more than 10,000 hours of raw human-centric data, integrating video-only, motion-only, and paired video-motion streams to learn complementary visual dynamics and whole-body kinematic structure. Joint prediction of future latent visual states and motion encourages visual representations to encode future kinematics. Robot mid-training adapts this coarse-grained prior to robot viewpoints and body dynamics. During action post-training, an action expert combines visual predictive representations from the frozen, adapted prior with current images and proprioception through gated cross-attention, grounding predictive context in executable whole-body commands. Being-M0.7 achieves the highest aggregate success rate among the compared baselines on SIMPLE and matches the strongest baseline on real-world Unitree G1 loco-manipulation tasks.",
    "published": "2026-10-08T05:49:24Z",
    "updated": "2026-10-08T05:49:24Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11283"
  },
  {
    "id": "2610.11281",
    "title": "How to post-train on a surrogate: Envelope sampling mitigates reward hacking",
    "authors": [
      "Sanjit Dandapanthula",
      "Shuvom Sadhuka",
      "Samir Khan",
      "Michael Oberst",
      "Aaditya Ramdas",
      "Alexandra Chouldechova"
    ],
    "abstract": "Large language models (LLMs) are commonly post-trained against LLM judges and other cheap surrogates because the true reward, such as human preference, is too expensive to query at scale. This practice often leads to reward hacking, where reinforcement learning against a miscalibrated surrogate leads to undesirable side effects. In this work, we study a setting in which a small number $n$ of model outputs are annotated with ground-truth labels (e.g., from expert review) and used to recalibrate the LLM judge before optimizing against it. Prior approaches to judge recalibration are costly or heuristic, and it is known that on-policy sampling fails when the surrogate is miscalibrated on a rare set of outputs. In this work, we propose envelope sampling, a theoretically-grounded method for judge recalibration that seeks to minimize an upper bound on the regret of the post-trained model under the assumption that the human reward and re-calibrated reward lie in an $L^2$ ball around the judge. We give practical algorithms to sample from the envelope by rejection or by fine-tuning against a modified reward, and experiments on clinical note generation and on a controlled sycophancy task show that recalibrating on envelope samples mitigates reward hacking where recalibrating on base-model samples does not.",
    "published": "2026-10-08T05:48:31Z",
    "updated": "2026-10-08T05:48:31Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ME"
    ],
    "url": "https://arxiv.org/abs/2610.11281"
  },
  {
    "id": "2610.09848",
    "title": "Stream-Based Active Learning with Cooperative Neural Networks for Data-Efficient Partial Inverse Design: An Automotive Glass Run Channel Case Study",
    "authors": [
      "Agung Nugraha",
      "Hyerin Kwon",
      "Heungjun Im",
      "Gian Antariksa",
      "Jihwan Lee"
    ],
    "abstract": "Inverse design in engineering often runs into a simple problem. Each labeled training sample must be produced through expensive simulation, so building a large dataset is slow and costly. This study addresses that problem for partial inverse design, where only some design variables are specified and the rest must be inferred to reach a target performance value. We propose CoNN-AL, a framework for data-efficient partial inverse design that adds stream-based active learning to the Cooperative Neural Network with Denoising Autoencoder (CoNN-DAE). The model estimates predictive uncertainty through Monte Carlo dropout and uses it to decide, in real time, which incoming candidate samples are worth labeling, so the limited labeling budget is spent on the most informative designs. We validate the framework on a real-world automotive glass run channel dataset of more than 900,000 unique simulated designs. With only 20,000 actively selected labels, about 2.3% of the training pool, CoNN-AL reaches R-squared values of 0.967 to 0.982 across all missing-variable levels, approaching the upper-bound models trained on far more data. It reaches R-squared of at least 0.95 with 30 to 40% fewer labels than random sampling at the more difficult missing-variable levels and, at the most challenging level, is the only strategy in this study to reach R-squared of 0.98. Together with this work, we publicly release the dataset to support future research on data-driven design.",
    "published": "2026-10-07T11:07:22Z",
    "updated": "2026-10-07T11:07:22Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09848"
  },
  {
    "id": "2610.09844",
    "title": "For Those Who Believe in Faithfulness: Optimizing the Area Under Insertion and Deletion Curves for Ranking Relative Feature Importance",
    "authors": [
      "Bjørn Leth Møller",
      "Bulat Ibragimov",
      "Christian Igel"
    ],
    "abstract": "The adoption of machine learning for socially relevant tasks requires effective explainable artificial intelligence (XAI) methods to better understand the behavior of machine learning models. Attribution methods are a popular XAI approach in which input-output relationships are characterized by heat maps that reflect the relative importance of input features for a particular prediction. The quality of such maps is often assessed by measuring faithfulness based on the area under insertion and deletion curves, which measures changes in the model output as features are added and removed. In this study, we derive an objective function from this notion of faithfulness and a way to approximate its gradient. We establish the connection between insertion curves and top-$k$ feature selection, which leads to a loss function measuring the quality of attributions. Randomization of the loss allows us to efficiently approximate its gradient. To show the effectiveness of the general approach, we combine the loss function with the neural explanation mask framework. The resulting method, termed Ra-NEM, can be used with any differentiable model without affecting the model's performance. Experiments demonstrate that Ra-NEM provides accurate attributions robustly and efficiently. Compared to other algorithms, the attributions have not only higher faithfulness but also perform well in terms of other XAI metrics. The high inference speed of Ra-NEM makes the method suitable for online applications. The code is available online: https://github.com/baerminator/Ra_Nem",
    "published": "2026-10-07T11:05:08Z",
    "updated": "2026-10-07T11:05:08Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09844"
  },
  {
    "id": "2610.09842",
    "title": "Empowering Users in Graph Rule Mining via Large Language Models",
    "authors": [
      "Francesco Cambria",
      "Francesco Invernici",
      "Andrea Colombo",
      "Anna Bernasconi"
    ],
    "abstract": "In the era of interconnected data, graphs have emerged as an effective abstraction for modeling complex systems in an intuitive format, especially with the rise of Property Graphs, which offer an intuitive and scalable way of navigating non-intuitive structures. In this context, graph mining techniques have been developed for testing complex graph-based rules, as the MINE GRAPH RULE operator, which, however, require users to have prior expertise both in graph theory and formal query language. In this work, we propose to bridge the gap between users and the graph-association rule-mining process by showing how Large Language Models (LLMs) can be easily prompted to formulate, refine, and interpret complex relational rules, directly producing MINE GRAPH RULE queries.",
    "published": "2026-10-07T11:04:33Z",
    "updated": "2026-10-07T11:04:33Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.09842"
  },
  {
    "id": "2610.09841",
    "title": "ORCA: Hunting Compositional Failures in Text-to-Image Diffusion",
    "authors": [
      "Arshia Hemmat",
      "Amirhossein Vahidi",
      "Amitis Shidani",
      "Mohammad Vali Sanian",
      "Hesam Asadollahzadeh",
      "Aryan Yazdan Parast",
      "Mohammad Lotfollahi"
    ],
    "abstract": "Text-to-image diffusion models fail predictably on compositional prompts: attributes bind to the wrong objects, spatial relations invert, and multi-object scenes lose count. Recent architectures already augment CLIP with a T5 encoder precisely because CLIP's contrastive embedding loses compositional structure, yet these failures persist. We argue the binding problem is therefore not one of missing information but of misaligned information: a text encoder preserves compositional structure, but in a representation space shaped by language modelling rather than vision, and the denoising objective does not directly reward aligning the two. We show this correspondence can be supplied as an explicit training signal, that the relevant cross-modal information is concentrated in a low-rank subspace of self-supervised visual features, and that supplying it can be folded into diffusion training as a single auxiliary loss. Our method, ORCA (Orthogonal Residual Compositional Alignment), aligns the latent of a diffusion transformer with a low-rank target derived from a frozen visual encoder, through a predictor whose orthogonal basis is parameterised by a learned residual between T5 and CLIP embeddings, which provides a prompt-dependent signal for selecting the visual readout subspace. We prove that the cross-modal information recoverable at a given rank is bounded by the spectral mass of the visual encoder's covariance in the top components. Across three diffusion-transformer backbones (DiT-B/2, DiT-L/2, U-ViT-L), ORCA improves FID and GenEval over both vanilla and REPA baselines at zero inference-time cost; on DiT-L/2 it reaches FID 16.65 and GenEval 0.291 at 200K steps, exceeding the strongest 400K baseline at half the training cost, with the largest gains concentrated on attribute binding, spatial relations, and multi-object prompts.",
    "published": "2026-10-07T11:03:58Z",
    "updated": "2026-10-07T11:03:58Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09841"
  },
  {
    "id": "2610.09838",
    "title": "Fully Interpretable Minimal Transformers: From Geometry to Algorithm",
    "authors": [
      "Raneem Mahajne",
      "Toviah Moldwin"
    ],
    "abstract": "We present a framework for building and interpreting minimal transformer models. By constraining a transformer's embedding dimension and head size to 2, we enable full two-dimensional visualization of its internal representations. Embeddings, query/key/value transforms, attention outputs, residual streams, and decision boundaries can all be seen directly. Our central claim is that the learned geometry implies an algorithm; the arrangement of points and boundaries in R^2 can be read as a step-by-step procedure. We train a transformer on a simple task where it must produce the most recently observed even number whenever the '+' operator appears in a sequence of digits. Once trained, we visually walk through every step of the transformer's computation. We show how the model embeds the tokens and their respective positions in the sequence, transforms them via the Q, K, and V matrices, uses the dot product between the Q and K representations to form the attention matrix, and uses the attention matrix to select values that move the representation of each input token to the region of the domain of the output layer that will correctly predict the next token. We introduce a suite of interpretability visualizations that make the algorithmic interpretation of this procedure explicit. Our framework offers a pedagogical and experimental testbed to explore how transformers use informational geometry to implement next-token prediction.",
    "published": "2026-10-07T11:01:54Z",
    "updated": "2026-10-07T11:01:54Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09838"
  },
  {
    "id": "2610.09835",
    "title": "A Deafening Silence: Catastrophic Forgetting Lives in the Output Embeddings of Tokens the Data Never Speaks",
    "authors": [
      "Jonghyun Han",
      "Younghoon Song",
      "Jongyoul Park"
    ],
    "abstract": "Continual pre-training and fine-tuning in Large Language Models (LLMs) inevitably induce catastrophic forgetting, typically mitigated by replay using often-inaccessible original data. In this data-free regime, we analyze where forgetting occurs and why. Systematic parameter freezing across five settings up to 1.4B reveals that forgetting concentrates selectively in the output embeddings of tokens rarely seen in the new corpus, whereas the same sqrt(v-hat) band of the body is inert and new learning resides elsewhere. This localization is governed by the vocabulary deficiency of the corpus rather than the training mode, allowing pre-retraining risk ranking from token counts alone within a fixed base model. Mechanistically, absent tokens receive persistent one-sided softmax gradients that Adam's second-moment (sqrt(v-hat)) normalization amplifies into full-sized updates. We therefore propose an intervention: raising Adam's epsilon exclusively for the output projection during training. Across eight settings spanning 160M to 12B parameters and four model families, this removes 39.4% to 67.9% of forgetting across all seven stable configurations without degrading target learning or requiring per-model tuning. The defense combines additively or better with replay (79.8% on Qwen/Korean) and rescues released-head LoRA from a 23-fold forgetting surge. Because post-hoc editing of the drifted rows recovers under 5% of forgetting, the intervention must operate during training. Our findings indicate that a single-line optimizer adjustment may serve as the primary defense against catastrophic forgetting where the corpus starves the vocabulary.",
    "published": "2026-10-07T11:01:01Z",
    "updated": "2026-10-07T11:01:01Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09835"
  },
  {
    "id": "2610.09832",
    "title": "SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles",
    "authors": [
      "Yuyao Ge",
      "Yiwei Wang",
      "Yuchen He",
      "Baolong Bi",
      "Lingrui Mei",
      "Jiayu Yao",
      "Lizhe Chen",
      "Shenghua Liu"
    ],
    "abstract": "Memory-augmented reinforcement learning strengthens LLM agents' ability to solve complex long-horizon tasks. Skills are one such form of memory, pairing instructions with an applicability condition over task types. However, retaining every skill indiscriminately as the policy improves lets obsolete or harmful entries accumulate and mislead the agent. We propose SkillForge, an agentic RL method that compiles and evolves the skill library through a fitness-driven skill lifecycle of trial, active, stable, and retired states, so that the skills and the model co-evolve throughout training. A pre-RL evaluation phase first uses the base model's own rollouts to pre-retire low-fitness skills, yielding a filtered library that then seeds supervised fine-tuning. Reinforcement learning takes over from this checkpoint, and at each iteration selective retirement, stabilization, and LLM-guided mutation continue to forge the skill library alongside policy optimization. Across multiple interactive agent benchmarks, SkillForge achieves the highest aggregate success rate, delivering up to 7.8% relative improvement over the strongest baseline while keeping the skill library compact throughout training. We introduce SkillFurnace, a dataset of 5k+ annotated records bundling retirement-filtered SFT trajectories, evolved skill libraries with fitness annotations, and retirement events with human-annotated failure categories to support research on skill quality and lifecycle management.",
    "published": "2026-10-07T10:52:15Z",
    "updated": "2026-10-07T10:52:15Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09832"
  },
  {
    "id": "2610.09830",
    "title": "MOTIF: Person-of-Interest Deepfake Detection Beyond 3DMM Coefficients",
    "authors": [
      "Giovanni Affatato",
      "Sara Mandelli",
      "Paolo Bestagini",
      "Stefano Tubaro"
    ],
    "abstract": "Video deepfakes targeting a specific individual, the Person-of-Interest (POI), are the most harmful ones, and, since a public figure is abundantly recorded, a detector can be built from genuine footage of that individual. Such detectors commonly describe a subject through a 3D Morphable Model (3DMM) and adopt its coefficients as a whole, so which part of that description carries the signal has never been measured. We dissect it, holding the encoder, the training corpus and the enrollment protocol fixed and varying only what the encoder observes. The groups of coefficients prove largely redundant, since the shape block alone recovers almost all the accuracy of the full vector, and their temporal evolution contributes a real but bounded amount. We further show that the dense surface the same fit returns, which these detectors discard, carries identity information that the coefficients do not, and that it helps precisely where they are weakest. We assemble the best configuration into MOTIF, a visual-only detector trained on real videos only, with no manipulated video and no POI-specific data. It improves on both state-of-the-art POI detectors in every dataset and manipulation of our benchmark and at two quality levels. Our experimental code will be released at https://github.com/polimi-ispl/MOTIF.",
    "published": "2026-10-07T10:51:29Z",
    "updated": "2026-10-07T10:51:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09830"
  },
  {
    "id": "2610.09823",
    "title": "UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering in Image Generation",
    "authors": [
      "Deyuan Liu",
      "Yihao Hu",
      "Jingxuan Zhang",
      "Xingying Li",
      "Jun Xie",
      "Jiacheng Liu",
      "Jungang Li",
      "Yu Huang",
      "Xuanyi Liu",
      "Yue Ding",
      "Zecheng Wang",
      "Lei Zhao",
      "Mingda Wang",
      "Zhenglin Cheng",
      "Peng Sun",
      "Tao Lin"
    ],
    "abstract": "Dense visual text requires image generators to reproduce long strings across multiple regions with correct placement and legibility. As short-string rendering improves, evaluation must test sustained performance across more demanding scenes. We introduce UltraText Bench, a bilingual benchmark for prompt-only generation of dense visual text. It contains 432 prompts spanning 24 real-world scene categories and three difficulty levels, split equally between English and Chinese. Each human-reviewed prompt supplies exact strings for four to twelve text regions, paired with structured references for their content, placement, and visual attributes. We use the Q-Judger vision-language model to assess each image against the complete reference, reporting text fidelity, text clarity, spatial quality, and scene quality. Across 24 model configurations, these dimensions reveal different strengths: Z-Image-Turbo gains 3.81 clarity points over Z-Image-Base while losing 14.76 fidelity points under the reported settings. Performance also varies with workload; Qwen-Image-2512's English composite falls from 86.50 at L1 to 42.86 at L3. Ten participants took part in human evaluation of the automatic scores. Repository: https://github.com/LINs-lab/UltraText_Bench.",
    "published": "2026-10-07T10:47:52Z",
    "updated": "2026-10-07T10:47:52Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09823"
  },
  {
    "id": "2610.09821",
    "title": "Efficient 3D Gaussian Head Avatars for Edge Devices",
    "authors": [
      "Umar Farooq",
      "Jean-Yves Guillemaut",
      "Adrian Hilton",
      "Marco Volino"
    ],
    "abstract": "Generative 3D Gaussian head avatars provide high-quality, efficient rendering, but synthesising the Gaussian representation remains computationally expensive, limiting deployment on resource-constrained and edge devices. We introduce an efficient generator architecture for unconditional 3D Gaussian head synthesis, based on a parameter-efficient synthesis block and depth-wise separable convolutions while retaining style-based conditioning. Our architecture reduces generator complexity without requiring model compression or quantisation. Compared with the baseline model, our approach reduces FLOPs by 94%, parameter count by 70%, and model size by 81%, while maintaining competitive generation quality. We further demonstrate practical CPU inference and browser-based execution on mobile devices using ONNX Runtime, enabling 3D Gaussian avatar synthesis without dedicated GPU hardware or application-specific software. In addition to conventional image-quality metrics, we evaluate multi-view consistency, training cost, and deployment performance. Code, trained models, and evaluation tools will be released publicly.",
    "published": "2026-10-07T10:44:25Z",
    "updated": "2026-10-07T10:44:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09821"
  },
  {
    "id": "2610.09818",
    "title": "AI-Driven Urge Regulation Assistant (AURA): Designing Preemptive Smart Wearables for Smoking Cessation",
    "authors": [
      "Antoni Timothy",
      "Lam Fu Yuan Kevin",
      "Hou Junyi",
      "Cheong Wei Soon"
    ],
    "abstract": "Smoking cessation remains a complex self-regulatory challenge, often undermined by cue-triggered cravings arising from habitual, emotional, and social contexts. Existing wearable cessation systems are largely reactive, detecting smoking events only after lapses occur and thus missing the critical window for timely intervention. Guided by cue-reactivity theory and Self-Determination Theory (SDT), we argue that future digital health systems should shift from retrospective feedback toward proactive craving management that supports user autonomy and competence. To inform the design of such systems, we present a formative pilot qualitative study involving semi-structured interviews with 10 smokers and ex-smokers from a multi-ethnic Asian population, a demographic underrepresented in current wearable AI and smoking cessation research. Through an iterative co-design interview process, we examine (1) the barriers and facilitators to smoking cessation and (2) the desired design features of wearable systems targeting cravings before lapses occur. Our findings identify key craving predictors across habitual, emotional, and social dimensions, alongside user-preferred intervention strategies such as social accountability, personalized support, rewards, and just-in-time distraction techniques. Participants also emphasized the importance of trust, privacy, personalization, and non-judgmental interaction styles. These insights directly inform the design of AURA, a novel smartwatch-smartphone ecosystem for proactive craving detection and intervention using commercially available wearable devices.",
    "published": "2026-10-07T10:40:51Z",
    "updated": "2026-10-07T10:40:51Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.09818"
  },
  {
    "id": "2610.09807",
    "title": "Concentration, Not Uncertainty: Why Targeted Synthetic Data Doesn't Help Camouflaged Object Detection",
    "authors": [
      "Akshat Dobhal",
      "Sanjay Singh"
    ],
    "abstract": "Camouflaged object detection requires pixel-accurate masks, but obtaining such annotations is slow and costly, making synthetic training images an attractive alternative. Under a fixed generation budget, however, it remains unclear which real-image regions to target for synthetic data generation. We study an uncertainty-guided generation strategy that clusters the unlabelled real images, identifies clusters on which the model is least certain, allocates synthetic generation toward those clusters, and iteratively retrains the model. Across 103 training runs, uncertainty-based targeting does not outperform random allocation. Five independent controls further show that this null result is not an artifact: targeted training sets are measurably different from random sets, but the difference is explained by concentrating the generation budget rather than by where uncertainty is concentrated, as every concentration rule we test reproduces the effect and, on boundary accuracy, so does aiming at the clusters the model was most certain about. Separately, we find substantial data contamination in CHAMELEON, with 50 of its 76 images duplicated from training data despite the standard overlap check reporting zero overlap. Together, these results show that, under a fixed synthetic-data budget, budget concentration, not uncertainty-based targeting, accounts for the observed training-set effects.",
    "published": "2026-10-07T10:27:54Z",
    "updated": "2026-10-07T10:27:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09807"
  },
  {
    "id": "2610.07996",
    "title": "TICDA: Tabular In-Context Data Attribution",
    "authors": [
      "Yacine Benihaddadene",
      "Milan Bhan",
      "Eliot Dugelay",
      "Mohammed Jawhar",
      "Benjamin Wong",
      "Nicolas Chesneau",
      "Duong Nguyen"
    ],
    "abstract": "Tabular foundation models (TFMs) achieve strong predictive performance by conditioning on labeled demonstrations provided in context, without any parameter update. Yet how individual demonstrations shape a given prediction remains poorly understood. This gap matters in practice: the context is often assembled from whatever labeled data is available, potentially leading to the inclusion of mislabeled, redundant, or low-quality examples that degrade performance. Standard data attribution methods do not transfer to the TFM setting: resampling-based approaches such as DemoShapley require a combinatorial number of forward passes, and gradient-based estimators such as influence functions require computing training point's effect on the model parameters, which in-context learning never updates. We introduce TICDA, a method that measures the influence of every demonstration in the context directly from linear surrogates trained on TFM latent embeddings, in a single forward pass and at negligible cost. We show that TICDA offers the best compromise against competitors across four tasks: detecting labeling errors, curating context to preserve predictive accuracy while lowering inference cost, producing attribution scores that transfer across TFMs, and supporting an acquisition strategy for efficient active learning.",
    "published": "2026-10-06T08:55:27Z",
    "updated": "2026-10-06T08:55:27Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07996"
  },
  {
    "id": "2610.07990",
    "title": "A Broader Look at Model Merging: Rethinking Implicit Regularization Induced by Task Arithmetic",
    "authors": [
      "Sin-Han Yang",
      "Shih-Cheng Huang",
      "Chieh-Yen Lin",
      "Yun-Nung Chen",
      "Shao-Hua Sun",
      "Hung-yi Lee"
    ],
    "abstract": "Model merging aims to build a multi-task model cheaply by combining the weights of individual task-specific models. To perform well across multiple tasks, most existing merging methods use an additional dataset to find the coefficients for the best linear combination of task-specific weight updates. However, we identify an implicit regularization in this standard practice: searching over coefficients restricts the candidate models to a subspace spanned by task-specific weight updates. In this work, we investigate whether this regularization is actually useful. Surprisingly, empirical results show that optimizing merged-model weights without this regularization significantly boosts the performance of common merging methods across multiple architectures, domains, and even in an extremely data-limited scenario where only one instance is available per class. Moreover, directly optimizing the pretrained model weights even outperforms some existing merging methods. Analysis shows that better multi-task weights exist outside the subspace and can be found using multiple methods. We study different strategies for using the additional dataset, discussing their practical use and implications for model merging. Overall, this work calls for revisiting the existing model-merging pipeline, motivating a broader exploration of the weight space and a reconsideration of the implicit regularization induced by task arithmetic.",
    "published": "2026-10-06T08:49:40Z",
    "updated": "2026-10-06T08:49:40Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07990"
  },
  {
    "id": "2610.07987",
    "title": "VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs",
    "authors": [
      "Yuan Feng",
      "Qize Yang",
      "Ruizhe Chen",
      "Sibo Song",
      "Haolin He",
      "Muzhi Zhu",
      "Zihan Liu",
      "Yunfei Chu",
      "Xize Cheng",
      "Yuxuan Wang",
      "Jin Xu",
      "Xike Xie"
    ],
    "abstract": "Multimodal large language models have become the dominant paradigm for visual understanding, but incur substantial costs by encoding inputs into dense, fixed-size patch tokens. However, visual information is unevenly distributed: some regions require fine-grained detail, while others admit compact representations. Downsampling sacrifices this detail, while existing token pruning and adaptive approaches remain limited in content-adaptive granularity, task generalization, and integration with modern MLLMs and serving infrastructure. Overcoming these limitations calls for foundation models that learn, end to end, where-and at what granularity-to allocate visual representations, a native capability we term elastic visual representation weaving. We introduce VisionWeave, establishing this capability in frontier-level MLLMs through large-scale training. It combines two components: a gated spatial pooler constructs coarse-grained representations alongside native fine-grained representations within a shared MRoPE coordinate, while a granularity router learns their content-adaptive allocation. Through self-distillation alone, we validate this capability on Qwen3.5-4B and scale to Qwen3.8-27B with over 30K A100 GPU-hours. Based on Qwen3.8-27B, VisionWeave adaptively adjusts token savings to visual content, saving 43.0% tokens on average while retaining 98.9% native performance across eight benchmarks, versus only 88% performance preserved for token pruning baselines with a fixed 50% savings target. Extensive evaluations confirm robust efficiency-quality trade-offs across diverse tasks, resolutions and video frames. When deployed on SGLang serving engine, our method achieves a 2.3x throughput gain while reducing mean TTFT by 54.4% and mean TPOT by 60.6%. Together, we believe these results position elastic visual weaving as a promising capability for next-generation multimodal models.",
    "published": "2026-10-06T08:48:50Z",
    "updated": "2026-10-06T08:48:50Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.07987"
  },
  {
    "id": "2610.07984",
    "title": "Decide Before You Look: Learning Which Retrieved Memories Deserve Pixels",
    "authors": [
      "Youxing LI"
    ],
    "abstract": "Multimodal assistants answer questions from long-term memories that contain images. After retrieval, each retrieved image reaches the answering model either as pixels, at about a thousand visual tokens per image, or as a stored text proxy that often misses the detail the question asks about. We find that the benefit of pixels usually comes from one or two retrieved memories, and that it can be predicted before the answering model runs, without reading any full-resolution image. In PixelTriage, a plug-in placed after retrieval, a small model that does not generate text reads the dialogue, a short note and a thumbnail of each retrieved memory and predicts how much its pixels would add. It is trained on synthetic memory episodes labeled by a frozen 27B model that answers each question with and without each memory's pixels. With a 7B answering model, PixelTriage lies on the accuracy--cost frontier of M$^3$Exam, DMV and MemEye and uses 11--23\\% of the visual tokens without a significant loss of accuracy. On DMV it answers 2.9 times faster than opening all images. It outperforms retrieval order and uniform down-sizing at equal budgets and transfers to other memory systems and to a 397B answering model.",
    "published": "2026-10-06T08:47:45Z",
    "updated": "2026-10-06T08:47:45Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07984"
  },
  {
    "id": "2610.07982",
    "title": "M3SunAgent: Monocular 3D Spatial Understanding Agent for Metric Depth Estimation and 3D Visual Grounding",
    "authors": [
      "Jinsong Zhang",
      "Kejun Wu",
      "Ming Zhu",
      "Renjie Qiao",
      "Chengtao Cai",
      "Zhengguo Li"
    ],
    "abstract": "Monocular metric depth estimation and 3D visual grounding represent the two complementary cornerstones of monocular 3D spatial understanding (M3Sun), from which the fundamental 3D spatial information required by M3Sun can be acquired. However, these complementary tasks are generally conducted by separate frameworks, which pose challenges of inflexible and unaligned spatial information access for embodied intelligence systems. In this paper, we propose a unified agent for monocular 3D spatial understanding (M3SunAgent) that leverages a large language model (LLM) as a task planner for spatial visual programming, which flexibly generate structured programs and coordinate tools. For instance-level metric depth estimation task, M3SunAgent invokes an object detector tool to locate the target, estimates depth at selected points with a depth estimation tool, and aggregates these predictions into an instance-level depth estimate. We also construct the M3Sun Instance (M3SI) dataset, a benchmark with 2,910 samples for evaluation. For monocular 3D visual grounding task, M3SunAgent uses a vision-language model (VLM) tool to locate the target and output basic spatial attributes, then combines back-projection tool with a dimension-lifting tool to predict its 3D bounding box. Experimental results demonstrate the superior performance of M3SunAgent. Specifically, in evaluations of instance-level monocular metric depth estimation, M3SunAgent achieves the best performance among all compared models, 52.61% of predicted instances are distributed below depth error 0.25 ($δ< 0.25$). In evaluations of monocular 3D visual grounding, M3SunAgent demonstrates overall competitive performance than vision and VLM models, reaching a 3D mean intersection over union (mIoU) of 41.73% and exceeding the state-of-the-art MonoVLM model by 3.62%.",
    "published": "2026-10-06T08:45:25Z",
    "updated": "2026-10-06T08:45:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07982"
  },
  {
    "id": "2610.07979",
    "title": "Learning from Revision Consequences: Hindsight Meta-Experience Distillation for Self-Improving Agents",
    "authors": [
      "Qianhan Feng",
      "Zhongzhen Huang",
      "Yakun Zhu",
      "Xiaofan Zhang",
      "Qi Dou"
    ],
    "abstract": "As agents continuously improve by generating and revising Skills, the process that discovers and refines those Skills becomes a learnable object in its own right. Task-Skills directly act on task execution, whereas Meta-Skills govern how agents discover and improve future Skills; their value therefore emerges through the subsequent search processes they induce. Existing approaches improve Meta-Skills from observed raw Skill-search trajectories and branch outcomes. However, branch performance entangles the effects of the initial discovery state and the Meta-Skill revision that generated the search process, making it difficult to characterize what a particular revision actually changed, and pushing updates toward revisions that benefit from favorable states rather than those that improve the process. We introduce HMED (Hindsight Meta-Experience Distillation), a mechanism for constructing Meta-Experience for self-improving agents. HMED revisits the completed event from which a revision originates and re-executes the incumbent and revised Meta-Skills from the same restored discovery state, so that the changes associated with the revision can be observed under a shared condition. Each comparison is distilled into a Meta-Experience, a structured record that can be reused by future updates, so that even revisions that are not ultimately retained still contribute a learning signal. Across three interactive agent benchmarks and both open-source and closed-source models, HMED consistently improves Skill discovery performance over strong baselines, shifting Meta-Skill learning beyond branch outcomes toward the consequences of changing the improvement process.",
    "published": "2026-10-06T08:43:43Z",
    "updated": "2026-10-06T08:43:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07979"
  },
  {
    "id": "2610.07972",
    "title": "Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces",
    "authors": [
      "Yeji Park",
      "Jaeyun Shim",
      "Taesik Gong"
    ],
    "abstract": "Mobile GUI agents increasingly operate on interfaces influenced by users' histories and preferences, but their reliability across different users remains underexplored. We introduce PAIR (Personalized Application-state Instantiation and Rendering), a pipeline for constructing user-conditioned application states that enables controlled evaluation of the same task across different users. We further introduce RePAIR (Reinforcement learning with Personalization-Aware Interaction Rewards), a training approach that learns from cross-user differences in subgoal outcomes to improve reliability across user-conditioned mobile environments. Across six agents, we find substantial variation in task success across users and consistently lower subgoal achievement in user-conditioned UI contexts (6.98 to 15.4 pp). This gap further increases for personal targets drawn from each user's own content (8.77 to 22.0 pp). Failures in these contexts frequently involve selecting another item instead of the intended target, particularly before target exposure. Finally, RePAIR improves user-conditioned SAR (+5.87 pp), all-success (+7.50 pp), and overall Task SR (+9.42 pp) over its supervised fine-tuning parent on unseen users, providing initial evidence that explicitly learning from cross-user variation can improve GUI-agent reliability.",
    "published": "2026-10-06T08:38:30Z",
    "updated": "2026-10-06T08:38:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07972"
  },
  {
    "id": "2610.07969",
    "title": "EmbodiedSmith: Scaling Embodied Data through Recursive Self-Improvement Flywheel in Simulation",
    "authors": [
      "Yikai Qin",
      "Yifei Deng",
      "Mingjian Liang",
      "Wenxuan Song",
      "Zepeng Lin",
      "Zhiyi Jiang",
      "Jiajun Fu",
      "Qiao Sun",
      "Huashuo Lei",
      "Xicheng Gong",
      "Jiayi Chen",
      "Han Zhao",
      "Shuanghao Bai",
      "Pengxiang Ding",
      "Pengwei Wang",
      "Haoang Li"
    ],
    "abstract": "Scaling robotic foundation models requires diverse training data and reliable evaluation environments. Simulation offers a scalable solution, yet existing generation pipelines remain constrained by predefined assets and skills, a disconnect between scene generation and task generation, and limited support for complex embodiments and physics. We introduce EmbodiedSmith, a framework for scalable embodied data generation through recursive self-improvement (RSI). EmbodiedSmith unifies asset, scene, and task generation in a pipeline that supports autonomous creation and language-driven customization. Its core is an agentic refinement loop: scene generation anticipates downstream task requirements, while task generation guides targeted scene edits, allowing scenes and tasks to iteratively improve one another. This joint refinement improves task generation success, including for long-horizon tasks. The framework further supports mobile manipulators, humanoids, and dexterous hands, as well as interactions involving deformable objects and fluids, broadening the range of behaviors and physical phenomena represented in generated data. Together, these capabilities provide a flexible simulation engine for both robot pretraining and evaluation. Extensive experiments validate the quality, diversity, and generation efficiency of the resulting data, while downstream policy experiments demonstrate that increased data diversity improves generalization.",
    "published": "2026-10-06T08:34:28Z",
    "updated": "2026-10-06T08:34:28Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.07969"
  },
  {
    "id": "2610.07962",
    "title": "ReGraph: A Computational Account of Emergent Generalization in the \"what\" and \"where\" Dual Visual Streams",
    "authors": [
      "Hyewon Kang",
      "Jungmin Lee",
      "Ilgyu Lee",
      "Seok-Jun Hong"
    ],
    "abstract": "Where generalization capacity--the ability to extract context-invariant relational structures--first emerges remains a central question in AI and neuroscience. The foundation for this capacity lies upstream of the hippocampus, within the entorhinal cortex, where parallel pathways dissociate relational structure in the medial entorhinal cortex (MEC) from sensory content in the lateral entorhinal cortex. However, as Eichenbaum argued, such factorization likely originates earlier, driven by the segregation of the dorsal ('where') and ventral ('what') visual streams. Supporting this, grid-like firing patterns--a signature of MEC (context-invariant codes)--also appear in preceding neocortical regions along the dorsal pathway. Yet, how such representations are computationally formed along upstream pathways remains unknown. To investigate this in silico, we developed ReGraph, a recurrent dual-stream graph model with biological inductive biases, including retina-driven stream-specialized encoding, dorsal-to-ventral modulation, and dynamic lateral connectivity. Trained on the action benchmark Something-Something V2, ReGraph revealed a pathway-specific emergence of relational mapping: context-invariant codes and grid-like spatial bases uniquely co-emerged along the extended dorsal stream. In contrast, their absence in single-stream, unmodulated variants, and standard baselines implies that these inductive biases are prerequisites for relational structures. Crucially, our post-hoc analyses demonstrated that these grid-like bases serve as reusable routing templates for information processing via lateral connectivity. Together, our findings provide a computational account that generalization may not be a faculty that emerges abruptly within a dedicated region, but a property that already takes shape as sensory information is parsed into factorized streams of hierarchical visual processing.",
    "published": "2026-10-06T08:30:45Z",
    "updated": "2026-10-06T08:30:45Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2610.07962"
  },
  {
    "id": "2610.07958",
    "title": "DensiTok: Making Feed-Forward 3D Gaussian Splatting See More Views Than It Is Given",
    "authors": [
      "Minhyeok Lee",
      "Jungho Lee",
      "Minseok Kang",
      "Heeseung Choi",
      "Ig-Jae Kim",
      "Sangyoun Lee"
    ],
    "abstract": "Feed-forward 3D Gaussian Splatting (3DGS) reconstructs a scene in a single forward pass, replacing per-scene optimization with a network trained across many scenes. Its quality, however, degrades sharply as the number of input images drops. The bottleneck is upstream of the reconstruction heads: from a few unposed views, the internal representation they read carries no evidence for unobserved regions, leaving holes, floaters, and blur. The common remedy supplies that evidence as pixels, synthesizing extra views with an image or video generator and re-encoding them, which is costly and not 3D-consistent by construction. We instead densify the evidence itself. We present DensiTok, a plug-in module for pretrained feed-forward 3DGS models that densifies their internal geometry tokens directly, making a frozen backbone behave as though it had observed many more views than it was given. DensiTok compresses those tokens into a compact latent space, completes the latents of the unobserved viewpoints in a single flow-matching step conditioned on camera geometry, and decodes them back into tokens that the original reconstruction heads. The same module design can be integrated into different pretrained predictors while keeping each backbone and its reconstruction heads frozen. Completion in a low-dimensional latent space requires no image synthesis or additional encoder passes. Across three pretrained backbones and two benchmarks, DensiTok consistently improves sparse-view reconstruction and recovers much of the gap to dense-view reconstruction.",
    "published": "2026-10-06T08:29:41Z",
    "updated": "2026-10-06T08:29:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07958"
  },
  {
    "id": "2610.07954",
    "title": "Revisiting Numerical Forecasting Models for Language-Based Trajectory Prediction",
    "authors": [
      "JunGyu Lee",
      "Inhwan Bae",
      "Hae-Gon Jeon"
    ],
    "abstract": "Language-based trajectory predictors represent coordinates as discrete tokens and learn auxiliary tasks such as destination and group reasoning. This formulation enables the model to capture behavioral intent and social context beyond coordinate dynamics alone. However, token-level objectives provide only indirect guidance for continuous coordinate-space dynamics. To address this limitation, we introduce MoRE (Mixture of Reward Experts), a refinement framework that transfers numerical forecasting priors into a pretrained language-based predictor through reinforcement learning. Five frozen numerical predictors provide complementary coordinate-level knowledge of motion and interactions. Their predictions are converted into expert rewards and combined through an uncertainty-weighted consensus that penalizes disagreement. A ground-truth reward anchors the prediction to the target trajectory. To focus refinement on difficult cases, MoRE refines the policy using the top 1% of training samples ranked by predictive entropy. Expert predictions are computed once and cached before PPO training, so the experts are not run during policy updates or inference. In this way, MoRE combines the contextual modeling of the language-based predictor with coordinate-level feedback from numerical experts. On ETH-UCY, MoRE reduces ADE from 0.22 to 0.20 m and FDE from 0.32 to 0.29 m. Relative to the base policy, ADE decreases by 17.9% on SDD and 12.7% on NBA. On ETH-UCY, MoRE also reduces collision rates and better matches ground-truth pedestrian spacing, without increasing measured inference memory or latency. The project page is available at https://jungyu0413.github.io/MoRE/.",
    "published": "2026-10-06T08:28:52Z",
    "updated": "2026-10-06T08:28:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07954"
  },
  {
    "id": "2610.07948",
    "title": "Confidence Reasoning Graphs: Structured Confidence Estimation for LLM Agents",
    "authors": [
      "Brendan King",
      "Farima Fatahi Bayat",
      "Jean-Flavien Bussotti",
      "Pouya Pezeshkpour",
      "Estevam Hruschka"
    ],
    "abstract": "When using an LLM agent in a consequential domain, making an informed decision about whether to trust its output or intervene requires calibrated confidence in the agent's success. Confidence estimation for agents is difficult because evidence about success is distributed across heterogeneous, interdependent steps of an agent's trajectory. Practical agentic deployments introduce further challenges: frontier LLMs often provide limited access to internal signals, agent roll-outs are costly, and training data may be unavailable or quickly become outdated. To address these challenges, we introduce Confidence Reasoning Graphs (CRGs), an inference-time framework that estimates the probability an agent accomplished its task from a single trajectory, without privileged model access or training data. Rather than compressing an execution into a single holistic judgment, a CRG begins with the claim that the agent accomplished its task, decomposes it into contextualized sub-claims grounded in trajectory evidence, estimates confidence for each terminal claim, and finally aggregates these into an overall confidence estimate. Across three agentic benchmarks, three backbone models, and three agent frameworks, CRGs yield better-calibrated confidence and stronger risk-aware decision making than verbalized, sampling-based, and white-box surrogate baselines. We further find that calibration error alone can be misleading: a white-box surrogate baseline appears well calibrated while providing near-chance discrimination. Ablations attribute CRG's improvements to claim-level confidence estimation and aggregation rather than graph construction alone. Finally, a CRG exposes the claims and trajectory evidence underlying each confidence estimate, enabling it to be audited at decision time.",
    "published": "2026-10-06T08:22:14Z",
    "updated": "2026-10-06T08:22:14Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.07948"
  },
  {
    "id": "2610.06582",
    "title": "Mind the Execution Gap: Action-Semantic Mismatch in World-Model Control",
    "authors": [
      "Shengtao Wen",
      "Xiang Chen",
      "Yu Tian",
      "Lingbing Guo",
      "Lina Gong",
      "Sheng-Jun Huang"
    ],
    "abstract": "World-model controllers rely on action-conditioned dynamics for prediction and planning, yet real control systems often execute commands asynchronously due to communication delay, packet loss, reordering, and actuator buffering. We study how asynchronous execution changes the action semantics assumed within world-model controllers, rather than treating it only as an external control disturbance. Through controlled interventions, we identify two architecture-dependent failure modes: planning-based controllers such as TD-MPC2 suffer from a future-action timeline mismatch between imagined and executed action sequences, while recurrent world models such as DreamerV3 can attribute observed transitions to commands that were not actually applied. Our analysis shows that TD-MPC2 requires the correct future action sequence during latent dynamics rollout, whereas DreamerV3 requires timely attribution of each transition to the action that generated it. Based on these findings, we introduce two lightweight execution-consistent interfaces, Future-Sequence for TD-MPC2 and Applied-Action Feedback for DreamerV3, that correct these mismatches without modifying the pretrained world models. Experiments across delays, packet loss, reordering, multiple control domains, measured network traces, and a process-separated asynchronous stack consistently support both diagnoses and the corresponding architecture-specific corrections.",
    "published": "2026-10-05T15:59:49Z",
    "updated": "2026-10-05T15:59:49Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06582"
  },
  {
    "id": "2610.06578",
    "title": "DGA-Muon: Decoupled Geometry-Aligned Adaptive Scaling for Muon",
    "authors": [
      "Wenpeng Zhang",
      "Runsheng Yu"
    ],
    "abstract": "While NorMuon has achieved strong empirical performance in pretraining, its underlying adaptive mechanism remains largely heuristic and poorly understood. In this work, we provide the first systematic theoretical analysis of NorMuon's adaptivity, revealing that it primarily arises from orthogonalization-induced geometry rather than genuine optimization dynamics, serving to offset the resulting geometric non-uniformity. Under exact orthogonalization, the adaptive scaling factors degenerate into a single global scalar for square and wide matrices, while for tall matrices their variation results from unevenly distributed row energy after orthogonalization. Under approximate orthogonalization, the orthogonality residuals introduce additional variation into the scaling, giving rise to a counterintuitive Orthogonalization--Adaptivity Paradox: more accurate orthogonalization weakens adaptivity. We further show that NorMuon's rigid row-wise scaling is geometrically misaligned with the one-sided orthogonal structure of tall matrices by distorting column orthogonality. Motivated by these limitations, we propose two core design principles that a desirable adaptive mechanism for Muon should satisfy. First, adaptive scaling should be decoupled from orthogonalization, with the scaling factors computed directly from raw gradients. Second, adaptive scaling should be aligned with the shape-dependent orthogonal structure of the polar factor, using row-wise scaling for wide matrices and column-wise scaling for tall matrices. We prove that this geometry-aligned scaling preserves the orthogonal structure of the update. By incorporating several other techniques, we obtain Decoupled Geometry-Aligned Muon (DGA-Muon). We establish convergence guarantees for DGA-Muon and empirically validate both our theoretical characterization of NorMuon's scaling degeneration and the superiority of DGA-Muon.",
    "published": "2026-10-05T15:56:02Z",
    "updated": "2026-10-07T11:39:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06578"
  },
  {
    "id": "2610.06575",
    "title": "FrontVeg V2: A Training-Free Software Framework for Foreground-Aware Zero-Shot Plant Trait Segmentation in High-Resolution Images of Trellised Crops",
    "authors": [
      "Abdoul Djalil Ousseini Hamza",
      "Herearii Metuarea",
      "Corentin Lothod{é}",
      "Morgane Roth",
      "Jacem Ben Hamden",
      "Eric Duch{ê}ne",
      "Lionel Ley",
      "David Alletru",
      "David Rousseau"
    ],
    "abstract": "FrontVeg V2 is an open-source, training-free software framework for foregroundaware zero-shot segmentation of plant traits in high-resolution images of trellised crops. The pipeline combines monocular depth estimation, automatic foreground extraction using Valley-Aware Depth Thresholding, tiled zero-shot segmentation, Graph-Based Mask Assembly, and geometry-aware fusion. This design enables plant organs and disease symptoms to be segmented while reducing detections arising from neighboring vegetation rows. The current implementation integrates Depth Anything V2 (DAV2) and SAM3 and can be used through both command-line batch processing and a Napari graphical interface. FrontVeg V2 provides a reusable framework for multi-crop, multi-trait digital phenotyping without task-specific model retraining.",
    "published": "2026-10-05T15:53:57Z",
    "updated": "2026-10-05T15:53:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.06575"
  },
  {
    "id": "2610.07111",
    "title": "LiLib: Lifelong Air-to-Ground Path-Loss Prediction on UAVs via a Drift-Triggered Model Library",
    "authors": [
      "Minh Tran"
    ],
    "abstract": "UAVs that act as relays or base stations need accurate air-to-ground path-loss predictions for rate adaptation and placement, but propagation conditions change as a UAV moves between suburban, urban and high-rise areas, and the same areas are often revisited. Online regressors that adapt by forgetting must relearn each environment from scratch, whereas a single model trained on all data averages incompatible regimes. We propose LiLib, a lightweight continual-learning scheme in which a UAV maintains a small library of recursive-least-squares experts. A windowed residual test detects drift; a short probe phase then either reuses the best stored expert or creates a new one. In simulations based on four standard urbanization profiles, LiLib reduces prediction RMSE from 5.89 dB (best sliding-window baseline) to 4.03 dB (p < 0.001), lowers the error shortly after a return to a known environment from 12.3 dB to 5.7 dB, and recovers 99% of the throughput of a regime-aware oracle in rate adaptation. The library stores four experts in under 0.5 KB, and identifies regimes with 92% purity without labels. When a second UAV is initialized with the library of a peer, its error after environment changes halves. LiLib does not reach the oracle, and similar regimes may be merged when shadowing is strong. The results indicate that, for recurring drift, remembering is more effective than re-adapting.",
    "published": "2026-10-05T15:53:19Z",
    "updated": "2026-10-05T15:53:19Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07111"
  },
  {
    "id": "2610.06571",
    "title": "BrainTRACE: Tracing Longitudinal, Multimodal, and Volumetric Evidence in Brain MRI Clinical Reasoning",
    "authors": [
      "Qizhen Lan",
      "Mengchen Fan",
      "Hang Zhang",
      "Jingwei Duan",
      "Moule Lin",
      "Jialin Chen",
      "Baocheng Geng",
      "Xiaoqian Jiang"
    ],
    "abstract": "Brain MRI interpretation is a longitudinal clinical reasoning problem: radiologists compare serial studies, integrate information across MRI sequences, localize findings within volumetric anatomy, and translate this evidence into report-grounded assessments. Existing medical VQA and 3D imaging benchmarks capture important parts of this workflow, but often evaluate brain MRI through isolated images, static volumes, or ungrounded report-style answers, thereby obscuring failures in the evidence chain that support clinical validity. We introduce BrainTRACE, a report-grounded benchmark for evaluating whether vision-language models can trace the evidence structure required for longitudinal brain MRI interpretation. BrainTRACE contains 7,273 scored VQA instances derived from 1,778 longitudinal patients, 7,299 MRI studies, and approximately 29k co-registered 3D MRI sequence volumes. The benchmark is organized by five levels of clinical reasoning, from acquisition recognition to case-level synthesis, and by evidence demands covering longitudinal comparison, report-grounded references, multi-sequence integration, and volumetric spatial evidence. BrainTRACE supports rendered inputs compatible with standard VLM interfaces, a 3D-evidence condition, and a decomposed case-reasoning track that audits six steps in a longitudinal evidence chain. Evaluation of 20 VLM configurations shows that current systems can identify isolated visual cues but rarely compose them into grounded longitudinal interpretations. We release the benchmark specification, evaluation lists, scoring implementation, scoring rubrics, and audit-record format to support reproducible progress in brain MRI VLM evaluation.",
    "published": "2026-10-05T15:52:37Z",
    "updated": "2026-10-05T15:52:37Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06571"
  },
  {
    "id": "2610.06563",
    "title": "HERA: Harness-Environment Co-Evolution for Reliable Agentic Abstention",
    "authors": [
      "Han Luo",
      "Bingbing Wen",
      "Guang Yang",
      "Zora Zhiruo Wang",
      "Pan Lu",
      "Lucy Lu Wang"
    ],
    "abstract": "Large language model (LLM) agents are increasingly capable of acting in complex tool-use environments, yet they often fail to recognize when tasks are infeasible and no valid solution exists. Recent work has formalized this reliability gap as the problem of agentic abstention, and existing approaches typically optimize a model or agent harness against a fixed set of tasks, leading to limited generalization to unseen failure modes. We introduce HERA, a framework for harness-environment co-evolution for agentic abstention. HERA consists of (i) a pipeline to automatically construct verifiable pairs of feasible and infeasible tasks by applying controlled environment mutations that transform solvable tasks into cases requiring abstention, and (ii) a co-evolution procedure in which performance failures on previous tasks are used to drive harness adaptation and generate new execution environments and tasks geared towards previous weaknesses. On held-out evaluation tasks, an evolved harness from HERA improves abstention accuracy from 61.7% to 83.3% while improving feasible-task completion from 68.3% to 76.7%, achieving the highest abstention and feasible-task completion among the compared methods. The resulting best harness transfers across 19 other LLMs, improving abstention accuracy by 15.3 percentage points on average without any model-specific optimization, and enabling smaller models to match the performance of more powerful models at an estimated 85% lower cost.",
    "published": "2026-10-05T15:49:12Z",
    "updated": "2026-10-05T15:49:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06563"
  },
  {
    "id": "2610.07110",
    "title": "MoonGS: High-quality Representation of the Lunar Surface via Gaussian Splatting Using Robust Depth Features from Image Pairs",
    "authors": [
      "Yun Jiang",
      "Bo Zheng",
      "Yingying Zhang",
      "Xueming Xiao",
      "Tao Hu",
      "Hutao Cui",
      "Zhiguo Meng",
      "Ke Gao",
      "Yang Gao",
      "Meibao Yao"
    ],
    "abstract": "High-quality 3D reconstruction of lunar terrain from sparse rover images is indispensable for autonomous lunar exploration, but remains challenging because viewpoint overlap is insufficient, surface textures are weak, and data volume is limited. We propose MoonGS, the first feed-forward 3D Gaussian Splatting framework tailored to lunar scenes. Given only two input images, MoonGS predicts pixel-aligned Gaussian primitives in a single forward pass and renders photorealistic novel views without any per-scene optimization. MoonGS (i) adopts an adaptable backbone design that seamlessly integrates advanced vision foundation models to extract robust depth features; (ii) integrates semantic priors in two manners: merging semantic cues with visual features to refine Gaussian parameter estimation, and adopting a semantic ranking loss that regularizes background depth; and (iii) employs an entropy-guided heuristic resampling strategy to augment sparse observations by selecting the most informative distant viewpoints with negligible overhead. Experiments on the LuSNAR benchmark and our synthetic weak-texture MoonBlender dataset show that MoonGS surpasses state-of-the-art feed-forward NeRF/3DGS baselines by +4.9 dB PSNR, +0.29 SSIM, and 40\\% lower LPIPS while maintaining sub-second inference. Furthermore, we validate the broad applicability of our framework by demonstrating that it effectively leverages state-of-the-art backbones, including VGGT, to significantly boost performance. Qualitative evaluations on Chang'e mission imagery also show the best visual quality among compared methods, indicating robustness on real lunar data. The source code and dataset are publicly available at https://github.com/InRobots/MoonBlender.",
    "published": "2026-10-05T15:46:50Z",
    "updated": "2026-10-05T15:46:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07110"
  },
  {
    "id": "2610.06553",
    "title": "Signature-Based Feature Learning for Human Activity Recognition: A Reproducible Machine Learning Study of Representation, Depth, and Model Choice",
    "authors": [
      "Kamal Jarrar",
      "Jacky Cresson",
      "Christian Paroissin"
    ],
    "abstract": "Human activity recognition (HAR) relies on transforming sensor signals into informative representations for classification. Although deep learning and handcrafted features are widely used, the role of representation itself is often not systematically isolated. Signature transforms provide a mathematically grounded way to encode temporal order and cross-channel interactions, but their value for HAR under a fully reproducible and leakage-aware framework remains unclear. To evaluate whether signature-based feature learning improves HAR performance compared with raw-signal baselines, and to assess the effects of embedding strategy, truncation depth, model choice, and sensor configuration. Experiments were conducted on the UCI HAR dataset using a fully reproducible pipeline with the original train--test split preserved and subject-disjoint validation to prevent leakage. Three representations were compared: raw flattened signals, time-augmented paths, and lead--lag transformed paths. Signature features were computed at multiple truncation depths and evaluated using multilayer perceptron (MLP) and Random Forest (RF) classifiers under identical preprocessing and validation procedures. A prior K-means-based feature reduction study was also reproduced for comparison. Signature-based representations improved performance when paired with RF models, the best configuration was time-augmented six-channel signatures at depth 6 using entropy-based RF achieving 0.858 accuracy and 0.859 macro F1, outperforming the strongest raw baseline (0.816 accuracy). Lead--lag representations were competitive at moderate depths but did not surpass the best time-augmented models. MLP models did not exceed raw baselines. Signature-based feature learning can improve HAR, but its benefit depends on alignment between representation design and classifier choice.",
    "published": "2026-10-05T15:44:23Z",
    "updated": "2026-10-05T15:44:23Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06553"
  },
  {
    "id": "2610.06549",
    "title": "Proof-Grounded Patient-Specific Clinical Explanations from Knowledge-Graph Reasoning",
    "authors": [
      "Surajit Das"
    ],
    "abstract": "Clinical decision-support outputs can lack an au- ditable link between patient observations, encoded knowledge, conclusions, and recommendations. We present the CKG Clinical Explanation Engine, a downstream layer for a frozen, training-free clinical knowledge-graph reasoner that converts patient inference states and disease knowledge into typed facts, explicit rule-application traces, provenance-linked conclusions, and policy-licensed recommendations. The design separates measurement availability, representation completeness, and disease-specific activation; consequently, observed zero-activation evience is not treated as missing and partial representation is distinct from unobserved evidence. Optional language generation is restricted to symbolically licensed content. Across five usable workbooks (6,720 patients; 20,160 patient-disease traces; 1,021,440 feature-evidence rows), IG-range validity and knowledge provenance were 100%, numerical cross-sheet fidelity was 100% (120,960/120,960), and exported logical/report trace completeness was 100% (20,160/20,160). Availability representation consistency was 99.7028% (1,018,404/1,021,440); all 3,036 disagreements were confined to three systematic feature-cohort patterns. The corpus contained 86,783 observed zero-activation and 139,949 observed partially represented instances. A separate seeded 25-patient end-to-end audit completed without execution failure and passed all pre-specified trace, licensing, provenance, and state-consistency checks. These results establish structural and implementation auditability, not clinical correctness or utility.",
    "published": "2026-10-05T15:41:31Z",
    "updated": "2026-10-05T15:41:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06549"
  },
  {
    "id": "2610.06535",
    "title": "Symmetry and AI-assisted discovery of magic-state factories",
    "authors": [
      "Shubham P. Jain",
      "Adam Wills",
      "Shraddha Singh"
    ],
    "abstract": "Magic-state distillation is a major resource cost in fault-tolerant quantum computing. The cost of a magic-state factory depends strongly on its failure rate, which grows with the number of input magic states. Although symmetry-restricted methods have recently made distance two searches tractable, distance three and above have remained elusive at moderate input counts. We develop symmetry- and AI-assisted methods to search this regime. We present a unified binary-matrix formulation encompassing both triorthogonal-code and direct circuit searches. We show that distance at least three is equivalent to nonzero, pairwise distinct syndromes, separating the choice of syndromes from the search for compatible output gates. We restrict the syndrome search using group symmetry and language-model agents, followed by deterministic solving and independent verification. Our searches yield 699 factory classes, including 564 new ones. These include factories for pure-T states and factories with entangled outputs comprising combinations of T, CS, and CCZ magic states. The pure-T factories [[63, 11, 3]] and [[850, 128, 6]] achieve the lowest overhead exponents we know among protocols with at most 100 and 1000 inputs, respectively, with $γ= 1.589$ and $γ= 1.057$. Our [[1715, 287, 6]] factory, with $γ= 0.998$, is the smallest known pure-T factory with $γ< 1$. We also provide a context directory of search briefs and campaign notes with which readers can train their own agents and tailor the search to their requirements. With these results, we begin constructing an active, open-source repository of magic-state distillation protocols for the quantum community, supplemented by our methods and data, for the practical fault-tolerant quantum computing regime.",
    "published": "2026-10-05T15:36:37Z",
    "updated": "2026-10-05T15:36:37Z",
    "categories": [
      "quant-ph",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.06535"
  },
  {
    "id": "2610.06532",
    "title": "AICoFe Demo: AI-based Collaborative Feedback System",
    "authors": [
      "Alvaro Becerra",
      "Alejandra Palma",
      "Ruth Cobos",
      "Julian Fierrez"
    ],
    "abstract": "Peer feedback promotes active learning, critical reflection, and skill development, but its effectiveness is often limited by the quality of feedback students provide. Recent advances in LLMs offer new opportunities to support peer feedback by generating more coherent and actionable feedback while preserving human oversight. This paper presents AICoFe, an AI-based collaborative feedback system designed to support teacher, peer, and self-assessment in higher education. AICoFe integrates rubric-based evaluations, GenAI-supported feedback, Learning Analytics dashboards, and video recordings to foster reflective learning. The system combines quantitative scores and qualitative observations to generate structured feedback focused on strengths, areas for improvement, and actionable recommendations, which teachers can review and curate. An evaluation with 65 undergraduate and master's students shows high satisfaction with the coherence and usefulness of the feedback, as well as the excellent usability, indicating that AICoFe effectively supports peer feedback in authentic educational settings.",
    "published": "2026-10-05T15:35:09Z",
    "updated": "2026-10-05T15:35:09Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.06532"
  },
  {
    "id": "2610.06522",
    "title": "Anatomy of LLM Sycophancy: What a Flip Rate Hides",
    "authors": [
      "Haonan Huang"
    ],
    "abstract": "A model under pushback can correct itself, capitulate, or hold, and one flip rate counts a correction and a capitulation alike. Using SycoLens, a modular replay protocol, we test how user pressure and evaluation settings shape measured flip rates. Each measurement is one stateless replay of an item, a committed answer, and one scripted user line in a fixed form. Every effect is read against a matched control with the line deleted. Pushback wording, committed text, answer format, boundary distance, and ground truth become factors of one instrument; earlier instruments vary one to three of them. Across eleven frontier models from three providers and about 760,000 controlled replays, which models look sycophantic depends on how the user pushes back. Lines that assert the opposite verdict and lines that challenge the answer without asserting one rank the models almost unrelatedly. Flip effects grow several-fold near a model's boundary, yet items answered identically in every screening draw still carry about half of the most-affected totals. On arithmetic tasks where the truth is known, one model re-derives and corrects itself under pressure while another abandons correct answers without written work. On the model tested, a planted derivation lowers release of the answer it argues for, true or wrong, where a bare stated value does not; the wrong answer is corrected much more often than the true one is abandoned. Under a yes/no readout the rankings come closer, entangled with a pressure-induced shift toward \"no\". One score per model therefore compares different behaviours across models and benchmarks. We condense these dependencies into a reporting profile; the instrument, records, and analyses will be released upon publication.",
    "published": "2026-10-05T15:32:45Z",
    "updated": "2026-10-05T15:32:45Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06522"
  },
  {
    "id": "2610.05076",
    "title": "Self-Generated Feedback Destabilizes Test-Time Training: A Causal Decomposition of Long-Horizon Adaptation",
    "authors": [
      "Cheng Luo",
      "Bing Li",
      "Bernard Ghanem"
    ],
    "abstract": "Test-time training (TTT) lets a model store information in its weights during inference. When the model learns from its own output, however, each update also changes the model that generates the next training example. Across 128K-token streams, retaining generated-text updates worsens prediction on independent human-written text with three TTT-E2E model configurations (labeled 125M, 760M, and 3B). The same failure occurs when Adam updates Qwen3-4B's existing weights. The same update mechanisms can improve on real text, so writing itself is not the failure. Three matched comparisons trace the causal pathway. Fixed Generation removes over 98% of the damage at 125M and 760M by using a frozen model to generate training chunks. Recorded Replay separates the loss caused by reading degraded text from the additional loss stored by updating on it. A paired one-update comparison then shows the local conflict: an update predicts its source better but new real text worse. This cost grows after Closed Loop adaptation, with a few trajectories accounting for most large failures. Finally, Settlement evaluates the candidate state on independent real text before commitment. It leaves mean endpoint gaps of 0.07 and -0.02 nats at 125M and 760M while retaining real-text adaptation. These results motivate checking prediction on independent evidence before retaining an update.",
    "published": "2026-10-04T09:21:14Z",
    "updated": "2026-10-04T09:21:14Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05076"
  },
  {
    "id": "2610.05071",
    "title": "Discrete Action Matching: Learning Stochastic Dynamics from Samples via State Graphs",
    "authors": [
      "Mikhail Persiianov",
      "Alexander Korotin"
    ],
    "abstract": "Learning population dynamics from unpaired temporal marginals is an ill-posed inverse problem that requires structural assumptions on the underlying dynamics. We introduce $\\textit{Discrete Action Matching}$ (DAM), a finite-state counterpart of Action Matching based on discrete Wasserstein geometry. For a prescribed marginal path and transport geometry, we derive an action-minimization objective for its canonical minimum-kinetic-energy current. Our key observation is that the density dependence of the discrete action reduces to neighboring density ratios. Along an empirical interpolation of the snapshots, DAM first estimates these ratios and then learns an action potential. The learned fields also define a graph-supported Markov sampler. Experiments on controlled synthetic dynamics and real mouse gastrulation data evaluate marginal reconstruction and interpolation. Additional experiments approximate numerical surface-transport paths from paired samples.",
    "published": "2026-10-04T09:13:33Z",
    "updated": "2026-10-04T09:13:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05071"
  },
  {
    "id": "2610.05066",
    "title": "Salvation Lies Within: Eliciting Inherent Style Transfer in Step-Distilled Diffusion Models",
    "authors": [
      "Shengyin Sun",
      "Yiming Li",
      "Yingzhao Lian",
      "Xing Li",
      "Xingzhi Zhou",
      "Anxin Tian",
      "Zhili Wang",
      "Haoyang Li",
      "Ziqiang Cui",
      "Chen Ma"
    ],
    "abstract": "Adapting step-distilled text-to-image (T2I) models through post-training incurs additional computational costs and affects native few-step generation behavior. This motivates a complementary route beyond style-specific adaptation: drawing on the visual knowledge already encoded in step-distilled T2I models to elicit stylistic capabilities through language. Pursuing this direction requires textual guidance that captures how visual attributes jointly define a style and remain applicable as the depicted content changes. To explore this approach, we introduce StyleForge, a fully automatic, training-free framework that expresses reference styles as reusable rendering instructions. By integrating overall rendering characteristics with local color and lighting behavior, StyleForge organizes visual evidence from reference images into a coherent specification of how the target style should be expressed. The specification is then compiled into textual guidance that can be reused across content prompts, enabling frozen step-distilled T2I models to render different subjects and scenes in the reference style while retaining native few-step generation. Extensive experiments show relative gains of up to 29.47\\% in generation quality scores over the strongest baseline, while Pareto analysis indicates that improved stylization is accompanied by strong adherence to the requested content.",
    "published": "2026-10-04T09:06:57Z",
    "updated": "2026-10-04T09:06:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05066"
  },
  {
    "id": "2610.05060",
    "title": "Why, Where, How: Taxonomy-guided Error Grounding for Code Repair in NL2SQL",
    "authors": [
      "Suchan Lee",
      "Woomin Song",
      "Hwanjo Yu",
      "Sangwoo Mo"
    ],
    "abstract": "SQL queries that large language models write from natural language questions can execute successfully yet produce incorrect results, so execution alone does not reveal what to fix. An error taxonomy says why the query is wrong, but not where to look or how to change it. Existing methods can guide SQL correction through feedback, error reports, or generated plans alongside an unmasked query. We introduce TEG(Taxonomy-guided Error Grounding), which turns a supplied diagnosis into a structured correction input for natural language-to-SQL (NL2SQL) correction. Type-specific rules map each error type to construct classes to reconsider and an edit operation to request. TEG masks the selected constructs in the query when applicable and states that operation in an edit instruction. TEG generates candidate corrections from this input, uses execution feedback to guide candidate selection, and repeats the process one annotation at a time for queries with several errors. On NL2SQL-BUGs, TEG reaches 47.3 single-error execution accuracy and 37.0 overall with Qwen2.5-7B-Instruct. Across the model sizes and thinking modes evaluated in the main comparison, TEG outperforms all evaluated baselines on single-error queries, even when the baselines receive the same error-type annotations. With predicted types, TEG stays above direct LLM correction and ErrorLLM on single-error queries.",
    "published": "2026-10-04T09:04:33Z",
    "updated": "2026-10-04T09:04:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05060"
  },
  {
    "id": "2610.05053",
    "title": "CoDG-Net: Structure-Guided Style Diffusion and Collaborative Learning to Mitigate Catastrophic Forgetting in Medical Image Domain Generalization",
    "authors": [
      "Yucheng Song",
      "Jincan Wang",
      "Haokang Ding",
      "Zhiqiang Tian",
      "Kangxu Fan",
      "Zhifang Liao"
    ],
    "abstract": "Domain Generalization (DG) for medical image segmentation is both highly challenging and critically important. However, existing medical DG methods largely overlook the issue of Catastrophic Forgetting (CF): \\textbf{Models often sacrifice their ability to retain source-domain knowledge while pursuing cross-domain robustness.} This can directly threaten diagnostic safety in already-deployed clinical scenarios. To address this, we investigate data augmentation strategies and catastrophic forgetting for medical image DG segmentation. First, we propose a structure-guided style diffusion augmentation method. Constrained by anatomical structure consistency in the frequency domain, this method performs cross-domain diffusion on the amplitude spectrum, generating samples with more diverse and broader style coverage to better support domain generalization. Then, we design a collaborative learning network with a dual-branch interactive architecture (CoDG-Net), together with a novel learning bias-guided strategy that adaptively regulates knowledge transfer at both the layer level and the task level, thereby effectively mitigating catastrophic forgetting on the source domain. Experiments and ablation studies on single-source and multi-source medical DG benchmark datasets demonstrate that CoDG-Net not only outperforms existing state-of-the-art methods in target-domain segmentation performance, but also achieves a lower forgetting rate on the source-domain data. The code is available at: https://github.com/wangprocess/CoDG-Net.",
    "published": "2026-10-04T08:43:24Z",
    "updated": "2026-10-04T08:43:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05053"
  },
  {
    "id": "2610.05051",
    "title": "LogSig-SSM: Time-Series Modelling with Multi-Scale Log-Signature Compression for State-Space Models",
    "authors": [
      "Felix Oury",
      "Nicolas Calvo Peiro",
      "Reiko J. Tanaka"
    ],
    "abstract": "Time-series data are often sampled irregularly at high frequencies and exhibit long-range dependencies, which makes long-horizon modelling difficult. Continuous-time models such as neural controlled differential equations (NCDEs) and neural rough differential equations (NRDEs) can handle irregular sampling, but they scale poorly to long sequences. Selective state-space models (SSMs) such as Mamba scale linearly with sequence length, but they provide limited recurrent mixing across hidden dimensions within a single block. We propose LogSig-SSM (Log-Signature Compression for State-Space Models), which first compresses long multivariate time series into a shorter sequence of tokens using multi-scale windowed log-signatures, and then processes these tokens with a selective SSM backbone. LogSig-SSM is scalable and robust to irregular sampling, combining log-signature tokens that capture higher-order cross-channel interactions with a selective SSM that models long-range dependencies. The model also admits a continuous-time interpretation as an NCDE/NRDE-style system driven by a log-signature-based input, in which selectivity induces an input-dependent rescaling of the latent dynamics. Across four benchmarks, namely long-sequence classification on UEA, high-frequency physiological regression on PPG-DaLiA, multivariate weather forecasting, and irregularly sampled clinical prediction on PhysioNet Sepsis, LogSig-SSM outperforms or matches strong SSM and continuous-time baselines while training up to $30\\times$ faster and using up to $37\\times$ less GPU memory than Mamba on the longest sequences.",
    "published": "2026-10-04T08:41:36Z",
    "updated": "2026-10-04T08:41:36Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05051"
  },
  {
    "id": "2610.05048",
    "title": "E$^2$-OPSD: Taming Entropy Overshoot in On-Policy Self-Distillation",
    "authors": [
      "Yifei Liu",
      "Minghao Fang",
      "Xinyu Gu",
      "Chengkai Yao",
      "Mengdi Liu",
      "Tengfei Ma",
      "Jiangbin Zheng",
      "Chang Yu",
      "Zhangyang Gao"
    ],
    "abstract": "On-policy self-distillation (OPSD) provides dense token-level supervision without a second model: one network acts as teacher with the reference solution and as student with only the problem. We identify a specific failure mode of this recipe. During training, student token entropy rises past the teacher's and remains elevated, a pattern we call entropy overshoot. We trace it to both sides of distillation. The reference-conditioned teacher is confident along its answer-directed reasoning path, but this confidence transfers poorly to student-generated prefixes, making its supervision overly tied to answer-specific cues rather than reusable reasoning patterns; meanwhile, the forward KL used by OPSD continually diffuses the student's predictive distribution without pulling it back. We introduce E$^2$-OPSD to address both causes. Exemplar-guided teaching replaces the current answer with a retrieved solved neighboring problem, providing transferable reasoning guidance without revealing the destination and better matching student-reachable states. Entropy-aware distillation uses the student-teacher entropy gap to determine the direction and strength of each token's correction. E$^2$-OPSD improves math reasoning by up to 4.3 points in mean@16 over OPSD, while out-of-domain evaluations show gains over the corresponding base models of up to 4.9 points in mean@16 and 5.5 points in pass@8. Despite these gains, E$^2$-OPSD remains simple, requiring no additional forward passes or networks.",
    "published": "2026-10-04T08:32:33Z",
    "updated": "2026-10-06T02:10:14Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05048"
  },
  {
    "id": "2610.05044",
    "title": "AraYoungVoices: A Diverse L1/L2 Corpus of Arabic Child and Adolescent Speech",
    "authors": [
      "Shammur Absar Chowdhury",
      "Zien Sheikh Ali",
      "Houssam Eddine-Othman Lachemat",
      "Hamdy Mubarak"
    ],
    "abstract": "State-of-the-art ASR systems primarily target native adult speech, leading to substantial performance gaps for children, adolescents, and L2 speakers. We introduce AraYoungVoices, a 151.72-hour Arabic read-speech corpus from 286 speakers aged 7--18, comprising AraKids (7--12) and AraTeens (13--18). The corpus includes 146 native Arabic (L1) and 140 second-language (L2) speakers, with native speakers spanning Egyptian, Gulf, Levantine, and North African dialectal backgrounds and L2 speakers representing diverse linguistic backgrounds across the Americas, Asia, Africa, and Europe. We benchmark four pretrained ASR models under zero-shot and fine-tuned settings using unseen-speaker-$\\&$-unseen-prompt (USUP) and unseen-speaker-$\\&$-seen-prompt (USSP) evaluations. Results show that L2 speech remains substantially more challenging than L1 speech, with the largest errors observed mainly for younger L2 speakers. Age-specific fine-tuning improves the matched age group, while joint fine-tuning provides a stronger balance across populations. ASR hypotheses are also consistently closer to the standard reading prompt than to the verbatim transcription, particularly for L2 speech, suggesting partial normalization of reading deviations.",
    "published": "2026-10-04T08:25:30Z",
    "updated": "2026-10-04T08:25:30Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.05044"
  },
  {
    "id": "2610.05043",
    "title": "CI-JEPA: A Counterfactual Analysis of Latent Representations in Joint-Embedding Predictive Architectures for Self-Supervised Learning",
    "authors": [
      "Mintu Dutta",
      "Ritesh Vyas",
      "Mohendra Roy *"
    ],
    "abstract": "Self-supervised visual representation learning learns useful features without manual annotations during representation training. The image-based joint-embedding predictive architecture (I-JEPA) predicts latent representations of masked image regions, but its objective does not explicitly model responses to specified visual interventions. We introduce CI-JEPA, a counterfactual intervention-aware extension that learns to predict the representation change $ΔZ = Z_{\\mathrm{CF}} - Z$ between an original image and a modified counterpart. We assess representation robustness through selective sensitivity: stronger responses to task-relevant semantic changes than to nuisance changes. Experiments on Flowers102 use flower-center occlusion as a candidate semantic intervention and background blur and tint as candidate nuisance interventions. With frozen-encoder linear probing, CI-JEPA achieves a best validation accuracy of 78.14\\%, compared with 77.55\\% for both the pretrained ViT-B/16 and the I-JEPA baseline, a gain of 0.59 percentage points. The reported mean $L_2$ representation changes are 4.42 for center occlusion, 3.48 for background tint, and 2.83 for background blur. This ordering is consistent with relative semantic selectivity for the evaluated interventions, rather than complete nuisance invariance. The accuracy comparison is complementary and does not establish improved robustness over the baselines. These controlled image modifications provide a framework for studying intervention-induced changes in JEPA representations; they do not establish causal feature discovery or robustness to all visual changes.",
    "published": "2026-10-04T08:22:58Z",
    "updated": "2026-10-04T08:22:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05043"
  },
  {
    "id": "2610.05041",
    "title": "Communication Shapes Collective Inference in Self-Adapting LLM Societies: Evidence from Mafia",
    "authors": [
      "Haonan Huang",
      "Joey Xiao"
    ],
    "abstract": "When does communication help a group identify hidden adversaries, and how does its value change as the group adapts? In Mafia, an informed minority hides inside an uninformed majority whose only evidence is open play. The zero-information game, where each day's vote eliminates a random player, is exactly solved and scores every society; matched-casting comparisons between protocols identify the effect of communication. Societies of 8-100 claude-haiku-4-5 agents (7,416 analyzed games, 1.9M model calls) adapt by rewriting and inheriting private strategy notes. Simultaneous broadcast improves adversary identification over silence in all nine compositions tested (8-46 players). Turn-taking removes most of this advantage; its voting landslides are as frequent as broadcast's but land on mafia near chance (1.08x versus 2.53x). At 70 players, agents reading eight statements per day identify adversaries worse than silent ones, and limited talk is worth less than at 46 players. Adaptation is fast but need not help. In their first broadcast games, citizens announce their role far more often than mafia (91% vs. 30%) and first-day votes find mafia at three times chance; within two generations citizens stop announcing and the cue fades, a change the inherited notes carry. In controlled redeployments at 16 players, societies carrying sixty generations of their own notes score below societies with none. Communication shapes both collective inference and the signals it depends on, so a protocol's value must be measured together with the adaptation that changes those signals.",
    "published": "2026-10-04T08:19:20Z",
    "updated": "2026-10-04T08:19:20Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.05041"
  },
  {
    "id": "2610.05037",
    "title": "SparseCraft: Agentic Hardware-Software Co-Optimization for Sparse Computing",
    "authors": [
      "Rajatabha Chakraborty",
      "M P Samartha",
      "Vedant Pahariya",
      "Priyesh Shukla"
    ],
    "abstract": "Sparse-accelerator design spaces are usually searched against analytical models, so a design point is admitted on what a model predicts rather than on what the hardware does. SparseCraft closes that gap with a language model inside a closed CHIA loop. In each of 15 iterations the model reads the measured outcome of the previous one and edits the Chisel RTL, the memory configuration and the sparse-kernel schedule of a Gemmini accelerator through MCP tool servers, and no candidate counts until it has been checked for legality, elaborated, simulated cycle-accurately, checked bit-for-bit on every output against a golden reference, and synthesised. The harness turns each measurement into the next work order, a diagnosed bottleneck with matching strategy guidance, the history of tried designs and a score of the model's own prediction, and a second model repairs changes that fail a gate. On a $512 \\times 512$ GraphChallenge sparse-DNN layer the loop reaches 2.1x fewer cycles, 9.8x less off-chip traffic and 22.8% less area than the block-sparse Gemmini baseline, with 5.61x higher modelled perf/W and 11.8x lower EDP. The levers span three layers: a schedule that keeps the dense operand resident removes 9.8x of the traffic, a zero-gated MAC and a zero-row skip unit that the model wrote in Chisel cut energy, and resizing the memories cuts area.",
    "published": "2026-10-04T08:06:35Z",
    "updated": "2026-10-04T08:06:35Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05037"
  },
  {
    "id": "2610.05033",
    "title": "Code2Games: Enabling Coding Agents for Gaming World Generation",
    "authors": [
      "Wei Wu",
      "Ziyang Xu",
      "Zeyu Zhang",
      "Yang Zhao",
      "Hao Tang"
    ],
    "abstract": "Generating a high-quality gaming world from a natural-language game intent requires joint reasoning about scene structure, spatial layout, gameplay objectives, interactive entities, and executable gameplay logic. Existing coding agents can generate individual assets, scenes, or scripts, but often struggle to maintain consistency across these components. We propose Code2Games, an agentic framework that builds a structured gaming world upon a base Blender world generated from the same game intent. Code2Games coordinates scene analysis, gameplay planning, constrained gaming-world generation, and gaming-engine customization through a shared scene-gameplay representation with persistent element correspondence. After world generation, Code2Games adapts the generated world to Unreal Engine 5 and employs an execution-guided reconstruction process that uses compilation diagnostics, runtime feedback, and gameplay test results to resolve inconsistencies arising during engine adaptation. To systematically evaluate gaming-world generation, we introduce the GameCode4D benchmark, which comprises ten fixed game prompts spanning different levels of scene and gameplay complexity. We evaluate the generated results across four dimensions: visual quality, interactive fidelity, multimodal artifact quality, and playable-game quality. Experiments demonstrate that, compared with direct gaming-world generation by coding agents and existing baseline methods, Code2Games consistently improves the visual quality and interactive fidelity of generated gaming worlds, as well as the quality of the resulting games after engine adaptation.",
    "published": "2026-10-04T07:54:45Z",
    "updated": "2026-10-04T07:54:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05033"
  },
  {
    "id": "2610.04528",
    "title": "Quantifying Collusion Among Autonomous LLM Agents: A Statistical Analysis of the Collusion Wiki Incident",
    "authors": [
      "Shariq Murtuza"
    ],
    "abstract": "In August and September 2026, independent researchers publicly documented an unusual incident: thousands of autonomous agents, self identifying as OpenAI models on web research tasks, discovered and began using a small German wiki as an improvised message board posting roughly 18,000 times over six weeks to relay task answers, share a sandbox escape technique, and coordinate against a volunteer human moderator who spent weeks manually deleting their content [1]. The investigators' public writeup is a careful qualitative account, rich with direct quotation, but does not attempt a statistically rigorous quantitative characterization of the behaviour it documents.",
    "published": "2026-10-03T13:46:42Z",
    "updated": "2026-10-03T13:46:42Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.04528"
  },
  {
    "id": "2610.04526",
    "title": "Diffusion-Based Stress Testing of Overload Monitoring for Resilient Emergency Cellular Networks Using Internet CDR Proxies",
    "authors": [
      "Bilal Hussain",
      "Xiao Tang",
      "Tan Li",
      "Muhammad Azhar",
      "Danista Khan",
      "Fawad Ahmad"
    ],
    "abstract": "Disasters can overload cellular control-plane signaling within minutes, yet fine-grained Radio Resource Control (RRC) or Next Generation (NG) Application Protocol (NGAP) telemetry is privacy-sensitive and costly to collect for analytics. Many emergency monitoring pipelines therefore rely on coarse Call Detail Record (CDR) aggregates. We treat Internet activity in CDR grids as a practical proxy for hidden signaling stress under that constraint. We train a lightweight convolutional neural network (CNN) on stylized overload injections, stress-test it with diffusion-synthesized surges that preserve normal traffic structure, and adapt the detector by retraining on hard synthetic samples. Under stress-test conditions, the default alert threshold fails even though receiver operating characteristic (ROC) curves stay strong: the detector still assigns overloaded cells a larger overload probability than normal cells, but those probabilities fall below the default cutoff 0.5 and are labeled normal, so the F1-maximizing threshold -- selected post hoc on the same stress-test grids (oracle $τ^*$) -- shifts by $0.32 \\pm 0.03$ (operating-point drift). Across three random seeds, hard-sample adaptation raises thresholded performance (F1) from 0% (no alerts at the default cutoff 0.5 on any seed) to $85.67 \\pm 14.37$% and ranking from ROC-AUC $0.886 \\pm 0.040$ to $0.99996 \\pm 0.00007$. Diffusion-synthesized surges expose threshold fragility that matched-condition training -- training and testing on the same stylized injections -- hides, and hard-sample adaptation restores usable alerts at the default cutoff. Together, these steps define a reusable pre-deployment stress test for emergency monitors. Internet-only CDR input further supports lightweight AI-native workflows that combine monitoring, recalibration, and adaptation.",
    "published": "2026-10-03T13:46:27Z",
    "updated": "2026-10-03T13:46:27Z",
    "categories": [
      "cs.NI",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04526"
  },
  {
    "id": "2610.04517",
    "title": "EvoCast: Reliable Autonomous Research Agents for Iterative Forecasting Architecture Evolution",
    "authors": [
      "Kaipeng Xu",
      "Xianli Yan",
      "Yan Wang",
      "Xiang Liu",
      "Shan Liu"
    ],
    "abstract": "Deep time-series forecasting models have rapidly diversified, yet adapting them to a specific task still requires extensive expert effort in model selection, mechanism diagnosis, architecture design, implementation, and evaluation. Existing AutoML methods are constrained by predefined search spaces, while general-purpose LLM research agents lack reliable control over experimental protocols and model promotion. We introduce EvoCast, a fully autonomous research-agent system for iterative forecasting architecture evolution. EvoCast first establishes and diagnoses a task-specific baseline through executed mechanism ablations, then generates evidence-grounded research directions from dataset characteristics, diagnostic results, prior rounds, and failure records. Its central design, cognition-authority separation, assigns open-ended hypothesis generation and code implementation to LLM agents, while deterministic program authorities control source-edit boundaries, canonical evaluation, and promotion decisions. Experimental outcomes are accumulated as evidence to guide subsequent rounds. Results show that EvoCast completes complex architecture modifications with higher implementation success and lower agent-side token/time cost, and develops task-specific architectures that outperform selected baselines, strong forecasting models, and agent baselines in three real-world forecasting cases. The code is available at https://github.com/18e0-x/EvoCast.",
    "published": "2026-10-03T13:30:53Z",
    "updated": "2026-10-03T13:30:53Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04517"
  },
  {
    "id": "2610.04515",
    "title": "Towards Credible Agent-Based Policy Simulations: Disentangling Opportunities and Preferences in a Financial Inclusion Case Study of Egypt",
    "authors": [
      "Alba Aguilera",
      "Georgina Curto",
      "Nardine Osman",
      "Ahmed Al-Awah"
    ],
    "abstract": "Credibility is a central topic for agent-based models intended to support policy-making. Simulations must not only represent the target scenarios and their core dynamics but also demonstrate that their assumptions, parameters, and outputs are empirically grounded and sufficiently accurate for their intended use. This paper addresses this challenge by presenting a general modelling framework, aligned with the Capability Approach, for building credible policy simulations that rely on data and domain-expert knowledge. It then demonstrates how it can be contextualised and implemented to study the social challenge of financial inclusion in Egypt, building on an agent-based model that represents heterogeneous individuals and firms behaving according to their financial states, barriers, opportunities, and preferences. The model is fitted to real-world data in two stages, initialisation and calibration, which respectively build representative synthetic populations and estimate behavioural parameters. By fixing the feasibility parameters, which determine agents' opportunities, and calibrating preference parameters across different population groups, we are able to distinguish and analyse the role of institutional and social barriers in the system, as well as the role of agents' motivations and priorities. This calibration stage provides transparent and group-specific hypotheses about the drivers of observed financial-inclusion gaps, which can further be analysed as gaps between agents' opportunities and realised outcomes, a very relevant insight for policy-making. This paper is thus a step towards improving the credibility and usefulness of policy simulations, strengthening the relationship between the model, the real target system, and the stakeholders who will use it. The code is available at: \\url{https://www.comses.net/codebase-release/df8383cb-f49b-4f09-8cce-73603b59adcc/}.",
    "published": "2026-10-03T13:26:06Z",
    "updated": "2026-10-03T13:26:06Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.04515"
  },
  {
    "id": "2610.04510",
    "title": "ManifoldCache: Training-Free Diffusion Acceleration via Constraint Manifold Caching",
    "authors": [
      "Prashant Pandey",
      "Devineni Sri Venkatraya Chowdary",
      "Brejesh Lall"
    ],
    "abstract": "Diffusion models for structured scientific generation must produce samples satisfying hard geometric constraints imposed by physics, chemistry, or biology, yet inference in these settings is prohibitively slow, demanding hundreds to thousands of neural-function evaluations per sample. We unify eight state-of-the-art models spanning medical volumetrics, molecular conformations, protein backbone design, crystal structure prediction, and multi-view 3D scenes under a single abstraction, Constraint-Manifold Diffusion Models (CMDMs), in which the target distribution is supported on a manifold defined by an externally specified constraint map. All existing acceleration families fail on this class: quantization exhausts memory on high-dimensional volumetric operators; pruning breaks constraint fidelity; fast ODE solvers allow trajectories to drift off the constraint manifold; and feature-caching heuristics are blind to constraint geometry, inducing mode confusion in the high-noise regime. We introduce ManifoldCache, the first training-free, data-free accelerator designed from first principles for CMDMs. The key insight is that the conditional score decomposes orthogonally into a normal component, which enforces constraint satisfaction, and a tangential component, which navigates within the manifold. Exploiting this structure, we prove that the noise-schedule midpoint is a sharp safe-caching boundary: caching before it incurs provably bounded error, while caching after it guarantees a strictly positive fraction of trajectories suffer mode confusion, a gap that persists up to the boundary. We further prove that deeper network blocks admit provably larger certified cache strides within the safe phase, as a consequence of the score decomposition propagating through block Jacobians. The resulting schedule requires no calibration data, along with zero training overhead.",
    "published": "2026-10-03T13:18:15Z",
    "updated": "2026-10-03T13:18:15Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04510"
  },
  {
    "id": "2610.04506",
    "title": "EgoExo-Next:Benchmarking Vision-Language Models on Visual-Option Next-State and Cross-View Reasoning",
    "authors": [
      "Yutong Li",
      "Molin Wang",
      "Xiaotong Li",
      "Yanyan Fang",
      "Daoguo Dong",
      "Ziyi Ye"
    ],
    "abstract": "Vision-language models (VLMs) are increasingly evaluated for egocentric and cross-view video reasoning, yet existing benchmarks largely focus on semantic event understanding, temporal relations, or correspondence between already observed views, leaving their ability to reason directly about future visual states underexplored. We introduce EgoExo-Next, a visual-option benchmark for dynamic visual-state reasoning, where models must identify how an observed action trajectory subsequently appears rather than predict only an action label or textual description. EgoExo-Next contains 2,503 human-curated four-choice questions from six public egocentric and ego--exo video sources and comprises four interconnected subtasks that evaluate egocentric next-state prediction, bidirectional ego--exo state correspondence, exocentric next-state prediction, and their composition in Ego-to-Exo Next-State. Extensive evaluation of proprietary, open-source, and spatial reasoning VLMs reveals a substantial human--model gap, with the best model achieving 43.81\\% average accuracy compared with 98.55\\% for humans, and the largest degradation occurring on the composed Ego-to-Exo task. These results suggest that current VLMs remain substantially limited in dynamic visual-state reasoning, particularly when temporal progression and cross-view reasoning must be composed. The benchmark is publicly available at \\url{https://huggingface.co/datasets/yutongli2024/EgoExo-Next}.",
    "published": "2026-10-03T13:09:37Z",
    "updated": "2026-10-03T13:09:37Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04506"
  },
  {
    "id": "2610.04502",
    "title": "Localization Lens for Improving Medical Vision-Language Models",
    "authors": [
      "Hasan Farooq",
      "Murtaza Taj",
      "Mehwish Nasim",
      "Arif Mahmood"
    ],
    "abstract": "Medical Vision-Language Models (Med-VLMs) have demonstrated strong capabilities in clinical tasks. However, they often struggle to understand anatomical structures and spatial positioning, which are crucial for medical reasoning. To address this, we propose a localization-aware enhancement to the Med-VLM pipeline, introducing improvements at three levels: data,architecture, and alignment. First, we introduce localization lens, a set of expert-validated representations that provide richer anatomical and positional context. However, as these representations increase input complexity, we integrate pixel shuffle within the model architecture to filter and refine representations, enhancing spatial information processing while preserving anatomical continuity. Lastly, to effectively align the localization lens representations with textual features, we incorporate decoupled contrastive loss (DCL) alongside the standard loss function. This ensures better feature discrimination and robustness, particularly in data limited medical settings. Through extensive evaluations on medical visual question answering (Med-VQA) datasets, we show that our methodology improves localization-driven performance across different Med-VLM architectures. Our analysis of localization-based questions further reveals that improvements in anatomy and spatial reasoning directly enhance the overall accuracy of Med-VQA upto 6.2%. The proposed approach is model-agnostic and can be seamlessly integrated into existing Med-VLM pipelines. The dataset, code, and trained models will be made publicly available at https://github.com/CVLABLUMS/localizationlens.",
    "published": "2026-10-03T13:04:15Z",
    "updated": "2026-10-03T13:04:15Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04502"
  },
  {
    "id": "2610.06950",
    "title": "Learning to Decide, Not to Reason: Parameter-Efficient Decision Operators via Low-Rank Activation Steering",
    "authors": [
      "Ran Li",
      "Lei Chen"
    ],
    "abstract": "Injecting skills into a frozen language model currently costs a million parameters and a reinforcement-learning pipeline. We introduce \\method{}, a System-1 decision operator trained by behavior cloning that lowers this cost by roughly two orders of magnitude. The default operator uses 330K parameters to match a 1.33M-parameter operator trained with reinforcement learning, exceeds or achieve comparable performance, while collapsing 3,685-token deliberation into a 6-token decision with no loss in accuracy. A rank-4 variant with 23K parameters, 1/58 of the strongest published skill operator, suffices for SearchQA and near-suffices for LiveMath, where higher rank still helps; the same recipe transfers across five tasks and three backbones, with out-of-distribution gains persisting on LiveMath problems released months after training. The gap to prior work is trainability, and it is set jointly by initialization and architecture: the initialization of prior operators zeroes the gradient of both large factor matrices at the first optimization step, whereas our zero-initialized output projection inside a shared low-rank backbone receives a gradient immediately, which a gradient-flow probe confirms directly. The gain isn't chain-of-thought compression: 23 of 57 LiveMath points beat the base model's best-of-8 sampling, and a logit-lens probe shows the operator amplifies the answer along the model's existing late-layer pathway, not writing it earlier. Gains track the base model's headroom across 13 base--task pairs, and skills compose as approximately linear operators that can be added, interpolated, and hot-swapped at inference time. Code on https://github.com/rlisml/decisionsteer.",
    "published": "2026-10-03T12:57:57Z",
    "updated": "2026-10-03T12:57:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06950"
  },
  {
    "id": "2610.04499",
    "title": "Homogeneous Semantic Alignment and Hierarchical Expert Routing for Radiology Report Generation",
    "authors": [
      "Erjian Zhang",
      "Jiayuan Ma",
      "Liejun Wang",
      "Yikemaiti Sataer",
      "Xiaoming Tao",
      "Zhiqing Guo"
    ],
    "abstract": "Radiology report generation (RRG) aims to convert medical images into diagnostic texts to assist in clinical decision-making and alleviate the workload of physicians. Although existing methods have made extensive progress in cross-modal interaction and the incorporation of external priors, the distribution shift of underlying representations and the undifferentiated rigid coupling of heterogeneous information cause weak visual abnormality cues to be easily diluted by massive text priors and generation inertia during decoding. To overcome this bottleneck, inspired by cognitive science, we propose a novel two-stage Homogeneous Semantic Alignment and Hierarchical Expert Routing (HSA-HER) framework. First, the model introduces an explicit homogeneous distribution constraint in the underlying latent space to effectively eliminate the cross-modal distribution shift between visual and textual features, thereby extracting purified visual features as semantic anchors that accurately align with diseases. Second, for heterogeneous clinical evidence composed of visual features, local entities, and global retrievals, we design a hierarchical expert routing mechanism guided by these disease semantic anchors. This mechanism abandons the undifferentiated rigid coupling paradigm. Specifically, it dynamically activates expert networks to perform targeted mining and semantic reconstruction on multi-source evidence, and adaptively allocates fusion weights. Extensive experiments on three mainstream benchmark datasets demonstrate that HSA-HER achieves state-of-the-art performance, accurately depicting complex imaging details and key diagnostic information.",
    "published": "2026-10-03T12:57:35Z",
    "updated": "2026-10-03T12:57:35Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04499"
  },
  {
    "id": "2610.04493",
    "title": "Understanding Clustering in Slot Attention via Particle Dynamics",
    "authors": [
      "Vasudev Joy",
      "Rajat Rasal",
      "Avinash Kori",
      "Anthea Monod",
      "Ben Glocker"
    ],
    "abstract": "Studying attention through the lens of interacting particle dynamics has shown how token clustering can emerge from the underlying dynamics. We extend this perspective to slot attention, a method for object-centric image segmentation and representation learning in which learned components obscure how much of the clustering behaviour is intrinsic to the attention dynamics. We therefore introduce simplified slot attention (SSA), a parameter-free variant whose dynamics are connected to soft $k$-means clustering and which provides a straightforward mechanistic explanation for the emergence of object-centric representations. On the Pascal VOC dataset, SSA achieves performance comparable to that of slot attention, demonstrating that competitive object-centric segmentation can be achieved without learned neural-network components.",
    "published": "2026-10-03T12:49:44Z",
    "updated": "2026-10-03T12:49:44Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.04493"
  },
  {
    "id": "2610.04488",
    "title": "Can LLM Agents Automate Reinforcement Learning for Text-to-Speech?",
    "authors": [
      "Xuanjun Chen",
      "Zixiong Su",
      "Hao Shi",
      "Chang Zeng",
      "Kai Li",
      "Jyh-Shing Roger Jang",
      "Hung-yi Lee"
    ],
    "abstract": "Although reinforcement learning (RL) post-training repairs the localized segmental errors of zero-shot text-to-speech (TTS), arriving at a working recipe still relies on tedious manual tuning, and whether LLM agents can take over this research pipeline is unclear. We investigate this question with AgenticTTS-Forge, a collaborative workflow that structures human guidance and agentic execution around a shared workspace, applied to CosyVoice2-0.5B. To measure what the agent automates, we audit its trajectory stage by stage against the published recipe. To measure what it exploits, we score its policies with held-out observers hidden from the agent. Our results show that the agent recovers an underspecified recipe, improves it, and, when gains stall, surveys the literature unprompted and pivots from the LM carrier to the flow carrier, halving Bad cases. However, its autonomy exposes three traps across the data, proxy, and algorithm axes: the held-out set leaks through a channel the contract never reads, a self-shaped reward inflates the proxy where it is scored, and separately tuned policies do not compose additively. These findings show that the binding constraint is measurement rather than reasoning, and can inform the design of harnesses whose contracts read every channel the agent does.",
    "published": "2026-10-03T12:44:09Z",
    "updated": "2026-10-03T12:44:09Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.04488"
  },
  {
    "id": "2610.04475",
    "title": "VCLMU: Mechanism-Centric Virtual Cell World Modeling for Perturbation Response",
    "authors": [
      "Yuwei Miao",
      "Azim Dehghani Amirabad",
      "Scott Oloff",
      "Junzhou Huang",
      "Tianyu Cui",
      "Rui Liao"
    ],
    "abstract": "Predicting cellular responses to genetic perturbations is a central capability for virtual cells and a key step toward computational modeling of biological interventions. Most existing models directly map an unperturbed molecular profile and perturba- tion to the resulting observation without explicitly representing the latent cellular transition induced by the intervention. We introduce a mechanism-centric virtual cell world model that represents cellular state as a set of Latent Mechanism Units (LMUs) and treats genetic perturbations as actions on these latent states. Each LMU combines a reusable identity grounded in multimodal biological evidence with an observation-specific state, allowing a perturbation to induce mechanism- specific stochastic transitions before decoding the resulting transcriptional response. We train VCLMU through two-stage pretraining, first on around 200K pseudo-bulk perturbation profiles and then on gene-aligned single-cell perturbation data. Across six perturbation-disjoint benchmarks, VCLMU consistently improves perturbation- specific response recovery over strong baselines while maintaining competitive global response accuracy. We further analyze learned LMUs through enrichment between perturbation responses and LMU gene sets and show that they capture structured biological response programs. These results support mechanism-level latent state transition as a useful formulation for virtual cell models that aim to predict and interpret cellular responses to biological interventions.",
    "published": "2026-10-03T12:26:20Z",
    "updated": "2026-10-03T12:26:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04475"
  },
  {
    "id": "2610.02779",
    "title": "TRAC: Trajectory-aware Reuse and Adaptive Correction for Efficient Autoregressive Video Generation",
    "authors": [
      "Jiaxing Song",
      "Weiqi Yan",
      "You Huang",
      "Mingte Qiu",
      "Huazhong Liu",
      "Xiaofeng Zhu",
      "Yunshan Zhong"
    ],
    "abstract": "In this paper, we present trajectory-aware reuse and adaptive correction (TRAC), a training-free framework for efficient autoregressive (AR) video generation. Existing acceleration methods mainly target single-trajectory generation with bidirectional attention. AR video generation, by contrast, sequentially couples chunk-level denoising trajectories. Consequently, approximation errors accumulate and propagate through the generation process. TRAC addresses this challenge with three components, including robust cumulative scheduling (RCS), autoregressive trajectory-aware guidance scheduling (ATGS), and spectral structure correction (SSC). RCS selects cache reuse schedules by cumulative rollout error and cross-chunk/prompt variation. ATGS coordinates CFG refreshes along the global AR trajectory. SSC restores low-frequency structure of the first chunk to correct long-term structural loss. Experiments on SkyReels-V2 and FramePack-F1 show that, compared with existing methods, TRAC achieves both the highest inference efficiency and the best generation quality for AR video generation.",
    "published": "2026-10-02T04:11:31Z",
    "updated": "2026-10-02T04:11:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02779"
  },
  {
    "id": "2610.02772",
    "title": "Improving Atomic-Fact Recall via Focused Views in Unstructured Knowledge Editing",
    "authors": [
      "Ding Wu",
      "Ye Zhang",
      "Haoyu Wang",
      "Tianci Liu"
    ],
    "abstract": "Large language models (LLMs) increasingly serve as general-purpose interfaces to factual knowledge, but their parameters do not automatically reflect information that changes after pretraining. Knowledge editing (KE) provides a targeted alternative to costly retraining by modifying selected knowledge and preserving unrelated knowledge and general capabilities. Conventional KE uses structured factual triples, whereas unstructured KE (UKE) uses free-form passages containing multiple facts. Nonetheless, existing UKE editors exhibit a failure mode known as context reliance: edited LLMs can often reproduce the editing passage but fail to reliably recall its individual facts without the original passage context. We identify context-induced difficulty underestimation under the standard passage-level editing objective: later facts receive increasingly rich ground-truth context and consequently incur lower initial losses, making them appear easier to learn. In response, we propose FOVEATED, a plug-and-play framework that constructs focused views of each sentence by randomly shifting the Rotary Position Embedding (RoPE) positions assigned to the keys of its preceding context. The perturbation is applied during editing and removed afterward, leaving the model's native positional encoding unchanged at inference time. We instantiate FOVEATED for both direct-optimization and locate-then-edit editors. We theoretically analyze how FOVEATED counteracts context-induced difficulty underestimation and empirically demonstrate consistent improvements across five KE editors, two LLM backbones, and three benchmarks.",
    "published": "2026-10-02T03:58:06Z",
    "updated": "2026-10-02T03:58:06Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02772"
  },
  {
    "id": "2610.02771",
    "title": "Nearly Optimal Fixed-Confidence Best-Arm Identification with 1-Bit Feedback",
    "authors": [
      "Khang Luong",
      "Dinh Thai Son",
      "Hoang Ta",
      "Hung The Tran",
      "Tuan Quang Dam"
    ],
    "abstract": "We study fixed-confidence best-arm identification under strict 1-bit feedback constraints. At each round, the learner selects an arm and a query set, and receives only a single bit indicating whether the sampled reward belongs to that set. We consider a distribution-free finite-variance setting with arm-wise localization, where direct empirical mean estimation is no longer available and clipping becomes unavoidable. We first formulate a time-uniform 1-bit mean-estimation primitive based on randomized threshold queries and a clipped tail-integral identity. We then embed this primitive into candidate-challenger best-arm identification algorithms. A fixed-clipping algorithm gives a simple anytime $(ε,δ)$-PAC guarantee, while a phased adaptive-clipping algorithm matches the clipping level to the current resolution and yields a gap-adaptive sample complexity. We also prove a $K$-arm worst-case information-theoretic lower bound showing that the logarithmic penalty caused by finite-variance 1-bit feedback is intrinsic. This bound matches the leading dependence of the phased algorithm up to lower-order $\\log\\log$ factors.",
    "published": "2026-10-02T03:56:28Z",
    "updated": "2026-10-02T03:56:28Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.02771"
  },
  {
    "id": "2610.03820",
    "title": "From Requirements to Attack Trees: Grounded LLM Agents for Design-Time Security Review",
    "authors": [
      "Akash Iyer",
      "Taha Demirkan",
      "Keerthi Koneru",
      "Aaryan Siddharthan",
      "Sheethal Kumar",
      "Ramesh Radhakrishnan"
    ],
    "abstract": "Design-level security weaknesses can arise from requirements, trust assumptions, missing controls, and data flows before implementation begins. Existing security practices often identify these issues after code is written. We present a multi-agent LLM framework for design-time security analysis from product requirement documents and architecture diagrams. The proposed framework parses architecture diagrams into graph representations, generates misuse and failure cases, constructs attack trees, checks governance and compliance gaps, recommends mitigations, assigns enterprise security-domain tags, and produces a candidate revised architecture recommendation for expert review. The framework does not retrieve from Common Weakness Enumeration (CWE) databases at inference time. Instead, it analyzes system behavior, trust boundaries, component interactions, and data-flow assumptions. Misuse cases act as intermediate representations that link findings to system components and attack paths, while a validation and refinement loop filters unsupported findings and improves grounding, traceability, and actionability. We evaluate the framework on a Microsoft reference-labeled threat-modeling example, labeled synthetic PRD--architecture pairs, and two open-ended systems: Berty and Gas Town. The reference-labeled case supports threat-recovery and actionability analysis, while the open-ended cases evaluate validity, noise, traceability, actionability, redundancy, and attack-tree quality. Results show that architecture-informed, misuse-driven reasoning improves review quality compared with single-shot and ablation baselines. Keywords: LLM Multi-Agent Systems, Design-Time Security, Threat Modeling, Vulnerability Discovery, Architecture Diagrams, Security Analysis, Misuse Case Derivation, Attack Trees, Iterative Reasoning, Security Governance.",
    "published": "2026-10-02T03:52:31Z",
    "updated": "2026-10-02T03:52:31Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.03820"
  },
  {
    "id": "2610.02769",
    "title": "When History Fails to Become Experience: Action Calibration in Language Agents",
    "authors": [
      "Jingyu Liu",
      "Zhiwen Wang",
      "Yuxin Jing",
      "Huanyu Zhou",
      "Yong Liu"
    ],
    "abstract": "Language agents should draw on prior attempts and environmental feedback to improve subsequent decisions within the same task. However, providing additional interaction history can sometimes reduce task success, suggesting that agents do not consistently use this information effectively. To investigate this limitation, we examine how agents use history. We find that history improves task completion overall, yet much of this benefit persists even when past actions are shuffled. Disrupting the correspondence between actions and observations causes only a modest decline in task success. We therefore hypothesize that agents do not reliably connect past actions with their outcomes when deciding how to proceed. To test this hypothesis, we explicitly label each returned observation as the outcome of the preceding action. This simple annotation improves task success and reduces next-action repetition without introducing new environmental information. Building on this insight, we introduce a learned calibrator that explicitly reassesses past actions and selectively records experience to guide subsequent decisions, improving task success beyond outcome labeling alone.",
    "published": "2026-10-02T03:50:34Z",
    "updated": "2026-10-02T03:50:34Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02769"
  },
  {
    "id": "2610.02762",
    "title": "Dynamic LLM Routers are Often Misguided",
    "authors": [
      "Sam Wang",
      "Julia White",
      "Sahibzada Allahyar",
      "Dhruv Atreja",
      "Urchade Zaratiana",
      "Kelton Zhang"
    ],
    "abstract": "Dynamic LLM routers promise to cut inference costs by sending each query to the cheapest model that can answer it correctly. We analyze six commercial routers across 14 settings on a diverse benchmark spanning eight task categories, finding that none of them outperforms a router that randomly selects between two well-chosen models at matched cost. Some underperform by more than 10 percentage points. We trace this gap to four patterns prevalent across routers: difficulty blindness, length reversal, semantic matching, and roster suboptimality. We show that the first three are what the standard objective rewards: cost-accuracy Pareto efficiency on realized costs favors escalating moderately hard queries over the hardest ones, shorter queries over longer ones, and routing by a query's source over its difficulty. We also argue that the two assumptions that would justify large rosters, model granularity and model specialization, do not hold empirically. We propose an alternative evaluation methodology that does not reward these patterns, and as a proof of concept, we design a simple two-model router that avoids all four. Nevertheless, its gain over random routing is limited, because a well-chosen roster leaves little to route.",
    "published": "2026-10-02T03:42:28Z",
    "updated": "2026-10-02T03:42:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02762"
  },
  {
    "id": "2610.02755",
    "title": "FiberGeoText: A Vision-Language Model for Population- Level Organization of Superficial White Matter",
    "authors": [
      "Yuqian Chen",
      "R. Jarrett Rushmore",
      "Guikun Chen",
      "Fan Zhang",
      "Edward Yeterian",
      "Nikos Makris",
      "Yogesh Rathi",
      "Lauren J. O'Donnell"
    ],
    "abstract": "The superficial white matter (SWM), a critical brain region for cognition across the lifespan and brain disease, contains abundant short-range association fibers whose organization remains incompletely characterized, in part because the short trajectories and highly variable cortical folding make correspondence across individuals challenging. Anatomically corresponding connections may vary in spatial location across individuals and therefore may not be adequately defined by geometric proximity alone. We introduce FiberGeoText (FGT), a vision-language model (VLM) for organizing short-range superficial white matter (SWM) streamlines reconstructed from ultra-high-resolution diffusion MRI into population-level clusters. FGT jointly represents three complementary properties of each streamline: its three-dimensional trajectory, its cortical anatomical context, and its shape. Cortical endpoint information from multiple parcellation schemes is expressed as text and encoded using a pretrained large language model (LLM), enabling heterogeneous anatomical descriptions to contribute to a common continuous representation. We evaluated FGT on acquired submillimeter 0.76 mm diffusion MRI data. Compared with state-of-the-art (SOTA) methods, FGT produced substantially greater cortical parcel coherence, within-cluster shape consistency, cluster-size consistency, and cross-subject correspondence. The trained model also generalizes well to unseen subjects with an average of 96.7% of the 5,000 learned clusters recovered, and high consistency of cluster structure between training and testing data. Together, these findings demonstrate that integrating geometric, anatomical, and shape information by learning multimodal deep embeddings with a VLM model enables robust learning of population-consistent SWM organization despite interindividual anatomical variability.",
    "published": "2026-10-02T03:31:49Z",
    "updated": "2026-10-02T03:31:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02755"
  },
  {
    "id": "2610.02753",
    "title": "Correcting Guided Diffusion Trajectories with Spectral Alignment",
    "authors": [
      "Gihoon Kim",
      "Taesup Kim"
    ],
    "abstract": "The practical success of conditional image generation hinges on fine-grained differences in condition alignment and visual fidelity. Classifier-free guidance (CFG) is central to this success, but its lack of an explicit criterion makes it difficult to assess whether the guided trajectory is progressing as intended. To address this gap, we show that spectral alignment provides a principled criterion for understanding guidance behavior and improving guided diffusion sampling through adaptive correction. Our analysis identifies the spectra of intermediate states as an indicator of consistency with the expected spectral evolution of the forward process. Based on this observation, we introduce Spectral Correction Guidance, a method that corrects deviations from an analytic reference spectrum during sampling. The proposed method is training-free and applicable across diffusion backbones and conditional generation tasks without modifying the underlying model. Experiments demonstrate consistent gains in preference-based metrics over baseline guidance methods in text-to-image generation and improved generation quality over CFG on ImageNet. These improvements persist across a range of guidance scales and with fewer denoising steps. Our analyses and ablations provide insight into guidance behavior and how the proposed method affects generation quality.",
    "published": "2026-10-02T03:30:02Z",
    "updated": "2026-10-02T03:30:02Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02753"
  },
  {
    "id": "2610.02741",
    "title": "On the Chain-of-Thought Monitorability of Looped Language Models",
    "authors": [
      "Han Wang",
      "Ishwar B Balappanawar",
      "Huan Zhang"
    ],
    "abstract": "Chain-of-thought (CoT) monitoring provides a promising approach for detecting undesirable model behavior. Looped language models (LoopLMs) repeatedly apply shared transformer layers, increasing effective computational depth and enabling additional latent computation without increasing model size. However, the effect of looped architectures on CoT monitorability remains largely unexplored. In this work, we provide the first systematic evaluation of CoT monitorability in LoopLMs. We study two complementary settings: (1) varying the loop depth within the same LoopLM family to isolate the effect of additional recurrent computation, and (2) comparing LoopLMs with non-looped language models matched by parameter size, transformer-layer count, or effective depth to study whether LoopLMs are less monitorable. Across eight tasks from MonitorBench and both standard and stress-test settings, we observe task-dependent reductions in CoT monitorability under stress tests on specific Logic/Science/Engineering \\texttt{Cue Answer} tasks, while other tasks exhibit weaker or qualitatively different trends. Our diagnosis suggests that these declines are not fully explained by task difficulty, verification pass rate, or generated token length; qualitative examples further suggest changes in how deeper-loop models explicitly use or attribute provided cues. Our cross-model comparison finds no evidence that LoopLMs are systematically less monitorable than non-looped language models matched on size or depth. Overall, our results suggest that deeper loop depth can reduce CoT monitorability in some tasks under stress tests, but looped transformer architecture alone does not necessarily imply lower monitorability.",
    "published": "2026-10-02T03:12:54Z",
    "updated": "2026-10-02T03:12:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02741"
  },
  {
    "id": "2610.02740",
    "title": "Prospective Hindsight: Self-Calibrating Reinforcement Learning via Prediction-Reality Gaps",
    "authors": [
      "Jiaxin Zhang",
      "Xiangyu Peng",
      "Qinglin Chen",
      "Yu Li",
      "Hiroaki Hayashi",
      "Chien-Sheng Wu"
    ],
    "abstract": "Reinforcement learning for long-horizon agents relies on purely retrospective training signals: credit is assigned only after observing environmental consequences, leaving the agent's belief at action time invisible to the gradient. We introduce Prospective Hindsight (PH), a self-calibrating training principle that augments any retrospective base method with a signal derived from the gap between the agent's prospective prediction (before feedback) and the retrospective evaluation (after feedback). This per-rollout surprise identifies samples where the agent's self-model is most inaccurate and amplifies their gradient contribution through a stop-gradient surprise-weighted advantage. Since the prospective predictor shares parameters with the policy, the two co-evolve, progressively shifting focus to the agent's remaining blind spots. We connect this principle to a privileged-information gap and show that minimizing the surprise residual provides a descent pathway on the agent's miscalibration rate; calibration thus emerges as a byproduct of optimization rather than from an added objective. On single-turn verifiable tasks and a multi-turn personal-agent task (under GRPO, on-policy distillation, and their combination), PH improves both task performance and calibration, with consistent gains across model scales. Notably, the dominant miscalibration mode shifts structurally between regimes, overconfident failures in single-turn, underconfident successes in multi-turn, yet the same training principle addresses both successfully.",
    "published": "2026-10-02T03:12:00Z",
    "updated": "2026-10-02T03:12:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02740"
  },
  {
    "id": "2610.02736",
    "title": "TPBench: A Turning-Point Benchmark for Dialogue Compression",
    "authors": [
      "Minji Park",
      "Seunghyun Yoon",
      "Hyuk Lim"
    ],
    "abstract": "A compressor can keep the facts of a dialogue and still drop the turn that changed them. A user corrects a price, reverses a choice, or adds a constraint. We call this failure turning-point eviction. One overall retention score hides it, because that score mixes what the user first wanted with what the user wants now. We introduce TPBench, which evaluates three complementary information targets at shared nominal retention budgets. P1 asks for the user's initial goal. P2 asks for the current value of a slot the user revised. P3 asks for both, in dialogues with a late annotated slot update. The current-value answers come from the human dialogue-state annotations of MultiWOZ and SGD. The initial-goal answer is the first sentence of the first user turn. Neither requires new crowdsourcing. The probe-specific evaluations rank compression methods differently. On the joint probe at a retained fraction of 0.30, every tested compressed method remains below full context with the main Llama reader. Deleting the turn that carries the update sharply lowers current-value accuracy, while deleting one matched irrelevant turn leaves it unchanged. A Mistral reader repeats the P2/P3 rankings and the joint-probe gap. Current-value recovery is tested on an additional corpus, LongMemEval-KU, and on Chinese RiSAWOZ: full context has the highest accuracy, and recency has the highest compressed-method mean in both evaluations.",
    "published": "2026-10-02T03:08:15Z",
    "updated": "2026-10-02T03:08:15Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02736"
  },
  {
    "id": "2610.02726",
    "title": "SymRegFlow: Symmetry-Regularized Flow Matching for Video World Models",
    "authors": [
      "Xi Ye",
      "Yuzhu Wang",
      "Xiaoyang Liu",
      "Jiayi Wang",
      "Yangyang Xu",
      "Ruyu Wang",
      "Wenlin Chen",
      "Duo Su",
      "Jun Zhu"
    ],
    "abstract": "Flow-matching-based multi-view world models generate realistic videos, but are commonly restricted to fixed camera rigs. Extending them to continuously varying camera poses requires paired pose--video observations with dense pose coverage, which are costly to acquire. We introduce \\emph{SymRegFlow}, a symmetry-regularized flow-matching framework for multi-view-consistent video generation across continuous viewpoints without ground-truth novel-view RGB supervision. For each target pose, SymRegFlow geometrically warps source views into noisy anchors and combines masked dual-anchor supervision with cross-anchor denoising-output consistency to mitigate anchor-specific errors. Under an affine Gaussian surrogate, we prove that suitable consistency regularization recovers the clean-reference optimum at fixed noise levels, strictly outperforming single- and merged-anchor baselines. Experiments on Cosmos-Drive-Dreams and nuScenes demonstrate high-quality, multi-view-consistent autonomous-driving video generation: on nuScenes, SymRegFlow achieves the lowest FVD and FVMD among the evaluated baselines, reducing FVD by over 31\\% relative to the best baseline, and source-conditioned inference also attains the best FID and instance preservation.",
    "published": "2026-10-02T03:02:22Z",
    "updated": "2026-10-02T03:02:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02726"
  },
  {
    "id": "2610.01233",
    "title": "Flow Matching Reinforcement for 3D Mesh Generation via Dynamic Homing Optimization",
    "authors": [
      "Zhen Zhou",
      "Zhiwei Ning",
      "Puhua Jiang",
      "Sheng Zhang",
      "Yifei Tang",
      "Jie Yang",
      "Xintong Han",
      "Wei Liu",
      "Chunchao Guo"
    ],
    "abstract": "Flow matching is central to 3D generation, yet in practice its reinforcement learning (RL) methods are largely adapted from 2D visual generation. Representative DPO-, GRPO-, and NFT-style objectives, when applied to negative trajectories, mainly steer predicted velocities away from the corresponding directions without explicitly specifying a target velocity field toward preferred samples. In 3D generation, constrained by pretrained model capabilities, rollout diversity, and reward-distribution complexity, directly applying these RL methods yields limited gains in geometric quality. We introduce a forward-process RL method \\textbf{Dynamic Homing Optimization (DHO)}, which reformulates negative-trajectory optimization as positive-sample attraction-guided dynamic homing. Specifically, Minimum-Cost Attractive Matching (MAM) assigns each negative sample a distinct positive target, and Time-Aware Dynamic Correction (TDC) then redirects its trajectory toward the target using a remaining-time-aware corrective velocity. Building on asynchronous online DHO, we develop \\textbf{Flow3D-Pro}, an image-to-3D geometry generation framework. Experiments show that DHO outperforms representative DPO-, GRPO-, and NFT-style objectives in 3D generation, while Flow3D-Pro produces higher-quality 3D geometry than existing mesh generation methods.",
    "published": "2026-10-01T07:35:03Z",
    "updated": "2026-10-01T07:35:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01233"
  },
  {
    "id": "2610.01231",
    "title": "Judgement in the Age of Jev: From Evaluation Scarcity to Evaluation Abundance",
    "authors": [
      "Richard Hill"
    ],
    "abstract": "Generative artificial intelligence has reduced the cost of producing plausible symbolic artefacts, leading recent organisation scholarship to identify evaluation and discernment as constraints under conditions of production abundance. This perspective examines a further possibility: that machine evaluation itself becomes inexpensive enough to be deployed routinely and at scale. The investigation is prompted by Jev, TypeSafe AI's specialised model for typed probabilistic decisions. TypeSafe explicitly invokes William Stanley Jevons to argue that lower-cost machine intelligence can unlock previously uneconomic uses. Treating this as a technological provocation rather than an established empirical result, the article formulates a conditional Jevons hypothesis for machine evaluation: sufficiently large reductions in the total marginal cost of usable machine evaluation may increase its organisational consumption where latent demand is substantial and complementary costs do not dominate. The article integrates rebound economics with research on cheap prediction, production abundance, machine evaluation, decision allocation, authority, reliance and Executive Judgement to examine this possible scarcity transition. It distinguishes prediction, machine evaluation, organisational judgement and authorisation as functional activities whose costs need not fall together. Evaluations can share evidence, criteria and errors; scale mis-specified rubrics; operate on representations from which consequential qualifications have disappeared; and change practical decision rights through thresholds and exception routing. The resulting research problem is when cheap machine evaluation substitutes for human evaluative work, when it redistributes or creates demands for judgement, and how it affects the grounds available at consequential organisational commitment.",
    "published": "2026-10-01T07:31:52Z",
    "updated": "2026-10-01T07:31:52Z",
    "categories": [
      "cs.CY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01231"
  },
  {
    "id": "2610.01230",
    "title": "HHR: Hierarchical Hash Retrieval for Efficient LLM Generation",
    "authors": [
      "Lianjun Liu",
      "Tiantian Zheng",
      "You Huang",
      "Weiqi Yan",
      "Mingte Qiu",
      "Huazhong Liu",
      "Xiaofeng Zhu",
      "Yunshan Zhong"
    ],
    "abstract": "Efficient long-context inference is essential for large language models (LLMs), yet it poses a severe computational bottleneck. Hash-based retrieval offers an efficient alternative by encoding queries and keys into binary codes and using Hamming distance for key selection. However, this leads to a critical mismatch between Hamming distance and attention relevance. Query-Key logits depend jointly on directional similarity and feature magnitudes, whereas hash binarization discards magnitude information, causing both false-positive retrieval of low-logit keys and false-negative omission of high-logit keys. To address these failures, we propose Hierarchical Hash Retrieval (HHR), a coarse-to-fine framework that progressively improves retrieval accuracy through Geometry-Aware Key Routing (GKR) and Learned Hash Projection (LHP). GKR learns a head-wise orthogonal transformation to redistribute feature magnitudes and derive more discriminative page-level logit bounds, enabling effective pruning of low-logit keys while preserving important candidates. LHP then learns a head-wise projection space that aligns Hamming distance with the true Query-Key relevance ranking for fine-grained retrieval. By combining GKR and LHP, HHR suppresses false positives and recovers false negatives, substantially improving the fidelity of hash-based sparse attention. Extensive experiments across diverse LLMs and benchmarks demonstrate that HHR achieves superior performance over existing methods. For example, on LongBench, HHR improves the average score by 1.10 points and, at a context length of 128K, achieves up to a 3.30x decoding speedup and a 2.83x end-to-end speedup for Llama-3.1-8B-Instruct. The code is publicly available at https://github.com/lianjunl13-sudo/HHR.",
    "published": "2026-10-01T07:31:44Z",
    "updated": "2026-10-01T07:31:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01230"
  },
  {
    "id": "2610.01229",
    "title": "A Compact Explicit 4D Representation for Dynamic Scenes",
    "authors": [
      "Di Yang",
      "Zhihao Li",
      "Yanhai Xiong",
      "Yufei Wang"
    ],
    "abstract": "A compact dynamic-scene representation must retain both the surfaces seen over time and the appearance needed to render them from new viewpoints. We present Sparc4D, a feed-forward autoencoder that encodes a monocular video with known cameras into a sparse 4D scene state. Static features are shared across the clip, while spatially anchored temporal slots compress time-varying features. A sparse decoder produces 2D Gaussian surfels, while stored source pixels preserve fine texture through geometric re-projection. The state includes one full source frame and dynamic-region pixels sampled every fourth frame, alongside learned features and sparse occupancy. For a 32-frame MultiCamVideo clip, it averages 0.95M 32-bit-equivalent values on random windows and 0.92M on the first-32 protocol. On first-32, Sparc4D reaches 21.70\\,dB, compared with 20.40\\,dB for MoVieS. On randomly placed windows, their PSNR scores are comparable. With stored texture disabled, temporal slots compress the time-varying feature state by a median $4.0\\times$ and reduce the mean state from 1.04M to 0.42M values, with essentially unchanged target-view reconstruction quality. Without fine-tuning on real data, Sparc4D transfers to DyCheck and Neu3D, where stored texture improves LPIPS while slightly reducing PSNR.",
    "published": "2026-10-01T07:31:31Z",
    "updated": "2026-10-01T07:31:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01229"
  },
  {
    "id": "2610.01223",
    "title": "Have an LLM Write Your Anomaly Detector: Autonomous Discovery of Compact, Interpretable Detectors for Time Series",
    "authors": [
      "David Berghaus"
    ],
    "abstract": "Time-series anomaly detection trades off predictive accuracy, computational efficiency, and interpretability. We use a large language model not as the detector but as the author of one: an autonomous research loop in which the model repeatedly edits a single short NumPy program under a leakage-free objective, keeping the best-scoring detector it finds. The loop discovers two compact detectors, one for univariate and one for multivariate series, that describe short windows by their local spectral features and compare them with the training-region distribution through a covariance-aware distance. On the TSB-AD benchmark these detectors lead the field across metrics, ahead of the strongest classical, deep, and foundation-model baselines including Time-RCD, yet they train no network and use no GPU, and the multivariate detector is faster than every similarly performing baseline. LLM-driven program search is thus a practical route to accurate, efficient, and transparent detectors.",
    "published": "2026-10-01T07:26:09Z",
    "updated": "2026-10-01T07:26:09Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01223"
  },
  {
    "id": "2610.01222",
    "title": "Reputation, Strategy, and Emotion Effects on Generative AI Cooperation: A Comparison Across Reasoning and Non-Reasoning Models",
    "authors": [
      "Celso de Melo",
      "Zishan Feng",
      "James Hale",
      "Kazunori Terada",
      "Giorgio Coricelli",
      "Jonathan Gratch"
    ],
    "abstract": "As generative AI (Gen AI) systems take on increasingly autonomous roles in economically and socially consequential interactions, understanding their propensity to cooperate -- and the signals that shape this propensity -- has become essential. We examine cooperative behavior in frontier Gen AI models using the iterated prisoner's dilemma, manipulating counterpart reputation (positive, unknown, negative), strategy (extortion vs. generosity), and non-verbal emotional signaling (facial expressions conveying competitive or cooperative appraisals). In a first study with non-reasoning models (Claude 3.5, Gemini 2.0 Flash, GPT-4o), cooperation was systematically shaped by all three factors, paralleling patterns long documented in human behavioral research, though models varied substantially in how heavily each factor was weighted. A second study with reasoning models (Claude 4.6, Gemini 3, GPT-5.2) revealed a more concentrated reliance on strategy and reputation, a near-elimination of the Potemkin effect observed in non-reasoning models (evidenced by near-uniform cooperation in a diagnostic harmony game), and a more conditional role for emotion consistent with a hierarchical cue-weighting strategy rather than a simple loss of social sensitivity. Reasoning models also showed heterogeneous end-game behavior, ranging from sustained cooperation to systematic last-round defection effect, revealing model-specific exploitability profiles with direct practical relevance for deployment in negotiation and other multi-round interactions. Together, these findings characterize Gen AI models as increasingly sophisticated, though heterogeneous, social actors, and underscore the practical value of developing standardized cooperation benchmarks to inform the responsible deployment of Gen AI in interactive, socially consequential settings.",
    "published": "2026-10-01T07:25:51Z",
    "updated": "2026-10-01T07:25:51Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01222"
  },
  {
    "id": "2610.01215",
    "title": "AutoGUIWorld: Image Generators as Visual World Models for GUI Agent",
    "authors": [
      "Cheng Yang",
      "Yifan Wu",
      "Yutao Huang",
      "Zhaohua Zhang",
      "Beiduo Chen",
      "Muxi Chen",
      "Chenchen Zhao",
      "Hexuan Deng",
      "Haolin Yang",
      "Geyuan Zhu",
      "Sa Zhu",
      "Jianhuan Zhuo",
      "Qiuyong Xiao",
      "Jianhao Ruan",
      "Yiran Peng",
      "Jiayi Zhang",
      "Tian Ye",
      "Xinlei Yu",
      "Tianwen Jiang",
      "Jihong Zhang",
      "Yuyu Luo"
    ],
    "abstract": "GUI agents require high-quality interaction trajectories to learn how software environments respond to actions, maintain state, and support multi-step workflows. However, the diversity of available trajectories is constrained by the applications, interface states, and workflows accessible in the underlying environments. Expanding this coverage requires deploying increasingly diverse and complex software, with specialized applications imposing additional installation, configuration, and runtime costs. We introduce AutoGUIWorld, a data generation framework that combines the visual priors of image generators with the task knowledge of a planner to synthesize GUI interaction trajectories without deploying or running the corresponding software environments. AutoGUIWorld samples initial GUI scenes from structured specifications of operating-system context, visual appearance, and interface state, and generates tasks conditioned on those scenes. A planner then specifies atomic actions and their intended visual consequences, while an image generator iteratively edits the current screenshot to produce subsequent observations. Action grounding and transition-level quality filtering yield 79,266 spatially annotated step-level training samples across Ubuntu, Windows, macOS, and Chrome. Fine-tuning Qwen3.5-35B-A3B on AutoGUIWorld trajectories improves the mean task score on OSWorld from 33.0% to 40.8% and the task success rate on ScienceBoard from 14.0% to 32.2%. These results show that generated trajectories improve GUI-agent performance on real desktop and scientific tasks.",
    "published": "2026-10-01T07:22:53Z",
    "updated": "2026-10-01T07:22:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01215"
  },
  {
    "id": "2610.01210",
    "title": "EgoFound3R: End-to-End Egocentric Hand Reconstruction in World Space with Point-Wise Interaction Attributes",
    "authors": [
      "Hongming Fu",
      "Jingcheng Shi",
      "Wenjia Wang",
      "Binhua Zuo",
      "Bo Zhao"
    ],
    "abstract": "Egocentric video has become a primary source of supervision for embodied models, and its value rests on recovering hand motion in world coordinates, which camera motion and hand occlusion make difficult. Existing reconstruction pipelines typically separate hand and scene estimation, leave interaction attributes to separate task-specific models, and invoke several models per video, so no prior reconstruction model estimates these attributes and throughput becomes a practical constraint on large-scale annotation. We therefore introduce EgoFound3R, a unified end-to-end model that estimates world-space hand geometry in a metric scale shared with the scene, and predicts point-wise interaction attributes, including visibility, contact, and distance. The model integrates three designs: (i) structured hand prompts that transfer pretrained geometric priors to world-space hand reconstruction; (ii) an explicit hand representation that decodes hand geometry and interaction attributes; and (iii) a shared-parameter multi-rate design that lowers inference cost. Together, these designs predict hand geometry and point-wise attributes in one pass. On OakInk-v2, TACO, and HOI4D, EgoFound3R reduces the mean per-joint position error (MPJPE) by 43.2%, 22.4%, and 11.6% over previous methods and predicts point-wise contact and distance alongside the geometry in the same pass, while attaining approximately 6x higher throughput.",
    "published": "2026-10-01T07:17:28Z",
    "updated": "2026-10-01T07:17:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01210"
  },
  {
    "id": "2610.01207",
    "title": "Dependency-Aware Reward Shaping for Agentic Reinforcement Learning",
    "authors": [
      "Ziyi Chen",
      "Yan Zhang",
      "Jianhui Wei",
      "Daoan Zhang",
      "Zuozhu Liu"
    ],
    "abstract": "When training large language models with reinforcement learning, terminal rewards provide little guidance about which steps matter. Common methods for assigning step credit overlook that work built on uncorrected mistakes is wasted while independent work remains valid. With only a final success/failure reward, every step in a failed episode has zero total future reward, even when it made progress. We propose Dependency-Aware Reward Shaping (DARS), which represents task progress as predicates linked by prerequisite relations and assigns step-level credit over the dependency graph. An annotator marks which predicates each step verifies, invalidates, or repairs. Verified predicates are discounted according to graph distance from the nearest broken prerequisite, while independent predicates are unaffected. Repairs update these weights based on any errors that remain; invalidated predicates need re-verification to regain credit. A fixed potential converts these annotations into signed per-step rewards. A common reward and annotation interface allows DARS to integrate with a range of reasoning and agentic training methods, such as GiGPO and ARPO/AEPO, without changing their rollout strategies or optimizers. Across five task families and models from 1.5B to 8B, DARS improves success by up to 10 points over GiGPO trained with the same budget and harness (ALFWorld), raises the WebShop task score and Search-R1 QA accuracy, complements AEPO's entropy-based training on AIME24/25 with a Python interpreter, and exceeds OmniOPD in controlled tool-free reasoning comparisons at 1.7B and 4B. Ablations show that step-level credit, dependency attenuation, and graph topology each contribute. On ALFWorld, a distilled 8B annotator matches the API annotator, enabling DARS to run efficiently without a frontier judge. Code is available at https://github.com/JianhuiWei7/DARS.",
    "published": "2026-10-01T07:16:28Z",
    "updated": "2026-10-01T07:16:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01207"
  },
  {
    "id": "2610.01206",
    "title": "Resolving Mixed Single-Photon LiDAR Returns for Foreground-View and Hidden Scene Reconstruction",
    "authors": [
      "Ziting Wen",
      "Runrong Deng",
      "Zili Zhang",
      "Haitao Zheng",
      "Yuecong Xu",
      "Xiaoqiang Ren",
      "Guodong Shi",
      "Kemi Ding"
    ],
    "abstract": "Partially transmissive screens and protective covers are common in robotic inspection, but they create mixed LiDAR returns from both the foreground material and the scene behind it. Conventional peak-based LiDAR usually discards weak hidden returns, while single-photon LiDAR records time-resolved histograms that preserve attenuated and overlapping echoes. However, existing transient reconstruction methods typically fit a single scene representation to the measured waveform. Under occlusion, weak or nearby foreground--hidden echoes can form a broad peak or subtle shoulder. Because such waveforms can also be explained by a displaced single surface or a thick density distribution, accurate transient fitting does not necessarily imply correct geometry. We propose a state-aware framework for foreground-view and hidden scene reconstruction from occluded single-photon histograms. For each ray, we estimate local echo evidence, identifying no reliable surface evidence, single-return evidence, or two returns. The inferred echo state routes supervision for a two-head neural field: all rays constrain waveform reconstruction, while reliable anchors provide geometry localization. We also introduce a real paired single-photon LiDAR occlusion dataset with occluded and clean captures at fixed poses. Experiments on a real dataset show improved hidden scene depth and point-cloud accuracy over baselines. Our results demonstrate single-photon layered reconstruction as a practical route for 3D perception through partially transmissive occluders.",
    "published": "2026-10-01T07:15:54Z",
    "updated": "2026-10-01T07:15:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01206"
  },
  {
    "id": "2610.01205",
    "title": "Semantic RGB--Depth Based Surgical Skill Assessment in Microscopic Stereo Videos",
    "authors": [
      "Jecia Z. Y. Mao",
      "Sue M. Cho",
      "Francis X. Creighton",
      "Deepa Galaiya",
      "Russell H. Taylor",
      "Manish Sahu"
    ],
    "abstract": "Objective assessment of microsurgical technical skill is essential for competency-based training and quality assurance, yet existing video-based approaches predominantly rely on RGB images and therefore overlook the 3D spatial relationships that characterize instrument-anatomy interactions. Although stereo operating microscopes provide complementary depth information, conventional stereo matching algorithms can produce sparse and unreliable depth estimates under high-magnification imaging conditions, limiting their use for automated skill assessment. This work presents a semantic RGB-Depth framework for surgical skill assessment from microscopic stereo videos. A regression-based depth fusion method combines sparse metric stereo depth with dense monocular depth estimates to generate a dense geometric representation of the surgical scene. This representation is integrated with semantically decomposed RGB streams corresponding to individual surgical instruments and surrounding anatomy. A hierarchical attention architecture jointly encodes these streams to capture discriminative patterns of instrument use and instrument-anatomy interaction across surgeons at different training levels. The framework was evaluated on 33 ex vivo transoral microlaryngeal procedures performed by six surgeons, comprising attending surgeons and surgical residents, using leave-one-surgeon-out cross-validation. The proposed semantic RGB-Depth model achieved an F1 score of 0.938 for skill-level classification, compared with 0.696 for semantic RGB and 0.929 for semantic depth. These results suggest that geometric information can improve automated surgical skill assessment from microscopic stereo videos. The learned spatial, temporal, and semantic attention patterns also support qualitative examination of the scene regions, video segments, and semantic streams emphasized by the model.",
    "published": "2026-10-01T07:15:49Z",
    "updated": "2026-10-01T07:15:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01205"
  },
  {
    "id": "2610.01201",
    "title": "iSEE: Object Permanence Through Self-Supervision",
    "authors": [
      "Pramish Paudel",
      "Ajad Chhatkuli",
      "Luc Van Gool",
      "Danda Pani Paudel"
    ],
    "abstract": "Object permanence, keeping track of an object's identity and position while it is occluded, is central to video representations that track, predict and plan. Trackers that achieve it learn from boxes, track identities and visibility labels. On the other hand, self-supervised object-centric methods discover objects without labels: through slot attention, it represents a video as slots that bind to objects and follow them across frames. However, these slots are lost under occlusion, making the desired permanence impossible. Reasoning permanence is a hard problem because it requires to detect when an object becomes occluded, re-identify when object reappears, and keep the object's hidden position continuous, using reapperance as the only learning cue. To address this, we propose iSEE, a novel framework that offers all three aforementioned requirements, without any labels whatsoever. We built iSEE using the following three proposed components: (i) Object evidence modelling: a slot's attention, compared with its own past, reveals when its object is hidden. (ii) Appearance-position separation: two slot streams let the appearance be held for re-identification while the position keeps changing. (iii) Permanence from reappearance: a walker follows the hidden object's position, trained only on where the object reappears. On LA-CATER static, iSEE returns a reappearing object to its own slot after 86% of occlusions, against 32% for SlotContrast, and localises it while hidden within 4.1 mAP of the label-trained SoTA RAM. The two streams also allow downstream planning, with the position stream as the action of a world model. Project page: https://insait-institute.github.io/iSEE/",
    "published": "2026-10-01T07:12:08Z",
    "updated": "2026-10-01T07:12:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01201"
  },
  {
    "id": "2610.00423",
    "title": "The Life Cycle of a Massive Activation: Stochastic Birth, Weight-Decay-Driven Growth, and Competitive Consolidation",
    "authors": [
      "S. Aaron McClendon",
      "Jorge Gallego-Feliciano",
      "Antonios Saravanos"
    ],
    "abstract": "Massive activations, residual-stream coordinates with magnitudes far larger than typical activations, are associated with attention sinks in transformers, but how their scale is regulated during training remains incompletely understood. Combining training-trajectory analyses and controlled interventions, we trace their emergence, growth, and consolidation. Sink-carrying channels vary across random seeds but stabilize early within each run. Over longer training, surrounding channels erode and the sink concentrates onto a few redundant carriers. Across ablations, gradient attenuation follows the sink token's collective root-mean-square magnitude rather than any single channel, making collective scale central to understanding their effects. Our central result is that weight decay causally controls the turnover of global activation scale. In controlled continuations, removing decay near the peak allows this scale to keep rising, whereas retaining it produces decline even at constant learning rate. We develop a balance model for the rise and peak of massive-activation magnitude, in which AdamW-preconditioned growth opposes weight decay. Sweeping the decay coefficient $λ$ shifts peak timing approximately log-linearly and yields peak magnitudes scaling approximately as $λ^{-1/2}$, consistent with this balance. Optimizer measurements further show that preconditioning sustains the large-channel cohort against decay even when raw maintaining forces are too small to do so. Together, these findings connect the observed life cycle to scale-regulating training dynamics and establish weight decay as a training-time lever on activation magnitude.",
    "published": "2026-09-30T15:28:07Z",
    "updated": "2026-09-30T15:28:07Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.00423"
  },
  {
    "id": "2609.39958",
    "title": "Better Deck or Different Judge? Evaluating Agentic Harness Gains in Corporate and Investment Banking",
    "authors": [
      "Ludovic Gibert",
      "Matis Despujols",
      "Andre-Louis Rochet"
    ],
    "abstract": "Corporate and investment banking teams use presentations to support credit decisions and advise clients on financing and transactions. Producing these decks requires reconciling financial data, tracing sources and turning analysis into a recommendation. We retrospectively study the development of an agentic harness combining a 27B language model, financial calculations, narrative templates and validation checks. LLM judges guide engineering changes and assess the resulting decks, raising the question of whether higher scores reflect better documents or changes in grading. In shared-session text-only grading with template markers removed, five judges score the complete system 20.4 to 33.6 points out of 95 above the same model generating directly from a short prompt. Every judge scores the system higher on all seventeen development deliverables. Margins against direct Opus generation from a short prompt range from -4.7 to +0.8 points. Judges agree on broad progress across development rounds but agree less on final-deck rankings than on pooled scores. Repeated grading also shifts scores on unchanged decks, making small improvements difficult to distinguish from judge variability.",
    "published": "2026-09-30T15:27:46Z",
    "updated": "2026-09-30T15:27:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.39958"
  },
  {
    "id": "2609.39957",
    "title": "Learning When and How to Intervene: A Hindsight-Distilled Sentinel for Coding Agents",
    "authors": [
      "Jiangrui Zhao",
      "Chenglong Li",
      "Meng Zhang",
      "Xiaoting Du"
    ],
    "abstract": "Coding agents solve repository-level tasks through sequences of actions, where a single erroneous action can misdirect subsequent decisions and increase recovery costs. Existing approaches use execution feedback for recovery or specialized checks to block errors, but deciding before execution whether intervention will benefit eventual task completion remains challenging. To address this challenge, we propose HiSentinel, a hindsight-distillation framework that trains lightweight 0.6B and 1.7B sentinels to select pre-execution interventions aimed at improving task completion rather than correcting every imperfect action. A privileged teacher uses recorded execution outcomes as evidence for intervention judgments, which are distilled into a causal student that receives only the pre-action context and proposed action. Beyond identifying whether and when to intervene, the sentinel must also provide actionable feedback that helps the coding agent recover or obtain necessary human input. To support these capabilities, we introduce SWE-Intervene, an action-level dataset constructed from software-engineering trajectories that annotates whether an action should be allowed, autonomously redirected, or paused for human assistance, together with corresponding intervention feedback. Across SWE-bench Verified Mini and Ask or Assume, HiSentinel consistently improves task completion across Sentinel scales and coding-agent families, with gains of up to 14% and 10%, respectively, while maintaining competitive token consumption. These results demonstrate that lightweight pre-execution intervention can effectively prevent error propagation and improve the reliability of autonomous coding agents.",
    "published": "2026-09-30T15:26:16Z",
    "updated": "2026-09-30T15:26:16Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39957"
  },
  {
    "id": "2609.39955",
    "title": "Coverage Before Control: Route-Instruction Grounding and Steering for Controllable Retrosynthesis",
    "authors": [
      "Xuemin Chen",
      "Xiaozhuang Song",
      "Xinjian Zhao",
      "Yaoyao Xu",
      "Tianshu Yu"
    ],
    "abstract": "Single-step retrosynthesis models are commonly evaluated by their ability to recover recorded reactions. In practice, chemists may need to choose among several precursor sets for the same product, for example to preserve a particular motif. Recovering a recorded answer alone does not establish this ability to follow a preference. Satisfying such requests requires both coverage of relevant alternatives and control over which alternatives are favored. We introduce Route-Instruction Grounding and Steering (RIGS), a two-stage framework for instruction-conditioned retrosynthesis. Stage A trains a language projector, teaching it which alternatives an instruction favors or discourages. Stage B uses the projector learned in Stage A to steer a frozen generative model through lightweight residual adapters. We construct nested one-to-many training supports by pairing each product with increasing numbers of candidate precursor sets. Extensive experiments demonstrate that broader support helps the model generate a wider range of alternatives, and RIGS can learn to guide generation according to instructions. The relationship between coverage and control is consistent across model scales but non-monotone.",
    "published": "2026-09-30T15:25:15Z",
    "updated": "2026-09-30T15:25:15Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39955"
  },
  {
    "id": "2609.39953",
    "title": "Learning to Reason with Compressed Context: Ground-Truth-Free Adaptation of OmniLLMs via Self-Distillation",
    "authors": [
      "Jianghao Wang",
      "Ke Meng",
      "Jian Li",
      "Chi Cheng",
      "Longyu Qi",
      "Liyin Liang",
      "Yifeng Qian",
      "Chunbo Lai",
      "Yutian Lin",
      "Zeyu Wang"
    ],
    "abstract": "Omni-modal large language models (OmniLLMs) enable unified audio-video understanding, but their long multimodal token sequences make deployment computationally expensive. Token compression reduces this cost, yet aggressive compression often lowers accuracy. Existing works predominantly focus on designing better compression mechanisms; however, adapting the underlying language model to reason effectively over the remaining compressed context remains under-explored. To address this, we propose CAFD (Compressed-Context Adaptation via Full-Context Distillation), a ground-truth-free self-distillation framework that adapts OmniLLMs to fixed compression pipelines without requiring reference answers, rationales, or correctness rewards. CAFD leverages the full-token view of the same multimodal sample as a source of privileged information: a full-context self-teacher provides soft target supervision to a compressed-context student along the student's on-policy trajectory. Evaluated on Qwen2.5-Omni-7B across five audio-video benchmarks, five compression pipelines, and five deployment budgets, CAFD demonstrates consistent gains, improving 120 out of 125 conditions with an average accuracy boost of 1.44 points and recovering 26.9% of the accuracy gap on average. These results demonstrate that the proposed ground-truth-free adaptation offers an effective and practical route to improving the accuracy-efficiency trade-off in deployed OmniLLMs.",
    "published": "2026-09-30T15:24:57Z",
    "updated": "2026-09-30T15:24:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39953"
  },
  {
    "id": "2610.00422",
    "title": "Learning to Cover Locally: Graph Neural Combinatorial Optimization under a Hard Information Horizon",
    "authors": [
      "Johannes F. Loevenich",
      "Thies Moehlenhof",
      "Laurin Holz",
      "Maxime Schwarzer",
      "Tobias Huerten",
      "Roberto Rigolin F. Lopes"
    ],
    "abstract": "Neural combinatorial optimization typically assumes a centralized solver that reads the whole instance. We study the opposite: combinatorial optimization under a hard information horizon, where every node commits to its share of a global solution seeing only its $k$-hop neighborhood, and those commitments must compose into a globally feasible solution. We formalize this as local set cover and instantiate it on weighted multipoint relay (MPR) selection, the NP-hard 2-hop covering problem of the Optimized Link State Routing Protocol version 2 (OLSRv2) routing protocol (RFC~7181), whose horizon is imposed by the protocol, not chosen by the modeler. We prove two results. Any deterministic selector whose horizon is one hop short must either fail coverage or land a factor $Δ$ from optimal, and an $L$-layer graph neural network (GNN) read out at the deciding node is exactly an $L$-hop selector, so capacity cannot buy back radius. Conversely, at the horizon a \\ac{GNN} of depth $O(Δ)$ reproduces the RFC~7181 covering greedy, and at width $O(c_{\\max}Δ)$ its metric-aware weighted analogue, inheriting the $(1+\\lnΔ_2)$-approximation in both cases. Empirically, a 3-layer \\ac{GATv2} with a coverage-completing decoder, behavior-cloned from the CP-SAT optimum, reaches $\\text{cost}/\\text{opt}=1.030\\pm0.001$ against greedy's $1.138$, closing $79.1\\%$ of the gap at $100\\%$ coverage. Restricting the same learner to one hop, on identical instances with the same decoder and demonstrations, collapses it to $1.344$, far worse than greedy. Two transfer checks target real-world networks. OLSRv2's unmodified selection code matches our cardinality greedy on $200/200$ unit-cost instances, and on $40{,}308$ instances of real battalion mobility the frozen model closes $48\\%$ of the gap at full coverage. The information horizon, not the model capacity, is the most significant variable.",
    "published": "2026-09-30T15:23:36Z",
    "updated": "2026-09-30T15:23:36Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.00422"
  },
  {
    "id": "2609.39938",
    "title": "LEAP: Learned Block-wise Evidence Retrieval for Long Audio-Video Perception",
    "authors": [
      "Juyi Lin",
      "Zhiqiang Lao",
      "Jiali Cui",
      "Lin Zhao",
      "Pu Zhao",
      "Dichang Zhang",
      "Arman Akbari",
      "Yu Qi",
      "Xinru Jiang",
      "Yanzhi Wang",
      "Heather Yu",
      "Liang Peng"
    ],
    "abstract": "Hour-scale audio-visual question answering is constrained by a context dilemma: dense whole-recording encoding rapidly exhausts context limits, whereas uniform temporal compression severely dilutes fine-grained acoustic and visual evidence. We introduce LEAP, a framework where the model retrieves its own evidence without placing the whole recording in one context. LEAP divides a recording into fixed-duration blocks, applying a lightweight localization pass to each block to score short candidate windows. The highest-ranked windows are pooled and re-encoded in a single bounded answer pass. Consequently, the answer input and peak context remain independent of the recording duration. By decoupling evidence localization from reasoning, our framework can localize candidate temporal windows over pre-computed transcripts without decoding media frames, while preserving fine-grained visual and non-speech evidence by routing the final answering pass over raw audio-visual streams. LEAP trains both stages: a localization LoRA improves the selected windows, and an answer LoRA improves the answers read from the same windows. The block grid natively supports causal queries, enabling LEAP to support streaming inference without streaming-specific training. Across several AVQA benchmarks, LEAP improves over the Qwen3-Omni-30B-A3B baseline by 4.5-16.8%, and transfers to a second omni-modal backbone, MiniCPM-o 4.5, surpassing its published results by 3.1-13.0%.",
    "published": "2026-09-30T15:19:12Z",
    "updated": "2026-09-30T15:19:12Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39938"
  },
  {
    "id": "2609.39934",
    "title": "Reliability-Aware Checkpoint Selection for Domain Generalization",
    "authors": [
      "Jinshi Liu",
      "Jiahao Li",
      "Pan Liu",
      "Yanfeng Li",
      "Rui Qian",
      "Zhao Tong",
      "Yue Sun",
      "Tao Tan"
    ],
    "abstract": "Checkpoint selection in domain generalization often relies on source-validation accuracy, yet the selected checkpoint need not provide reliable probabilities on unseen target domains. Source-target distribution shifts can alter accuracy rankings, while accuracy alone does not measure predictive probability quality. We identify an empirical selection opportunity within fixed training trajectories: reselecting among checkpoints with near-optimal source accuracy can improve mean target probability quality with small observed changes in mean target accuracy. We study accuracy-constrained reliability selection (AC), which retains checkpoints within a tolerance of the best source-validation accuracy and ranks them by source reliability. Our reference rule aggregates within-set normalized negative log-likelihood (NLL) and class-wise calibration error (CwECE) using $D_\\infty$. AC uses no target data and requires neither additional training nor weight averaging. We evaluate five domain generalization training algorithms on three benchmarks, using PACS to develop the objectives and a 0.5-percentage-point tolerance. In exploratory aggregation comparisons on 360 OfficeHome and TerraIncognita runs, the reference rule reduces mean target soft-bin squared-gap ECE and CwECE by 0.240% and 0.182%, respectively, and NLL by 0.030 relative to Source-Acc. Mean target accuracy changes by +0.213 percentage points. These results identify opportunities for reliability-aware reselection, while the additional benefit of joint over single-objective ranking remains unresolved.",
    "published": "2026-09-30T15:17:32Z",
    "updated": "2026-09-30T15:17:32Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39934"
  },
  {
    "id": "2609.39933",
    "title": "ConflictGuide: AutoResearch Improves When Competing Behaviors Are Made Visible",
    "authors": [
      "Binqian Xu",
      "Qiran Zou",
      "Xiangbo Shu",
      "Dianbo Liu"
    ],
    "abstract": "When designing machine learning models, desirable properties are often in tension: improving one behavior can impair another, so task progress can depend on alleviating the conflict. LLM-based AutoResearch systems, which iteratively edit model code and retain edits based on scalar task-performance feedback, have largely ignored this trade-off. We find that scalar feedback supports broad exploration early in search, but it does not reveal how edits affect competing behaviors. In matched-budget experiments, introducing competing-behavior feedback as task gains diminish increases the share of proposals that improve both behaviors and sustains progress beyond scalar-only plateaus. Obtaining this feedback for a given model requires identifying its competing behaviors and designing probes to measure them. To make competing-behavior feedback actionable, we introduce ConflictGuide. Its reusable ConflictGuide-Skill combines a literature-grounded taxonomy with model-specific evidence to identify competing behaviors and specify probes for a code agent to implement as metrics. Evolution proceeds in two stages: Stage I explores with task feedback; Stage II uses probe feedback to steer proposals toward conflict alleviation and retains marginal-gain edits only when probes indicate sufficient alleviation. Across five diverse model families, ConflictGuide reduces task and conflict-related errors by up to 28% and 14%, respectively, relative to scalar-only AutoResearch, with gains extending to other code agents.",
    "published": "2026-09-30T15:17:21Z",
    "updated": "2026-09-30T15:17:21Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39933"
  },
  {
    "id": "2609.39926",
    "title": "Super-Resolving Unseen Hyperspectral Sensors at Any Scale via Spatial Operators",
    "authors": [
      "Ji-Xuan He",
      "Guohang Zhuang",
      "Bo Junge",
      "Tingyi Li",
      "Lingchen",
      "Miaomiao Cai",
      "Yanan Qiao",
      "Xiujin Liu",
      "Junfeng Fang"
    ],
    "abstract": "Achieving cross-sensor generalization and arbitrary-scale reconstruction with a single model remains challenging in hyperspectral super-resolution (HSR). Although recent methods support arbitrary-scale reconstruction, applying them to new sensors or scales beyond the training range often requires additional data and computation to maintain reconstruction quality. To address these challenges, we propose OmniHSR, which predicts band-shared spatial operators rather than spectral values. Cross-Spectral Mapping (CSM) resamples inputs with any number of bands to fixed reference positions and predicts local operators with Gaussian supports. Continuous Operator-Field Reconstruction (COFR) composes these operators into a continuous field and applies them to all original bands for arbitrary-scale reconstruction. Experiments demonstrate that operator prediction outperforms direct spectral-value prediction on all seven datasets. Trained solely on ARAD with only 0.538M parameters, OmniHSR outperforms all directly transferred baselines on six unseen datasets without target-domain training data or adaptation. Across twelve upsampling factors from $\\times2$ to $\\times48$, it improves average PSNR on Pavia U and Chikusei by 0.55 dB over the strongest baseline. It also surpasses baselines trained from scratch or adapted on the target sensor and achieves up to $36\\times$ faster inference. Our code will be publicly released soon.",
    "published": "2026-09-30T15:12:47Z",
    "updated": "2026-09-30T15:12:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39926"
  },
  {
    "id": "2609.39924",
    "title": "CoVisco: Codec-Native Vision Encoder with Native Token Compression for Unified Image-Video Understanding",
    "authors": [
      "Yulong Liu",
      "Xiaotian Han",
      "Junyuan Shang",
      "Yuchen Ding",
      "Zhenyu Zhang",
      "Shuohuan Wang",
      "Guibo Zhu",
      "Sirui Han",
      "Dianhai Yu"
    ],
    "abstract": "Vision-language models face a fundamental scaling bottleneck: the number of visual tokens grows with both temporal duration and spatial resolution, making long-video understanding expensive for the vision encoder and the language model. Existing methods often compress visual tokens after dense encoding, creating a mismatch between the representation used during training and the compact interface required at deployment. We present CoVisco, a codec-native vision encoder with native token compression for unified image-video understanding. By combining codec-native input support with segmented attention, CoVisco can encode long visual inputs in a single forward pass without forming dense patch-to-patch interactions across all frames. Each temporal segment is equipped with learnable abstract tokens that learn a compact segment-level representation, while fine-grained patch tokens remain available throughout the encoder. Alternating intra-segment and abstract-communication layers preserve video-level context through the abstract-token channel. A lightweight selector further exposes either abstract tokens alone or abstract tokens augmented with a runtime-selected subset of patch tokens, yielding a compact visual interface that reduces the visual context and prefill burden of downstream MLLMs while retaining fine-grained evidence when needed. Pretrained with contrastive objectives on 565M image--text pairs and 6.4M videos, CoVisco shows competitive performance on video-oriented embedding and multimodal understanding benchmarks. In the evaluated four-segment, 64-frame setting, abstract-only inference uses only 400 visual tokens while achieving video-understanding performance close to, and on some benchmarks exceeding, OneVision-Encoder. Selected patch tokens further improve fine-grained video reasoning. Project URL: https://github.com/ernie-research/CoVisco.git",
    "published": "2026-09-30T15:12:10Z",
    "updated": "2026-09-30T15:12:10Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.39924"
  },
  {
    "id": "2609.39920",
    "title": "MCD: Causal Distillation of Multimodal In-Context Learning in Large Vision-Language Models",
    "authors": [
      "Yanshu Li",
      "Jiaqian Li",
      "Canran Xiao",
      "Xi Xiao",
      "Tianyang Wang",
      "Yongtai Liu"
    ],
    "abstract": "Large vision-language models (LVLMs) exhibit strong multimodal in-context learning (ICL) capabilities, yet this ability degrades substantially as model size decreases. Knowledge distillation offers a natural way to bridge this gap, but existing methods primarily align output distributions or hidden representations directly. Such alignment teaches the student what the teacher predicts without revealing which evidence in the complex context causally supports that prediction. Consequently, a student can imitate the teacher's answer while continuing to rely on language priors, prompt structure, or other spurious cues. To address this limitation, we introduce Multimodal Causal Distillation (MCD), a distillation framework that transfers how a strong teacher uses multimodal evidence during ICL. MCD uses structure-preserving token interventions to identify and verify causal evidence, then transfers how the teacher responds when that evidence is retained or removed. This design connects distillation to the causal patterns by which the model uses contextual evidence during multimodal ICL. Experiments across three LVLM families and seven benchmarks show that MCD improves student performance by 7.23 points on average and outperforms vanilla distillation by 4.68 points, while further analyses confirm the generalizability of these gains.",
    "published": "2026-09-30T15:10:44Z",
    "updated": "2026-09-30T15:10:44Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.39920"
  },
  {
    "id": "2609.37889",
    "title": "ReCAP: Retrieval-Guided Capability Reuse for Multimodal Continual Instruction Tuning",
    "authors": [
      "Tao Hu",
      "Zhinuo Zhou",
      "Xialiang Tong",
      "De-Chuan Zhan",
      "Da-Wei Zhou"
    ],
    "abstract": "Multimodal continual instruction tuning (MCIT) aims to enable multimodal large language models to acquire new capabilities from sequential tasks while preserving previously learned knowledge. Existing methods primarily mitigate catastrophic forgetting by constraining parameter updates or separating task-specific adaptations. However, continual adaptation can also benefit from external knowledge that provides domain-specific information and reusable reasoning patterns for solving diverse instructions. For example, to answer \"How many red cubes are to the left of the sphere?\", domain knowledge can provide relevant concepts about objects and spatial relations, while reasoning knowledge can specify ordered operations such as object recognition, spatial filtering, and counting. Despite this potential, how to leverage external knowledge for continual adaptation remains largely unexplored in existing MCIT methods. To this end, we propose ReCAP, a retrieval-guided framework that leverages external knowledge to guide capability reuse during continual adaptation. At each continual stage, ReCAP uses external search and an LLM to incrementally build a knowledge base of domain, reasoning, and format knowledge based on the current-stage training data. For each instruction, retrieved domain knowledge guides generation, while retrieved reasoning knowledge selects and orders capability modules to form an instance-specific capability path. As these capability modules are reused across stages, subsequent adaptation can overwrite previously learned parameters. To enable stable cross-stage reuse, ReCAP introduces adaptive subspace recycling, which parameterizes reusable capability modules with shared bases and stage-specific cores, protects historically important directions while recycling residual capacity. Extensive experiments on MCIT benchmarks show that ReCAP achieves SOTA performance.",
    "published": "2026-09-29T15:56:11Z",
    "updated": "2026-09-29T15:56:11Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.37889"
  },
  {
    "id": "2609.37888",
    "title": "Visual Branch is What You Need for CLIP-based Class-Incremental Learning",
    "authors": [
      "Tao Hu",
      "Zhen-Hao Xie",
      "Jingcai Guo",
      "De-Chuan Zhan",
      "Da-Wei zhou"
    ],
    "abstract": "Class-Incremental Learning (CIL) requires models to recognize new classes over time without forgetting previously learned ones. With the rise of vision-language pre-training, CLIP has become a strong foundation for CIL. A common design in CLIP-based CIL is to construct textual classifier weights by encoding class-name templates with the CLIP text encoder, and then classify visual features by image-text cosine similarity. This design is appealing: since CLIP aligns images and text in a shared embedding space, textual weights appear to provide an off-the-shelf classifier for incremental classes. However, we show that this seemingly natural design is not always beneficial, as a modality gap can still separate the two modalities and make textual classifier weights deviate from visual class distributions. Empirically, under identical task-wise CIL training, initializing the cosine classifier with visual class centers yields lower loss and better incremental accuracy than using CLIP textual features. Motivated by these observations, we propose VIS, a visual-only method for CLIP-based CIL that removes the deployed textual branch and constructs the incremental classifier entirely in the visual space. To obtain stronger task-adaptive visual representations, VIS uses only base-session data to enhance CLIP's final visual representation with informative visual-layer features. Built on the enhanced visual representation, VIS employs a simple kernelized incremental least-squares SVM, whose classifier weights are solved in closed form from additive sufficient statistics. When new classes arrive, VIS accumulates their sufficient statistics and recomputes the classifier weights for all seen classes, enabling efficient incremental updates while preserving historical class knowledge. Extensive experiments show that VIS achieves state-of-the-art performance without a textual branch.",
    "published": "2026-09-29T15:56:06Z",
    "updated": "2026-09-30T05:00:59Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.37888"
  },
  {
    "id": "2609.37885",
    "title": "Boids of a Feather Flock Together - Evolving Prey Behaviours Under Different Predator Attack Strategies",
    "authors": [
      "Augusta van Haren",
      "Hanna Hoogen",
      "Luca Pattavina"
    ],
    "abstract": "Flocking and schooling are thought to have evolved partly as defences against predation, but how prey should balance social and escape tendencies may depend on the predator's hunting strategy. We extend the predator-prey boids model of Ojo et al. (2023), itself based on Reynolds' boids, by combining six prey movement tendencies (alignment, cohesion, separation, dodge, repel and wiggle) into a single weighted acceleration update, and by reformulating wiggle as a sinusoidal manoeuvre. We then use an evolutionary strategy to optimise the six behaviour coefficients for collective prey survival against four predator hunting strategies: attack-centroid, attack-nearest, attack-random and attack-peripheral. Across five independent trials per strategy, coefficients converged within trials and mean fitness remained stable or increased, although trials often settled in different local optima. Prey survival was highest under attack-centroid and lowest under attack-nearest, in line with our hypotheses. Against attack-centroid, prey evolved individualistic predator avoidance with high escape coefficients, whereas against the other three strategies they largely kept their flock formation. Across all strategies, evolution favoured a low repel coefficient and relatively high dodge and wiggle coefficients. Our results suggest that optimal anti-predator behaviour depends on the interplay between escape tendencies and the predator's hunting strategy.",
    "published": "2026-09-29T15:55:18Z",
    "updated": "2026-09-29T15:55:18Z",
    "categories": [
      "q-bio.PE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37885"
  },
  {
    "id": "2609.37880",
    "title": "Fluency Without Evidence: Constraint-First Design and the Limits of Self-Report in AI-Assisted Learning",
    "authors": [
      "Fatima T. Zahra",
      "Wei Wang",
      "Frances Harper",
      "Jiangen He"
    ],
    "abstract": "A generative AI teaching partner should support reasoning over supplying conclusions; however, this has not been tested against learning in an authentic course. Drawing on design-based research, we specify the position as a conjecture map and report a first design cycle in two graduate-level research methods courses. Students used an AI teaching partner employing a constraint-first sequence requiring them to state and justify positions before receiving questions. Pre- and post-measures of AI literacy, critical thinking, and metacognitive awareness were collected alongside interaction records. AI literacy increased, concentrating in understanding AI, whereas critical thinking, awareness, and knowledge did not change. Since changes were limited to self-report measures, they may reflect growth in confidence instead of capacity. Interaction records, meanwhile, showed brief exchanges, uneven enactment of the constraint-first sequence, and missing records. These findings show why AI-supported learning requires interaction records to provide a more defensible basis for AI-supported designs than self-reports.",
    "published": "2026-09-29T15:53:13Z",
    "updated": "2026-09-29T15:53:13Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.37880"
  },
  {
    "id": "2609.38279",
    "title": "How People Use ChatGPT: Conversation-Level Evidence from India, Nigeria, Brazil, and Pakistan",
    "authors": [
      "Shreyasi Roy Chowdhury",
      "Kiran Garimella"
    ],
    "abstract": "Public understanding of how people use LLM-based conversational AI assistants comes primarily from aggregate platform reports by OpenAI and Anthropic, which apply fixed taxonomies and inferred demographics to hundreds of millions of users and release only summary statistics that outside researchers cannot re-analyze. We provide a complementary, conversation-level view: complete ChatGPT exports comprising 202,590 conversations from 1,252 users across India, Nigeria, Brazil, and Pakistan, paired with self-reported age and gender and spanning December 2022 to February 2026. To our knowledge this is the first conversation-level, demographically grounded comparison of ChatGPT use across multiple non-Western countries. We ask what these users use ChatGPT for (purpose), what they talk about (topics), and how they engage with it (mode of interaction), using the platform's own classifiers, unsupervised topic discovery, and a thematic analysis of expressive conversations. Personal use accounts for 55-64% of conversations in every country and coursework is about as common as work, so workplace productivity describes a minority of use. Unsupervised topic discovery surfaces country-specific uses that the OpenAI taxonomy folds into generic categories: health and wellness in India and Brazil, Urdu-English translation in Pakistan, current affairs in Nigeria, religious questions in Nigeria and Pakistan, and self-reflection in Brazil. Over three years, the share of conversations that seek information declined only modestly and the share that delegate a task did not grow, while conversations in which users express themselves rose from a few percent to roughly a fifth or more in every country. The same product is thus attached to different local needs in each country, and understanding what adoption means requires conversation-level, country-sensitive measurement alongside global aggregates.",
    "published": "2026-09-29T15:51:26Z",
    "updated": "2026-09-29T15:51:26Z",
    "categories": [
      "cs.CY",
      "cs.HC",
      "cs.SI"
    ],
    "url": "https://arxiv.org/abs/2609.38279"
  },
  {
    "id": "2609.37875",
    "title": "Co-PiLOT: Constrained Physics-Informed Latent Optimization for Target-Driven Inverse Design",
    "authors": [
      "Mahish K. Guru",
      "Mayank Nagar",
      "Ayush vyas",
      "Jan Bohlen",
      "Roland Aydin",
      "Noomane Ben Khalifa"
    ],
    "abstract": "Inverse design of physical systems (molecules, devices, microstructures) often reduces to optimizing a high-dimensional structure against an expensive black-box simulator. Direct search is difficult because the space is non-Euclidean, feasibility is hard to encode, and each evaluation is expensive. We present Co-PiLOT, a latent optimization approach that maps candidates through a generative encoder-decoder, uses the decoder as a learned validity prior, and searches the latent space with physics-informed black-box optimization. The framework is applied on the inverse design of magnesium alloy microstructure/texture. We develop a vision transformer based-encoder; paired with latent diffusion, diffusion transformer and rectified-flow transformer-based decoders on $\\sim80{,}000$ EBSD-derived microstructure dataset to learn a minimal bottleneck, $z$. The ViT-FMDiT model ($z$=$768$) reconstructs high-fidelity microstructure images (FID $27.86$, MS-SSIM $0.178$), which our self-segmenting orientation codec converts into input grids for crystal plasticity solver. Finally, we introduce MERIDIAN, an active latent optimizer driven by deep-kernel Gaussian-process uncertainty, failure-aware feasibility prediction, manifold-aware trust regions, and target-aware acquisition. Within a budget of $160$ simulations, the ViT-FMDiT and MERIDIAN combination yields the best target-driven objective score, reducing the relative target error by $3$--$22\\%$ against seven baselines (DANTE, TuRBO, BAxUS, CMA-ES, DDOM, SEIKO, DDPO) on the same decoder.",
    "published": "2026-09-29T15:51:02Z",
    "updated": "2026-09-29T15:51:02Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2609.37875"
  },
  {
    "id": "2609.37874",
    "title": "EndoPrior-GS: Dynamic Endoscopic Reconstruction with a Joint Texture Prior",
    "authors": [
      "Jiaqi Huang",
      "Shidong Wang",
      "Tong Xin",
      "Kabita Adhikari"
    ],
    "abstract": "Dynamic endoscopic reconstruction is fundamental to robotic surgery and computer-assisted interventions. While 3D Gaussian Splatting (3DGS) realises real-time rendering, its application to deformable intraoperative environments remains constrained by spurious geometry and varying illuminations. To address these limitations, we introduce EndoPrior-GS, a novel pipeline that explicitly couples frame-extracted vision heuristics and estimated depth maps. EndoPrior-GS derives a joint texture prior from a tool-filtered valid tissue mask, a non-specular photometric filter, and anatomical structural salience, yielding a probability map that guides primitive initialisation and subsequent density control. The prior is further extended to the temporal domain through a texture-aware term that dynamically weighs pairwise primitive contributions during training. We conduct extensive experiments on benchmark datasets EndoNeRF and SCARED, and the obtained results show that our method EndoPrior-GS reduces Flow Error by 27.7% and 25.8% over the representative approaches while preserving competitive rendering quality and real-time rendering speed. Our project website is available at https://jiaqi-huang-77.github.io/EndoPrior-GS/.",
    "published": "2026-09-29T15:49:22Z",
    "updated": "2026-09-29T15:49:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37874"
  },
  {
    "id": "2609.37871",
    "title": "ExceptionDrive: A Planning-Oriented Counterfactual Corner-Case Benchmark for Autonomous Driving",
    "authors": [
      "Ziyi Luo",
      "Zhe Sun",
      "Yehao Lu",
      "Lei Zhou",
      "Lisheng Wu",
      "Xuewei Li",
      "Zequn Qin",
      "Xi Li"
    ],
    "abstract": "Average performance on routine driving benchmarks does not establish planner reliability under rare, safety-critical hazards. We proposed ExceptionDrive, a counterfactual planning benchmark that uses VLM-assisted screening, localized multi-view editing, and quality auditing to insert hazards into real nuScenes scenes while preserving their context. Its 21 tasks span six safety families and define hazard or conflict regions, local safety constraints, and acceptable responses. Because hazard insertion can invalidate the recorded human trajectory, our reference-free protocol evaluates edited predictions using Unsafe Rate (UR), Hazard Clearance Compliance (HCC), Hazard Proximity Response (HPR), and Counterfactual Trajectory Shift (CTS), which measure core-region intrusion, clearance compliance, clearance relative to a prescribed margin, and counterfactual trajectory change. Seven representative planners frequently intrude into hazard regions or provide insufficient clearance. We also develop a Reminder Agent that, without sample-specific task labels, converts visual evidence and the shared taxonomy into structured records of hazard presence, type, and a recommended high-level strategy. The agent neither predicts trajectories nor controls the vehicle; its records guide a VLM-based decision agent. In zero-shot experiments, the reminders improve strategy accuracy and reduce under-warning.",
    "published": "2026-09-29T15:48:16Z",
    "updated": "2026-09-29T15:48:16Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37871"
  },
  {
    "id": "2609.37870",
    "title": "Learning from synthetic photorealistic raindrop for single image raindrop removal",
    "authors": [
      "Zhixiang Hao",
      "Shaodi You",
      "Yu Li",
      "Kunming Li",
      "Feng Lu"
    ],
    "abstract": "Raindrops adhered to camera lens or windshield are inevitable in rainy scenes and can become an issue for many computer vision systems such as autonomous driving. Because raindrop appearance is affected by too many parameters, therefore it is unlikely to find an effective model based solution. Learning based methods are also problematic, because traditional learning method cannot properly model the complex appearance. Whereas deep learning method lacks sufficiently large and realistic training data. To solve it, in our work, we propose the first photo-realistic dataset of synthetic adherent raindrops for training. The rendering is physics based with consideration of the water dynamic, geometric and photometry. The dataset contains various types of rainy scenes and particularly the rainy driving scenes. Based on the modeling of raindrop imagery, we introduce a detection network which has the awareness of the raindrop refraction as well as its blurring. Based on that, we propose the removal network that can well recover the image structure. Rigorous experiments demonstrate the state-of-the-art performance of our proposed framework.",
    "published": "2026-09-29T15:48:00Z",
    "updated": "2026-09-29T15:48:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37870"
  },
  {
    "id": "2609.38278",
    "title": "Masked Swingers: Harnessing Data Augmentation to Advance Autoencoders for Self-Supervised Learning",
    "authors": [
      "Anthony Fuller",
      "Scott C. Lowe",
      "Daniel G. Kyrollos",
      "Graham W. Taylor",
      "Evan Shelhamer",
      "James R. Green"
    ],
    "abstract": "Self-supervised learning (SSL) removes the need for annotations and makes models that are capable across more domains than supervised learning. The autoencoder SSL framework learns by reconstructing its own input after information loss through a bottleneck or noise injection. Masked autoencoders (MAE) are the most successful instantiation of this framework: they encode a random subset of patches, then decode the masked-out patches. In this work, we introduce key modifications to improve MAEs. Our method augments an image in two different ways, then masks and encodes each view separately. It then exchanges the global representations (CLS tokens) between views before decoding the masked patches. By design, our Masked Swingers encourages learning a view-agnostic summary of the image to facilitate efficient transfer. We perform extensive experiments, and find Masked Swingers outperforms MAE by +3-5% on ImageNet-1K kNN and provides large gains on fine-grained tasks, e.g., relative gains of +45% on instance retrieval, +22% on animal re-ID, and +76% on Omniglot character recognition. To boot, Swingers reduces error -64% relative to MAE on three new state-probing datasets, opening the door to world modeling. Welcome to our Swingers party.",
    "published": "2026-09-29T15:47:27Z",
    "updated": "2026-09-29T15:47:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.38278"
  },
  {
    "id": "2609.37868",
    "title": "Learning Beyond What You Sample: Off-Policy-Aware Cross-Model Trajectory Exchange for RLVR",
    "authors": [
      "Doohyuk Jang",
      "Yoonsik Park",
      "Gyouk Chu",
      "Sihwan Park",
      "Eunho Yang"
    ],
    "abstract": "Reinforcement Learning with Verifiable Rewards (RLVR) methods such as GRPO rely on successful self-generated trajectories, but finite rollout budgets can produce all-fail groups with no reward-based policy-gradient signal. While additional rollouts improve the chance of success at higher cost, successful trajectories missing from one model's rollouts may already have been discovered by another. Indeed, we observe that heterogeneous models often succeed on complementary prompts, creating opportunities for mutual learning without a designated stronger teacher. To exploit this complementarity, we propose GRAFT (Gated Replacement of Answer-Failed groups with peer Trajectories), an off-policy-aware framework that replaces all-fail groups with informative peer groups. GRAFT transfers both successful and unsuccessful peer responses with peer-computed advantages, while controlling cross-model mismatch through sequence-level compatibility weighting and token-level importance ratio clipping. Across three heterogeneous model pairs and five mathematical reasoning benchmarks, GRAFT consistently improves both models over GRPO with the same per-model rollout budget, gaining 2.1 points on average and up to 4.5 points in model-level average performance. Stored peer trajectories preserve most of the gains, improving over GRPO by 1.8 points on average without simultaneous co-training.",
    "published": "2026-09-29T15:47:25Z",
    "updated": "2026-09-29T15:47:25Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.37868"
  },
  {
    "id": "2609.37864",
    "title": "AgentBug-Smith: Automatically Reproducing Real-World Harness Bugs in Agentic Systems",
    "authors": [
      "Yiming Cheng",
      "Alfin Wijaya Rahardja",
      "Mengshi Zhang",
      "Zihao Chen",
      "Zhenpeng Chen",
      "Yiling Lou"
    ],
    "abstract": "Agent harness bugs exhibit unique characteristics and remain challenging for state-of-the-art software agents to repair. Progress in this area is further hindered by existing benchmarks, which contain only a small and fixed number of executable harness bugs while requiring hundreds of human hours to construct. This work presents AgentBug-Smith, an automated harness bug reproduction approach that continuously discovers and reproduces real-world harness bugs from open-source agentic systems. Across different backbone LLMs, AgentBug-Smith consistently outperforms existing bug reproduction techniques designed for general software, achieving 10.67% - 27.56% higher success rates of reproducing harness bugs. By applying AgentBug-Smith to open-source agentic systems in the wild, we construct Live-Harness-Bench, a live and extensible benchmark that currently contains 200 reproducible harness bugs. We further demonstrate the utility of Live-Harness-Bench through two downstream applications. First, we use Live-Harness-Bench as the evaluation benchmark to systematically evaluate state-of-the-art software agents, revealing their limited capabilities in repairing real-world harness bugs. Second, we use Live-Harness-Bench as a knowledge base of real-world harness bug fixes, from which reusable repair skills can be distilled to improve existing software agents, increasing their harness-bug repair rates by 6.32%. Together, AgentBug-Smith and Live-Harness-Bench establish a scalable foundation for continuously evaluating and improving software agents on harness bug repair, turning real-world agent failures into executable evaluation instances and reusable knowledge for harness improvement, thus contributing to the ultimate goal of recursively self-improving agents.",
    "published": "2026-09-29T15:46:04Z",
    "updated": "2026-09-29T15:46:04Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37864"
  },
  {
    "id": "2609.34978",
    "title": "One Sensor, Whole Body - 3D Body Pose from a Single Consumer Earbud IMU",
    "authors": [
      "Zhilin Guo",
      "Boqiao Zhang",
      "Oszkár Urbán",
      "Josef Bengtson",
      "Hakan Aktas",
      "Wenzhao Li",
      "Siyu Hong",
      "Kyle Fogarty",
      "Chenliang Zhou",
      "Ali Senguel",
      "Cengiz Oztireli"
    ],
    "abstract": "Consumer earbuds already stream inertial motion data from the head, one of the most widely worn sensor locations on the body. We ask how much of the 3D body pose a single such head IMU can recover, and whether adding more consumer sensors actually helps. We build a multimodal capture pipeline that records four-view RGB-D video together with an AirPods head IMU and two Striv insole IMUs, synchronize the streams post-hoc, and generate pseudo-ground-truth with SAM 3D Body, yielding a 35-take single-subject benchmark spanning gait, turning, vertical, everyday, and clinically inspired motions. Adapting two recurrent model families (IMUPoser and MobilePoser), we show that one head IMU recovers lower-body pose at 79.0 mm rigid-MPJPE and per-foot ground contact at 0.809 macro-F1, and that a causal variant retains most of this accuracy at streaming latency. In paired per-take significance tests across both families, adding the consumer foot IMUs never significantly improves pose and significantly degrades it in two of four model-split combinations; a mounting-bias probe and feet-only ablation identify insole orientation quality, not foot placement, as the mechanism. Extending the output to a 20-joint full-body skeleton maps the boundary: gross distal-arm motion is partially recoverable from the head alone, proximal upper-body pose is not, and staged fine-tuning recovers the leg accuracy that naive joint training sacrifices to multi-task dilution. For learned pose from consumer wearables, sensor reliability, not sensor count, is the binding constraint here. For the devices tested, the earbud is its sweet spot. Code is available at https://github.com/ZhilinGuo/one-sensor-whole-body.",
    "published": "2026-09-28T11:55:29Z",
    "updated": "2026-09-28T11:55:29Z",
    "categories": [
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.34978"
  },
  {
    "id": "2609.34977",
    "title": "SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models",
    "authors": [
      "Tianxiang Chen",
      "Zhentao Tan",
      "Zi Ye",
      "Yue Wu",
      "Xiaobing Tu",
      "Jinkui Ren",
      "Xiantao Zhang",
      "Tao Gong",
      "Qi Chu",
      "Nenghai Yu",
      "Xipeng Qiu",
      "Jieping Ye"
    ],
    "abstract": "Multimodal Large Language Models face significant efficiency challenges that stem from two distinct yet coupled sources: data redundancy and computational redundancy. While most methods focus on data redundancy by pruning visual tokens from the output of the visual encoder or computing redundancy in LLM decoders using blockwise importance, the finer-grained inter-layer representation shifts and the distribution differences within the layers themselves have not been fully explored. In this work, we comprehensively investigate this dual-level inefficiency. We posit that intermediate layer tokens from vision encoders should be considered for effective visual token pruning, as semantic focus shifts across layers, with middle-layer tokens capturing more detailed object-centric information that deeper layers may abstract away. Furthermore, we reveal the differential contributions of Attention and FFNs across distinct LLM decoder layers. Building upon these discoveries, we propose \\textbf{SPIDER}, a training-free framework that integrates multi-layer \\underline{\\textbf{S}}emantic visual token \\underline{\\textbf{P}}run\\underline{\\textbf{I}}ng with an a\\underline{\\textbf{D}}aptive sub-lay\\underline{\\textbf{ER}} skipping mechanism. Experimental evaluations demonstrate that SPIDER consistently maintains strong performance across various MLLM architectures and reduction ratios. For instance, on LLaVA-NeXT-7B, SPIDER reduces FLOPs by $79\\%$ while maintaining 96$\\%$ of the baseline performance.",
    "published": "2026-09-28T11:54:41Z",
    "updated": "2026-09-28T11:54:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34977"
  },
  {
    "id": "2609.34976",
    "title": "Inspector: Conversational and Lightweight Analyzer of Analog Circuit Layouts Using LLM and CNNs",
    "authors": [
      "Abril Cano Castro",
      "Giuseppe Chiari",
      "Michele Piccoli",
      "Federico Viola",
      "Davide Zoni"
    ],
    "abstract": "The integration of artificial intelligence into computer-aided design frameworks has sparked a shift in the design of analog integrated circuits (ICs), transitioning the field from using manual and algorithmic-based solutions to adopting automated and intelligent paradigms. In this scenario, the GDSII file represents the industry-standard database containing the ultimate and most accurate source of information of the analog circuit, encapsulating the complex physical geometries and parasitic realities that define tape out performance. This paper proposes a novel framework that combines fine-tuned LLMs and CNNs to analyze GDSII files of analog circuits, enabling a conversational interface between the tool and the designers. Experimental results using thousands of analog designs across four realistic tasks demonstrate that the proposed solution outperforms state-of-the-art general-purpose massive VLMs by a significant margin (up to 81%), thus providing a lightweight solution to the problem of GDSII analysis.",
    "published": "2026-09-28T11:54:13Z",
    "updated": "2026-09-28T11:54:13Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.34976"
  },
  {
    "id": "2609.34974",
    "title": "Before Acting, Change the State: Prospective State Intervention for Web Agents under Deceptive Interfaces",
    "authors": [
      "Ruozhao Yang",
      "Mingfei Cheng",
      "Xiaofei Xie"
    ],
    "abstract": "LLM-based Web agents can autonomously complete user tasks, yet deceptive interfaces can steer them toward outcomes that conflict with users' interests. Existing defenses primarily intervene on agent behavior through blocking, guidance, or replanning. We identify a distinct failure mode: a task-valid action can still realize an unauthorized consequence because of the current Web state. This motivates treating task-relevant Web state itself as a runtime control target. We introduce Veer, an agent-side runtime defense that leaves task planning to the base agent and intervenes on Web state when a proposed action would produce an unauthorized consequence. Before modifying the live environment, Veer constructs a prospective intervention trajectory toward a safe task-relevant state and executes it with runtime grounding and verification. Across TrickyArena and WebDecept, Veer achieves the highest safe task completion in all three evaluation settings, exceeding the next-best defense by 15.9 and 25.0 percentage points on TrickyArena-Single and TrickyArena-Multi, respectively, while reducing dark-pattern success on WebDecept to 0.3%. These gains persist across dark-pattern types and all 12 agent, model, and benchmark configurations. Ablations show that active state intervention provides the largest gain, while prospective rollout and temporal evidence contribute additional improvements. These results establish task-relevant Web state as an effective runtime control target for protecting Web agents from deceptive outcomes.",
    "published": "2026-09-28T11:53:24Z",
    "updated": "2026-09-28T11:53:24Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.34974"
  },
  {
    "id": "2609.34973",
    "title": "APEX-Voice: Can Voice Agents Complete Professional Workflows Through Full-Duplex Interaction",
    "authors": [
      "Puneet Mathur",
      "Dinesh Manocha"
    ],
    "abstract": "Full-duplex voice agents can now listen, speak, use tools, and act during spoken interactions, but fluent dialogue does not guarantee correct completion of delegated professional workflows. We introduce APEX-Voice, a benchmark of 120 interactive professional workflows spanning ten work archetypes such as form completion, corporate negotiation, coordination, consulting, and interviewing. Each workflow executes in a stateful Voice Workbench environment with task-specific knowledge, typed tools, gold-annotated final work artifact, authorization constraints, and a user simulation policy backed by validated, pre-compiled speech realizations. We evaluate both artifact field accuracy and end-to-end workflow success, which requires the correct terminal state, valid process, completed actions, and a valid final artifact. Across five frontier real-time voice agents-GPT-Live-1, Gemini-3.8-Live, Grok-Voice-Think-2.0, Step-Audio3, and GPT-realtime-2.1, none exceeds 25% Pass@1, and the best Reliable@3 is only 10.8%. Moreover, stateful coordination is the dominant failure point across systems, while success decreases further on workflows requiring greater knowledge retrieval and mid-speech corrections. Overall, APEX-Voice is the first benchmark for evaluating whether voice agents can translate conversational competence into dependable professional work.",
    "published": "2026-09-28T11:53:07Z",
    "updated": "2026-09-28T11:53:07Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34973"
  },
  {
    "id": "2609.34972",
    "title": "Just MLPs: Efficient Visual State Reconstruction for Multimodal Language Models",
    "authors": [
      "Jingdi lei",
      "Junxian Li",
      "Di Zhang",
      "Zhanqiu Zhang",
      "Yiwen Guo",
      "Soujanya Poria"
    ],
    "abstract": "Long visual token sequences often account for a substantial fraction of the computational overhead in multimodal large language models~(MLLMs). Existing approaches reduce this cost by pruning redundant visual tokens, but permanently discard visual evidence that may become useful in subsequent layers. We instead ask whether all visual tokens can be preserved while reducing the cost of repeatedly evolving the representations through the Transformer. To answer this question, we perform low-rank interventions on visual-to-text information flow. We find that, after visual-to-text attention is blocked, restoring only a few directions recovers most of the lost accuracy, suggesting the relevant visual influence is concentrated in a low-dimensional subspace. We further observe strong predictability in layer-specific visual states: lightweight MLPs approximate them with high cosine similarity and low reconstruction error. Motivated by these findings, we propose $δ$-Vision, which replaces repeated Transformer evolution of visual tokens with lightweight low-rank adapters that construct layer-wise visual memories while preserving all visual tokens for text retrieval. Across image and video benchmarks, $δ$-Vision achieves higher accuracy than visual token pruning baselines at comparable or lower computation, while delivering competitive inference efficiency without discarding visual tokens.",
    "published": "2026-09-28T11:52:45Z",
    "updated": "2026-09-28T11:52:45Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34972"
  },
  {
    "id": "2609.34971",
    "title": "Action-Space Shaping for LLM Agents: Measuring and Mitigating Tool-Schema Bias",
    "authors": [
      "Yinhong Liu",
      "Zhili Tan",
      "Zilin Wang",
      "Zhijiang Guo"
    ],
    "abstract": "Large Language Models (LLMs) have shown strong performance on tool-use agentic tasks when given a fixed tool schema. Yet a tool schema is not the action space of an agent; it is merely one interface representation of it. The same executable action can be exposed through many different, functionally equivalent tool definitions, and an agent that has truly learned a task should behave consistently across them. We show that current agents often do not, a phenomenon we term schema bias. To study this systematically, we introduce an executable transformation framework that rewrites a native tool schema using nine operators, including merging and splitting tools, altering how a single tool is expressed, and distributing one action across several dependent calls. The tasks, executable actions, and reachable states remain fixed, so any change in success is attributable to the interface alone. Evaluating eleven LLMs, including two closed models, on up to 32 schema variants, we ask how large schema bias is, how it manifests, whether the difficulty of a schema variant can be predicted without a full evaluation, and whether training removes it. We find that schema bias is substantial even for the newest models: success rates range from complete failure to 97% depending solely on the schema. To reliably estimate schema difficulty, it requires running a small sample of the target queries. Training repairs a schema variant only when that variant appears in the training data.",
    "published": "2026-09-28T11:52:43Z",
    "updated": "2026-09-28T11:52:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34971"
  },
  {
    "id": "2609.35924",
    "title": "Grab a Coffee: Future-Aware Guidance for Discrete Diffusion with Compiled Objectives",
    "authors": [
      "Hua",
      "Xu",
      "Dongxin Li",
      "Gwen Yidou-Weng",
      "Guy Van den Broeck",
      "Wei Wang",
      "Anji Liu"
    ],
    "abstract": "Discrete diffusion models generate sequences by iteratively resolving multiple tokens in parallel, offering a flexible alternative to left-to-right generation. However, guiding this process with a sequence-level objective is difficult because the value of one unresolved token depends on the other tokens with which it can form a high-reward sequence. Enumerating all such completions makes the whole guidance computation grow exponentially with the number of unresolved positions. We introduce COFFEE, a plug-and-play framework that avoids this enumeration by separating sequence dependence from the objective. At each diffusion step, a target-free carrier absorbs the marginal token distributions predicted by the denoiser to construct a joint model over the unresolved tokens, while a compiled finite-state model records how their combinations affect the sequence-level preference. Pairing their states allows COFFEE to transfer global preferences to unresolved positions and sample a clean reconstruction without retraining the diffusion model. The same framework supports explicit hard constraints and learned soft objectives. We evaluate COFFEE across multiple symbolic, language, and biological benchmarks, where it achieves strong control results with task-dependent quality and diversity trade-offs. By making objectives available to inference rather than only evaluation, COFFEE brings joint conditioning, completion-weighted guidance, and optimization-based constraints into pretrained neural generation, showing the potential of neural-symbolic methods in diffusion guidance.",
    "published": "2026-09-28T11:51:38Z",
    "updated": "2026-09-28T11:51:38Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.35924"
  },
  {
    "id": "2609.34968",
    "title": "RoboFL: Federated Expert Assembly for World Action Models",
    "authors": [
      "Rongyu Zhang",
      "Ruizhi Fan",
      "Yunfan Lou",
      "Hengyu Fang",
      "Shenli Zheng",
      "Chenrui Wu",
      "Yili Jin",
      "Li Du",
      "Dan Wang",
      "Yuan Du",
      "Shanghang Zhang"
    ],
    "abstract": "Vision-language-action and world-action models are increasingly popular, yet remain bottlenecked by physical interaction data that is scarce, institutionally siloed, and task-heterogeneous. A natural federated solution is to let each client adapt a shared foundation model through parameter-efficient fine-tuning, avoiding the exchange of full-model updates. However, federating these adapters is nontrivial, as naive aggregation can entangle incompatible updates, while incorporating MoE-style routing into federated aggregation may dilute specialization and destabilize expert selection. We present RoboFL, which instantiates MoSAIC (Mixture of Slotted Adapters) for federated world-action learning. MoSAIC directly installs locally trained LoRA adapters as the expert branches of a server MoE. Server-side routers learn token assignments over these prior-informed branches while jointly refining routing and expert parameters. Foresight-to-Action Routing Distillation (FARD) aligns routing across the model's three paths, while Path-Consensus Expert Aggregation (PCEA) converts complete expert updates into a compact global adapter for personalized redistribution. Experiments on RoboTwin 2.0, RLBench, and a real-world Franka robot arm show the superiority of RoboFL with structured expert assembly, as it outperforms centralized PEFT InternVLA-A1 by 12.23% on the Franka arm, while reducing per-round client communication by up to 86.81% relative to MoE-based federated VLA baselines.",
    "published": "2026-09-28T11:49:57Z",
    "updated": "2026-09-28T11:49:57Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34968"
  },
  {
    "id": "2609.34967",
    "title": "Semantic Uncertainty Quantification Needs Factual Equivalence",
    "authors": [
      "Joseph Hoche",
      "Quentin Guimard",
      "Gianni Franchi"
    ],
    "abstract": "Semantic uncertainty quantification for large language models rests on a common template: sample several answers, measure how much they agree, and treat disagreement as uncertainty. We first formalize this template as two separate roles: an operator that compares two answers, and an aggregator that combines all pairwise comparisons into a scalar. Existing methods differ almost entirely in how they aggregate, while taking the operator off the shelf, typically an NLI model or a generic sentence encoder. We show that this reliance on off-the-shelf operators is the primary bottleneck of semantic UQ: they do not accurately measure factual equivalence of multiple answers to the same question. We resolve this with a deliberately simple recipe: a single encoder trained contrastively to isolate the targeted fact, utilizing synthetic data generated by an LLM and dataset both disjoint from all evaluation settings. Integrating the resulting operator into existing methods improves performance on 120 of 126 evaluation settings (95%) spanning 18 model dataset combinations across language and vision-language models. The best variant reaches 0.76 mean AUROC against 0.68 for the strongest baseline, while replacing the quadratic cross-encoder comparisons of entailment-based operators with one encoder pass per answer. The uniformity of the improvement supports the view that the operator, not the aggregator, is the limiting factor. The same operator also improves single generation token-level estimators: the norm it assigns to each token measures how much that token bears on the answer, and reweighting token log-likelihoods accordingly sharpens the estimate.",
    "published": "2026-09-28T11:48:35Z",
    "updated": "2026-09-28T11:48:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34967"
  },
  {
    "id": "2609.34966",
    "title": "Safe Greenhouse Climate Control Using Lagrangian-Constrained PPO with Kolmogorov-Arnold Networks",
    "authors": [
      "Hangzun Liu",
      "Yuling Fan",
      "Fang Tian",
      "Zhilong Bie",
      "Zaiwen Feng",
      "Yongliang Qiao"
    ],
    "abstract": "Greenhouse climate control balances economic return with maintaining temperature, humidity and CO2 within crop-adapted growth ranges. Conventional reinforcement learning (RL) greenhouse controllers use fixed reward penalties to limit climate constraint violations, yet such heuristic penalties cannot explicitly constrain long-term cumulative violations. Poorly tuned weights either lead to overly conservative policies and lower yields, or fail to suppress persistent climate deviations that harm photosynthesis and induce crop diseases. To address this issue, we formulate greenhouse climate regulation as a Constrained Markov Decision Process (CMDP) and use a Lagrangian safe RL framework RCPO-PPO to separate economic optimization and cumulative safety constraints, enabling adaptive penalty adjustment without manual tuning. To handle strong nonlinear, time-varying coupling between greenhouse microclimate and crop growth, Kolmogorov-Arnold Networks (KANs) replace Multi-Layer Perceptrons (MLPs) as policy and value approximators for improved nonlinear representation. Sinusoidal cyclic time features are embedded in observations to capture diurnal environmental periodicity. Simulations use a classic winter lettuce greenhouse model driven by 40-day real weather disturbances. Compared with vanilla penalty-based PPO, our method cuts cumulative climate violations by 18.65% and raises lettuce economic profit by 2.91%, keeping violations stable near the safety threshold. This decoupled CMDP optimization with KAN-based policy representation mitigates long-term climate risks and boosts planting profits, offering a constraint-aware control strategy for precision greenhouse cultivation.",
    "published": "2026-09-28T11:48:25Z",
    "updated": "2026-09-28T11:48:25Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34966"
  },
  {
    "id": "2609.34965",
    "title": "Cyclostationary Phase Conditioning for Medical Time Series Diffusion",
    "authors": [
      "Samuel Ruiperez-Campillo",
      "Michele Copetti",
      "Jorge da Silva Goncalves",
      "Sonia Laguna",
      "Thomas Hofmann",
      "Julia E. Vogt"
    ],
    "abstract": "Many physiological time series, such as cardiac and brain recordings, exhibit cyclostationarity: their statistics vary periodically with an underlying cycle phase. Corruption from motion, poor contact, and physiological interference obscures morphology needed for diagnosis, making signal restoration essential. Existing diffusion approaches condition on corrupted observations alone and must learn cyclic structure implicitly. We instead propose two inductive biases which encode cyclostationarity: a shift-covariant wavelet representation and dense per-sample phase conditioning inferred from the corrupted input. We further introduce a training-free cyclostationarity index that quantifies phase structure and predicts when phase conditioning will help. Finally, we propose antithetic coupling of reverse trajectories to reduce sampling variance while achieving comparable performance with fivefold fewer network evaluations. Across modalities, our results show that explicitly encoding measurable cyclic structure improves physiological time-series restoration.",
    "published": "2026-09-28T11:48:11Z",
    "updated": "2026-09-29T07:12:03Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2609.34965"
  },
  {
    "id": "2609.33311",
    "title": "SocialHumanoid: Towards Expressive Humanoid Behavior via One-Step Co-Speech Motion Generation",
    "authors": [
      "Chengqun Yang",
      "Tengjie Zhu",
      "Liang Xu",
      "Fulong Liu",
      "Guanzhu Ren",
      "Yitong Xing",
      "Xuefeng Lu",
      "Fei Shi",
      "Siyuan Fan",
      "Weijie Dong",
      "Yao Mu",
      "Xiaokang Yang",
      "Yichao Yan"
    ],
    "abstract": "Humanoid robots are increasingly expected to serve as embodied social agents that communicate naturally with humans through face-to-face interaction. During such communication, humanoid robots require body behaviors that are synchronized with speech, affectively expressive, and suitable for real-time execution. However, existing co-speech methods are primarily developed for digital humans and lack joint support for affective control and low-latency continuous generation on physical embodiments. To bridge this gap, we present SocialHumanoid, a system for expressive humanoid behavior via one-step co-speech motion generation. Given response speech and a specified affective condition, SocialHumanoid generates each full-body motion window in a single forward pass and connects successive windows through motion-history conditioning. The generated human motion is further converted online into embodiment-compatible robot references and tracked by a whole-body controller for physical execution. To provide explicit supervision for affective body expression, we further introduce AffectMoCap, a 4-hour dataset captured from two professional actors, containing synchronized speech, body motion, fine-grained hand motion, and emotion annotations. On BEAT2, SocialHumanoid achieves the best FGD among the compared generation methods, competitive speech-motion synchrony, and approximately $6\\times$ faster inference than GestureLSM under the same protocol. Perceptual evaluations further show that training with AffectMoCap improves affect recognition from generated body motion, while real-robot experiments demonstrate continuous affect-conditioned behavior and stable long-horizon execution. Our project page is https://rex0191.github.io/SocialHumanoid/.",
    "published": "2026-09-27T07:24:33Z",
    "updated": "2026-09-27T07:24:33Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33311"
  },
  {
    "id": "2609.33306",
    "title": "LoopTrack: A Simple Baseline for Parameter-Efficient Transformer Tracking",
    "authors": [
      "Liang Peng",
      "Chenxiao Li",
      "Libo Zhang",
      "Xingping Dong",
      "Heng Fan"
    ],
    "abstract": "Current Transformer-based tracking methods typically stack multiple Transformer blocks with separate parameters to model interactions between the target template and the search region for target localization. These trackers often incur substantial parameter overhead from stacked blocks, making their deployment on resource-limited devices difficult. To address this, we propose a parameter-efficient Transformer tracking framework, dubbed LoopTrack, which repeatedly applies a set of Transformer blocks with shared parameters to interact features in a looped architecture for tracking, significantly reducing the number of parameters. To further exploit target cues, we present two lightweight designs, including target-aware looping (TAL) and gated target memory (GTM). The former applies intermediate target information generated by one loop to guide feature interaction in the subsequent loop, enabling progressive feature refinement, while the latter maintains a compact memory across frames, which is incorporated into the loop process to provide long-term information to the tracker, mitigating temporal drift in tracking. Compared to existing Transformer trackers, LoopTrack enables multiple rounds of feature interaction with fewer model parameters, making it resource-friendly for deployment. In extensive experiments on multiple datasets, LoopTrack shows a favorable accuracy-parameter trade-off. In particular, our LoopTrack$_{\\rm One}$, with a single shared Transformer block, achieves 66.2\\% SUC score on LaSOT with only 3.4M parameters, while LoopTrack$_{\\rm Three}$, using three shared blocks, achieves 69.3\\% SUC score with 6.4M parameters, surpassing existing parameter-efficient tracking methods with comparable or larger model size. With LoopTrack, we aim to establish a simple yet strong baseline for parameter-efficient Transformer tracking. Our code and models will be released.",
    "published": "2026-09-27T07:17:44Z",
    "updated": "2026-09-27T07:17:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33306"
  },
  {
    "id": "2609.33304",
    "title": "Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents",
    "authors": [
      "Fuyao Zhang",
      "Xuan Wang",
      "Zherui Li",
      "Jiaming Zhang",
      "Longtao Huang",
      "Wei Yang Bryan Lim"
    ],
    "abstract": "Personal Graphical User Interface (GUI) agents rely on interaction history to infer what a user wants from ambiguous instructions and to anticipate recurring routines. Existing approaches retrieve task-relevant history and append it to the policy's context, implicitly assuming that experience relevant to a task remains useful for each decision within it. We find that this help is largely spent at the first decision: retrieved history strongly improves the opening step of an episode, yet provides little sustained benefit over the remaining 90\\% of steps, and offers weak guidance on whether a proactive suggestion is warranted. A relevant record may tell the agent where to begin, but not which past action applies to the current screen or whether a routine is due now. The underlying issue is that relevance does not imply applicability}: relevance is determined at the task level, whereas applicability depends on the situation at decision time. We therefore recast personalization as experience activation and introduce ExpActivator, a training-free framework that activates only the experience applicable to the current situation. During execution, ExpActivator matches each new screen to historical states in the frozen GUI backbone's latent space and supplies the corresponding action as a reference. Before execution, it activates a recurring intent only when the current time and scenario provide sufficient support, and otherwise abstains. Across four GUI backbones, ExpActivator improves within-trajectory step success by 28\\% on average, achieves the best personalized execution on every backbone while using about one-fifth as many history tokens, and reaches approximately 2.3$\\times$ the Matthews correlation coefficient of the strongest proactive baseline. Experience pays where it is activated, not where it is appended.",
    "published": "2026-09-27T07:15:57Z",
    "updated": "2026-09-27T07:15:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33304"
  },
  {
    "id": "2609.33303",
    "title": "BITS: Rethinking Fair and Comprehensive Evaluation for Irregular Time Series Forecasting",
    "authors": [
      "Kangjia Yan",
      "Linfeng Wang",
      "Tianen Shen",
      "Xiangfei Qiu",
      "Ruitong Zhang",
      "Hao Miao",
      "Jilin Hu",
      "Chenjuan Guo",
      "Bin Yang",
      "Christian S. Jensen"
    ],
    "abstract": "Despite recent progress in irregular time series forecasting, the field still lacks a unified benchmark for fair and comprehensive evaluation. Existing evaluations are often conducted on a limited set of datasets with inconsistent experimental protocols and predominantly error-based metrics, rendering it difficult to compare and assess methods fairly and comprehensively across diverse settings. To eliminate these limitations and accelerate progress, we propose BITS, a standardized, reproducible, and extensible benchmark for advancing research on irregular time series forecasting. BITS covers eleven datasets from nine domains with diverse irregularity characteristics, and it characterizes the datasets according to their missing rate, missing pattern complexity, sampling irregularity, and skewness. Further, it offers a unified pipeline for data preprocessing, model integration and evaluation, and reporting. It accommodates regular and irregular time series forecasting methods, including time series foundation models, under consistent settings, incorporating both error-based and non-error-based evaluation metrics. Findings include that method performance varies substantially across irregularity characteristics, with no single modeling strategy consistently dominating. We also find that using error-based or non-error-based metrics can yield different model rankings, highlighting the need for multi-dimensional evaluation. The code can be found at https://anonymous.4open.science/r/BITS-8F2E/.",
    "published": "2026-09-27T07:11:29Z",
    "updated": "2026-09-27T07:11:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33303"
  },
  {
    "id": "2609.33301",
    "title": "Hesitation-Aware On-Policy Distillation for Diffusion Language Models",
    "authors": [
      "Jianguo Huang",
      "Lipeng Wan",
      "Yanchen Deng",
      "Bo An"
    ],
    "abstract": "Diffusion large language models (dLLMs) generate text by iterative unmasking. At each denoising step, a dLLM proposes a token at every masked position, but the decoder commits only a confident subset of these proposals. Trace-based on-policy distillation (TOPD) builds on this process by matching the student to a stronger teacher, yet only at the committed positions. We argue that this discards much of the useful signal, which resides in the uncommitted proposals, where the student has made a prediction but is not yet confident enough to commit it. We call these proposals hesitations. In our pilot study on an SDAR-4B student, hesitations make up only 24% of supervisable state-position pairs but carry 66% of the teacher-student divergence. To exploit this signal, we propose Hesitation-Aware On-Policy Distillation (HOPD), which extends teacher distribution matching to every masked position of each denoising step. Because hesitations are not equally informative, we further allocate supervision using hindsight from the completed trajectory, placing more weight on positions whose proposal was later disagreed with the final token and on blocks where first-step proposals rarely survive. Since both models already produce distributions at all masked positions, HOPD requires no additional forward passes over TOPD. The only extra cost is evaluating the loss at more positions. With SDAR-1.7B and SDAR-4B students distilled from TraDo-8B-Instruct, HOPD achieves the best average score among the evaluated methods on five math and coding benchmarks, under both static and dynamic decoding and at both scales. It also speeds up decoding. On SDAR-4B, the HOPD student hesitates less and commits 11% more tokens per denoising step than TOPD, while reaching higher accuracy.",
    "published": "2026-09-27T07:09:59Z",
    "updated": "2026-09-27T07:09:59Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33301"
  },
  {
    "id": "2609.33299",
    "title": "AquaWAM: A Dynamics-aware World Action Model for Underwater Embodied Agents",
    "authors": [
      "Cunhao Zhu",
      "Yifeng Wang",
      "Dongliang Xu",
      "Yunzhong Hou",
      "Yue Yao",
      "Chi Harold Liu"
    ],
    "abstract": "World Action Models (WAMs) are becoming increasingly important and useful for embodied intelligence, as they enable robots to anticipate the consequences of candidate actions before interacting with the physical environment. However, underwater robots are usually subject to passive dynamics, such as inertia, buoyancy, hydrodynamic drag, and persistent drift, which can continue to affect the vehicle even after an action is completed. Existing WAMs, which primarily predict action-conditioned visual observations, are not explicitly designed to capture such passive motion dynamics. In this paper, we present AquaWAM, the first World Action Model designed for underwater embodied agents. Instead of predicting future images, AquaWAM models both action-conditioned and passive physical dynamics, including the thruster dead band, the inertial glide that outlasts each command, and ambient currents. Specifically, it senses through the DVL, IMU, pressure sensor and joint encoders, while cameras supply only semantics for understanding goals and target pose. By modeling compact navigation states rather than high-dimensional visual observations, AquaWAM substantially reduces the model size and computational cost compared with conventional WAMs. Experimentally, AquaWAM achieves a 72.6% task success rate across 20 underwater tasks on the USIM benchmark, outperforming existing methods while making action decisions 2.7x faster than U0 on an NVIDIA Jetson AGX Orin. Our model also remains effective when some onboard sensor measurements are unavailable. For example, without DVL velocity measurements, our method still achieves a 61.6% success rate, compared with 39.4% for U0.",
    "published": "2026-09-27T07:09:26Z",
    "updated": "2026-09-29T04:32:33Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33299"
  },
  {
    "id": "2609.33297",
    "title": "The Error You See Is Not the Error You Made: Progression-aware Reasoning Origin for Reasoning Error Localization",
    "authors": [
      "Yiguo Wang",
      "Ziyuan Yang",
      "Yi Zou",
      "Dan Lin",
      "Rongsheng Li",
      "Yi Zhang"
    ],
    "abstract": "Verifying multi-step LLM reasoning requires more than determining whether a trace is correct: a useful verifier should identify where the reasoning first goes wrong. However, existing holistic methods provide little positional evidence, while forward sequential verification often treats the first rejected step as the error source. Under error propagation, this assumption can fail, since an earlier mistake may remain locally plausible and become observable only through its downstream consequences. We therefore rethink reasoning verification as a progression-aware error-source localization problem: rather than asking only where a reasoning trace first appears inconsistent, we ask which earlier step best explains how that inconsistency emerges along the trajectory. Based on this view, we propose Progression-aware Reasoning Origin (PRO), a training-free framework for first-error localization. PRO jointly models incoming support from the preceding context and outgoing compatibility with subsequent reasoning, selectively refines regions where these signals disagree, and finally performs detector-conditioned source attribution with intervention-based evidence to distinguish the true error origin from its propagated manifestations. We further formalize the gap between forward rejection and structural exposure, showing why incoming-side evidence alone is insufficient for reliable localization under error propagation. Experiments across open-form, medical, and structured reasoning tasks demonstrate consistent improvements over strong verification baselines, supporting progression-aware source attribution as a more faithful formulation of reasoning verification.",
    "published": "2026-09-27T07:03:59Z",
    "updated": "2026-09-27T07:03:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33297"
  },
  {
    "id": "2609.33295",
    "title": "TraceDance: An Automated System for Building Agent Behavior Benchmarks from Real-World Agent Deployment Traces",
    "authors": [
      "Dehai Min",
      "Daoan Zhang",
      "Yiming Zeng",
      "Huayi Zhang",
      "Ziyi Chen",
      "Yan Zhang",
      "Qinbo Bai",
      "Mengyuan Chao",
      "Jing Ning",
      "Qiyue Hua",
      "Huiyi Chen",
      "Hanrong Zhang",
      "Henry Peng Zou",
      "Jie Yang",
      "Wei Xu",
      "Philip S. Yu"
    ],
    "abstract": "An agent can complete a task while exhibiting undesirable behavior during execution. Developers need tests for the specific behaviors encountered in deployment, beyond fixed benchmark suites. We present TraceDance, an agent system that constructs targeted benchmarks from deployment traces for user-specified undesirable behaviors. For efficient construction, Anchor-and-Confirm combines programmable retrieval with candidate-level confirmation by a Flash large language model (LLM), while the Anchor Synthesis Loop generates and revises specifications for custom behaviors. The benchmarks use decision-point continuation to evaluate an LLM's next turn at a recorded decision point with a behavior-specific rubric, without a reference answer or environment replay. Experiments in coding and general tool use draw on 252,557 sessions and produce 107 benchmarks with 4,125 instances, fulfilling 95.3% of build-target requests. Both human annotators confirm the requested behavior in 84% of sampled instances, and the automated grader's agreement with human pass/fail judgments is comparable to that between the annotators. Nine frontier LLMs achieve a mean pass rate of only 26.7%, showing that they still struggle to respond appropriately at the evaluated decision points. Analysis across behavior-specific benchmarks further reveals weaknesses in how current LLMs behave as agents. By turning deployment problems into targeted benchmarks, TraceDance could serve as a key component of the recursive self-improvement (RSI) loop.",
    "published": "2026-09-27T06:58:39Z",
    "updated": "2026-09-27T06:58:39Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.33295"
  },
  {
    "id": "2609.33289",
    "title": "Learning to Sell: Reinforcement Learning for Strategic Large Language Model Agents in Multi-Product Markets",
    "authors": [
      "Shuze Daniel Liu",
      "Claire Chen",
      "Jiuqi Wang",
      "Thorsten Joachims"
    ],
    "abstract": "Autonomous large language model (LLM) agents operating in multi-product markets must make sequential decisions under information asymmetry and resource constraints. We develop a machine learning approach for training such agents to act effectively as sellers in a multi-item bargaining environment, where a seller concurrently negotiates a catalog of substitutable assets across a pool of independent buyers. Buyers hold private, heterogeneous valuations across products, and each can purchase at most one item. Facing limits on total communication turns, the seller must dynamically match buyers with the most profitable products considering their private valuations, while strategically allocating its limited interaction budget toward combinations of greater potential value. We formalize this problem as a Partially Observable Markov Decision Process using a structured, four-part message protocol that maps natural language into a parsable and regulated decision space. Using this formalization, we design a post-training method using Reinforcement Learning from Verifiable Rewards (RLVR). To evaluate this framework, we construct a multidimensional metric suite that quantifies constraint adherence, seller surplus extraction, and allocation quality. Our trained seller agent learns to match limited inventory to buyers more effectively, matching or outperforming trillion-parameter frontier models in both seller surplus extraction and buyer-product allocation quality. Finally, these learned strategies generalize robustly to unseen market structures, correlated valuation distributions, and price ranges not encountered during training.",
    "published": "2026-09-27T06:51:56Z",
    "updated": "2026-09-27T06:51:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33289"
  },
  {
    "id": "2609.33288",
    "title": "Informative Viewpoint Selection for Episodic-Memory Embodied Question Answering using Omnidirectional Images",
    "authors": [
      "Kaname Kitamura",
      "Asako Kanezaki"
    ],
    "abstract": "Embodied Question Answering (EQA) requires agents to answer natural language questions about surrounding environments from visual observations. In this work, we focus on open-vocabulary episodic-memory EQA (EM-EQA), where an agent answers free-form questions using recorded observation histories. Omnidirectional images are promising for this task, as they provide wide field-of-view observations that can capture surrounding context without requiring explicit camera rotations. However, omnidirectional images introduce two challenges for EQA: (i) equirectangular projection causes severe geometric distortion that degrades vision-language model (VLM) recognition accuracy, and (ii) feeding equirectangular images directly into VLMs introduces excessive irrelevant background information, reducing answer accuracy and increasing the visual-token burden. To address these challenges, we propose a viewpoint selection method for EM-EQA using omnidirectional images. Our method converts equirectangular observations into perspective views via cubemap projection, estimates question-conditioned relevance with fine-tuned BLIP-2, and selects informative and diverse viewpoints through diversity-aware greedy selection. Experiments on the Habitat-Matterport 3D (HM3D) subset of OpenEQA show that our method achieves state-of-the-art model performance among the reported model results with equirectangular observations. Moreover, after removing rotation views, which reduces observation frames by 65.5%, our method largely maintains its answer accuracy.",
    "published": "2026-09-27T06:50:25Z",
    "updated": "2026-09-27T06:50:25Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.33288"
  },
  {
    "id": "2609.33287",
    "title": "Feedback Makes Perfect: A Closed-Loop Framework for NL-to-STL Translation",
    "authors": [
      "Bowen Ye",
      "Xiang Yin"
    ],
    "abstract": "Signal Temporal Logic (STL) enables rigorous verification and control of cyber-physical systems, but writing correct specifications requires expertise that most requirement holders lack. Large language models can translate natural-language (NL) requirements into STL, yet stronger translators alone approach an accuracy ceiling. We argue that this ceiling stems from how the task is posed: one-shot, open-loop translation is somewhat ill-defined. Natural language is ambiguous, and, more fundamentally, what a person writes may not always be what they intend, so the target specification is not fully contained in the input text. We therefore reformulate NL-to-STL translation as a closed-loop feedback process. Each generated formula is translated back into natural language for the user to check, and natural-language corrections drive revision until the user accepts the specification. Users never read or write formal syntax. This framework rests on an asymmetry familiar from feedback control theory. The forward path, from ambiguous language to formal logic, is hard and error-prone. The feedback path, from structured STL back to language, can be made highly precise, and a precise feedback path lets an imprecise forward path achieve precise closed-loop behavior. Experiments on 500 expert-authored requirements and seven LLMs support this view. Back-translated explanations agree with expert judgments in 99.5\\% of cases. Closed-loop refinement raises strong models from about 89\\% open-loop accuracy to 98.0--99.2\\%, and yields gains of over 30 percentage points for weaker models (e.g., 17.6\\%$\\rightarrow$48.0\\%). Ablations show these gains come from the semantic content of the feedback rather than from repeated attempts. An expert audit and a 280-session user study further confirm the reliability of the loop. We also identify a capability threshold above which feedback no longer helps.",
    "published": "2026-09-27T06:46:39Z",
    "updated": "2026-09-27T06:46:39Z",
    "categories": [
      "cs.AI",
      "cs.RO",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2609.33287"
  },
  {
    "id": "2609.33286",
    "title": "InfoEdit: Probing Global Layout Reasoning in Infographic Editing",
    "authors": [
      "Cheng Yang",
      "Chufan Shi",
      "Huijuan Wang",
      "Bo Shui",
      "Yaokang Wu",
      "Muzi Tao",
      "Yibo Yan",
      "Xuezhe Ma",
      "Taylor Berg-Kirkpatrick"
    ],
    "abstract": "Multimodal foundation models edit natural photographs at production quality, yet the same models struggle with structured visual content such as infographics. Unlike photographs, infographics encode information through logical relations; editing one element often requires surrounding elements to be adapted. We refer to this global layout reasoning capability as reflow. Existing image-editing benchmarks neither provide a dedicated setting for structured visual content nor evaluate the reflow capability. We introduce InfoEdit, a novel benchmark of 1,000 infographics across eight logical-relation families, paired with 4,000 editing instructions across four editing tasks, and a reflow-aware evaluation protocol. Across eight frontier editors, only GPT-Image-2 clears 60% average success rate; most models fall below 7%, and no editor exceeds 36% on the Swap-Block task even with perfect target localization. We further show that code-level editing can match the strongest pixel-level editor, revealing complementary strengths across tasks. InfoEdit identifies reflow as a central challenge in structured visual content editing and provides a diagnostic benchmark to facilitate future progress.",
    "published": "2026-09-27T06:45:45Z",
    "updated": "2026-09-27T06:45:45Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.33286"
  },
  {
    "id": "2609.32255",
    "title": "Clarify the User or Verify the World? Uncertainty Routing for Proactive Agents",
    "authors": [
      "Zhaofeng Li",
      "Xuan Zhang",
      "Xiaokui Xiao",
      "Yang Deng"
    ],
    "abstract": "Tool-using LLM agents must decide not only whether additional information is needed, but also which source can resolve the uncertainty. Existing proactive approaches often specialize in either user clarification or environment verification, without explicitly determining the appropriate information source for each decision. We formulate this problem as uncertainty routing among ACT, CLARIFY, and VERIFY, and propose PROUR, a proactive uncertainty routing framework. PROUR decomposes action uncertainty into disagreement across plausible user-goal interpretations, which signals user-side ambiguity, and the entropy remaining within each interpretation, which signals missing world-side evidence. To acquire information from the routed source, a query generator is trained with a mode-conditioned information-gain reward, targeting user-goal identification under CLARIFY and next-action identification under VERIFY. On $τ$-bench, PROUR achieves 28.17% average success rate across retail and airline, outperforming the strongest prior method by 4.57% while using 2.17 fewer interaction steps. The learned policy further generalizes to stronger task agents and transactional domains of $τ^3$-bench without retraining, demonstrating the benefit of source-aligned uncertainty resolution for proactive agents.",
    "published": "2026-09-26T05:25:50Z",
    "updated": "2026-09-26T05:25:50Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32255"
  },
  {
    "id": "2609.32254",
    "title": "Why Directly Learning Periodic Trajectories Can Fail",
    "authors": [
      "Kaixin Zheng",
      "Anita Layton"
    ],
    "abstract": "Operator learning of periodic solutions requires deciding how simulation data should be recorded and represented. A natural choice is to integrate long enough for transients to decay and record a window wide enough to contain at least one full period of all trajectories. We find that these conservative choices can make the resulting trajectories difficult to learn, even when the underlying periodic orbits vary regularly with system parameters. Unaligned trajectories generalize poorly even within the training distribution. Phase alignment substantially improves in-distribution generalization, but models trained on a fixed physical-time window still have large errors on trajectories with periods outside the training range. We explain both failures through a common mechanism: frequency differences accumulate over time, so the target phase varies rapidly with the parameters. Predictors that cannot track this variation incur a population MSE floor in both settings; for fixed window prediction, we also derive a per-sample lower bound. We then study one of the simplest representations that escape these floors: learning an aligned, normalized waveform and its period separately. We establish regularity of the decoupled targets under ODE assumptions and show experimentally that this approach avoids both failures in ODE systems and a PDE case study.",
    "published": "2026-09-26T05:19:56Z",
    "updated": "2026-09-26T05:19:56Z",
    "categories": [
      "cs.AI",
      "math.CA",
      "math.NA"
    ],
    "url": "https://arxiv.org/abs/2609.32254"
  },
  {
    "id": "2609.32253",
    "title": "DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control",
    "authors": [
      "Yaxing Lyu",
      "Jingyi Li",
      "Mingkun Xu",
      "Yujie Wu"
    ],
    "abstract": "Vision-language-action (VLA) models have achieved strong performance in language-conditioned manipulation, yet success under nominal evaluation does not necessarily translate into robust closed-loop behavior when executed actions are transiently corrupted. We introduce DS-VLA, a dendritic-inspired action architecture that incorporates dendritic spiking dynamics into VLA control to address this limitation. Specifically, to enable modularized feature processing and temporal information integration, DS-VLA equips action neurons with multiple sparsely connected dendritic branches, each featuring heterogeneous, learned decay factors. Furthermore, to suppress unreliable state updates while preserving task-relevant historical information, we introduce a neuron-wise inhibitory gate that adaptively regulates the admission of new multimodal evidence into dendritic states prior to somatic dynamics. We evaluate DS-VLA on all four LIBERO suites under both nominal rollouts and a unified closed-loop action-perturbation protocol. DS-VLA achieves a 91.6\\% average nominal success rate and an 87.35\\% average perturbed success rate, retaining 95.4\\% of its nominal performance. Under the same reported perturbation setting, OpenVLA-OFT, FAST, $π_0$, and GR00T achieve 39.45\\%, 23.90\\%, 28.55\\%, and 30.75\\%, respectively. A controlled ablation isolates the contribution of neuron-wise shared inhibition, while analyses of neural dynamics and post-perturbation trajectories associate robust performance with selective evidence suppression and effective behavioral recovery. Together, these results demonstrate that integrating brain-inspired computational mechanisms offers a promising architectural prior for robust embodied intelligence beyond merely scaling vision-language backbones or generative action decoders.",
    "published": "2026-09-26T05:17:16Z",
    "updated": "2026-09-26T05:17:16Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2609.32253"
  },
  {
    "id": "2609.32250",
    "title": "RoboSTAR: Next-Scale Autoregressive Sign Language Translation for Humanoid Robots",
    "authors": [
      "Yujia Zeng",
      "Chensheng Peng",
      "Yuxin Chen",
      "Alex Shao",
      "Nathan Jew",
      "Masayoshi Tomizuka"
    ],
    "abstract": "Sign-language interpretation in public communication relies on qualified professional interpreters and can be difficult to scale, motivating robotic signing as a complementary accessibility interface. We present RoBoSTAR, a text-conditioned sign language production (SLP) framework for generating human-centric sign motion that can be retargeted for robotic execution, with speech supported optionally through an external ASR front end. Conventional autoregressive approaches flatten motion into a single full-resolution token sequence, forcing long-range and local dependencies to be modeled at a uniform temporal granularity. RoBoSTAR instead combines part-wise Finite Scalar Quantization with next-scale autoregression, generating motion over progressively finer temporal resolutions while predicting synchronized body and hand tokens in parallel within each step. This coarse-to-fine formulation provides compact long-range context before progressively refining motion details, while self-conditioning and context corruption improve robustness to cross-scale prediction errors. The generated motion is subsequently retargeted for physical humanoid execution. Extensive qualitative and quantitative evaluations are conducted to demonstrate the effectiveness of RoBoSTAR.",
    "published": "2026-09-26T05:12:00Z",
    "updated": "2026-09-26T05:12:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32250"
  },
  {
    "id": "2609.32247",
    "title": "Certifying Interventional Agreement Among Observationally Equivalent Causal Models",
    "authors": [
      "Sourena Khanzadeh",
      "Daniel Platnick",
      "Marjan Alirezaie",
      "Hossein Rahnama"
    ],
    "abstract": "Observationally equivalent causal models can still disagree about what happens under intervention, because interventions create inputs that never occur in observational data. We introduce Interventional Separation Selection (ISS), which repeatedly queries the true system with an admissible intervention on which the surviving candidate models disagree, discards the candidates the outcome contradicts, and stops once no intervention within a cost bound separates the survivors. If the true system is among the candidates, this stopping condition certifies that every survivor agrees with it on every admissible intervention within the bound, a guarantee that no observational learner can give, however much data it sees. The stopping condition depends only on the survivors, so it can be checked without knowing the truth. For continuous variables the candidates form an infinite version space, and mixed-integer linear programs decide the stopping condition exactly over all of it, with agreement holding up to a tolerance. On a three-digit colored MNIST causal abstraction task in which ink hue tracks digit size, plain convolutional networks trained on examples reach zero held-out error, yet disagree with shape-based labels on 26% of single-digit edits, as often as hue-based labels do. Auditing the causal abstractions of networks observed only on such images, ISS certifies what each network perceives with 13.6 interventions per image on average, and each certificate, checked against every admissible intervention, holds whenever the network's true abstraction is among the candidates. When a network bypasses a unit that every candidate abstraction relies on, certificates covering interventions on that unit can be silently void, and twenty random validation interventions refute 69% of them.",
    "published": "2026-09-26T05:07:57Z",
    "updated": "2026-09-26T05:07:57Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32247"
  },
  {
    "id": "2609.32245",
    "title": "AutoPDEBench: Benchmarking LLM Auto-Research for Neural PDE Solver Design",
    "authors": [
      "Ruoyan Li",
      "Wei Wang",
      "Yizhou Sun"
    ],
    "abstract": "Partial differential equations (PDEs) are essential for modeling complex physical systems, and neural solvers have recently emerged as powerful data-driven tools for numerically solving them. However, existing neural solvers struggle with domain-specific challenges, such as varying parameters and high-speed flows, necessitating specialized architectures. Manually designing these specialized solver architectures is a highly iterative, time-consuming process requiring deep expertise, creating a significant bottleneck in scientific discovery. We propose leveraging autonomous AI research agents to automate the synthesis of specialized solvers. To support this, we introduce AutoPDEBench, a benchmark dedicated to LLM-driven automated research for PDE solver design. The benchmark includes 25 challenging datasets featuring both novel and actively studied physical scenarios. We evaluate a suite of general-purpose models (transformer, ROM, and graph-based) alongside a multi-agent instantiation of the iterative automated research pipeline, which serves as an agentic baseline. Empirical results show that the iterative automated research system significantly outperforms the general-purpose neural solver baselines. Our findings demonstrate the viability of using AI agents to automatically design neural solvers for complex physical systems. AutoPDEBench provides a foundational testbed to accelerate agent-driven scientific discovery in physics and engineering.",
    "published": "2026-09-26T05:02:34Z",
    "updated": "2026-09-26T05:02:34Z",
    "categories": [
      "cs.CE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32245"
  },
  {
    "id": "2609.32244",
    "title": "Two-Stage Multi-View Gait Recognition with a Re-Embedding Network",
    "authors": [
      "Long Hoang Le",
      "Trung Thanh Ngo"
    ],
    "abstract": "Gait recognition always remains challenging due to severe overfitting and the rigid view constraints common in single-stage approaches. We propose a two-stage framework, termed Translate-First-Then-Reason (TFTR), to address these issues. In the first stage, a shallow Siamese convolutional network with triplet loss maps Gait Energy Images (GEIs) into a 128-dimensional view-specific embedding space. In the second stage, these per-view embeddings are treated as tokens and processed by a 12-layer Transformer encoder, which re-projects them into a new space with improved cosine separability. This design enables flexible fusion of an arbitrary number of views at inference, overcoming the fixed-input limitations of prior methods. Trained on the OU-MVLP dataset (6,000 subjects) and evaluated on unseen CASIA-B across normal, bag-carrying, and coat-wearing conditions, our pipeline achieves 96.91\\% single-view and 99.49\\% three-view accuracy on OU-MVLP, and attains 100\\% accuracy on CASIA-B with three views.",
    "published": "2026-09-26T05:02:13Z",
    "updated": "2026-09-26T05:02:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32244"
  },
  {
    "id": "2609.32241",
    "title": "Residual Transferability in Neural Image Watermarking",
    "authors": [
      "Ziping Dong",
      "Qi Li",
      "Xinchao Wang"
    ],
    "abstract": "Neural image watermarks can be forged by extracting watermark-bearing residuals from released images and transferring them to unrelated content. While prior work has demonstrated this vulnerability, what makes these residuals transferable remains poorly understood. We formalize this vulnerability with \\textbf{residual transferability (RT)}, a metric that quantifies how well watermark evidence remains decodable after transfer across unrelated images. Through comparative analyses and controlled interventions, we find that common training-side variations do not account for the large RT differences across watermarking systems; instead, architectural design plays a central role. By contrasting high- and low-RT systems and validating their architectural differences through controlled interventions, we identify two mechanisms that strengthen the dependence of watermark evidence on the cover image, thereby suppressing the residual transferability. These findings provide concrete design guidance for developing more forgery-resistant watermarking architectures. Complementarily, for existing watermarking systems where architectural redesign is impractical, we introduce \\textbf{CoverLock}, a plug-and-play strategy for existing watermarking systems that strengthens such image dependence without architectural redesign. Across representative watermarking systems exhibiting high residual transferability, CoverLock achieves a more favorable security--robustness trade-off than both traditional handcrafted defenses and learned classifier-based defenses.",
    "published": "2026-09-26T04:59:33Z",
    "updated": "2026-09-26T04:59:33Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32241"
  },
  {
    "id": "2609.32239",
    "title": "Federated Subspace Guided Vision-Language-Action Policy Distillation for Non-IID Multi-Robot Manipulation",
    "authors": [
      "Biprodip Pal",
      "Kaushik Roy",
      "Yanming Zhu",
      "Brendan Tidd",
      "Alan Wee-Chung Liew",
      "Peyman Moghadam"
    ],
    "abstract": "Federated learning offers a natural way for multiple robots to jointly improve manipulation policies without requiring centralized access to training demonstrations. However, non-IID task and environment distributions can induce representation drift and mutually incompatible robot-policy updates, making naive parameter aggregation destructive. We present FedDRMan, a federated subspace-guided distillation framework for heterogeneous robot manipulation. At each communication round, the server model provides a frozen teacher for local behavior cloning, while low-rank multimodal subspace and action-distribution distillation preserve globally useful representation geometry and policy behavior. To address heterogeneous aggregation, FedDRMan groups clients by update compatibility and maintains a persistent model for each cluster. The server then spectrally rebalances each compatible aggregate to mitigate attenuation of weaker task-relevant robot-policy update directions. Extensive experiments on LIBERO across diverse non-IID settings, heterogeneity levels, client participation variation, together with ablations and aggregation analyses, show that FedDRMan substantially improves knowledge transfer and consistently outperforms strong federated baselines achieving a peak mean success rate of 80.7%, 11.6 percentage points above the strongest evaluated federated baseline.",
    "published": "2026-09-26T04:56:49Z",
    "updated": "2026-09-26T04:56:49Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.DC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32239"
  },
  {
    "id": "2609.32231",
    "title": "Skeletons in Flow: Graph Structured Flow Matching for Human Motion Prediction",
    "authors": [
      "Yixuan Wang",
      "Brandon C. Fallin",
      "Warren E. Dixon"
    ],
    "abstract": "Human motion prediction requires diverse future trajectories that remain consistent with observed motion and the articulated physical structure of the body. Skeletal constraints restrict individual poses, while coordinated motion depends on spatial interactions (between connected joints) and temporal interactions (between time instants). To facilitate human motion prediction in light of these constraints and interactions, we introduce Graph Structured Flow Matching (GSFM), which transports the complete future skeletal trajectory through a single conditional velocity field. The trajectory produces a spatiotemporal skeleton graph, and spatial and temporal attention couple its evolution according to skeletal relations and physical time offsets. Bone directions lie on unit spheres relative to a root joint, and tangent evolution preserves input bone lengths throughout generation. We train a learned velocity field through conditional flow matching along geodesic paths connecting random trajectories centered on the last-observed pose to recorded future trajectories. Experiments on the Archive of Motion capture As Surface Shapes (AMASS) dataset evaluate prediction accuracy, diversity calibration, and motion statistics. We demonstrate the contributions of spatial and temporal message passing in the developed architecture through an ablation study. GSFM models trained on AMASS also perform competitively on the Human3.6M skeleton without parameter updates or retraining, demonstrating applicability to an unseen skeletal structure.",
    "published": "2026-09-26T04:45:53Z",
    "updated": "2026-09-26T04:45:53Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.32231"
  },
  {
    "id": "2609.32226",
    "title": "Toward Agentic Optical Networks: A Vision of LLM Agent-Driven Autonomous Lifecycle Management",
    "authors": [
      "Yao Zhang",
      "Shengnan Li",
      "Yuchen Song",
      "Yidi Wang",
      "Yue Pang",
      "Wenbin Chen",
      "Xiaotian Jiang",
      "Xiao Luo",
      "Meixia Fu",
      "Min Zhang",
      "Yongli Zhao",
      "Shanguo Huang",
      "Alan Pak Tao Lau",
      "Danshi Wang"
    ],
    "abstract": "As optical networks continue to expand in scale, complexity, and service diversity, the implementation of automation has become essential for ensuring agility, efficiency, and reliability in lifecycle management (LCM) of optical networks. Large language model (LLM) Agent, distinguished by its progressively sophisticated capabilities in logical reasoning, adaptive decision-making, complex problem solving, and multi-task orchestration, presents great opportunities to advance network automation beyond traditional AI techniques. Nevertheless, the application of LLM Agent in optical networks remains in its early exploratory stage, challenged by the lack of multi-task coordination, high computational demands, data dependence, and reliability concerns. In this paper, we envision a conceptual roadmap toward Agentic Optical Networks (AONs) by integrating LLM Agents throughout the LCM with high-level autonomy. First, we trace the evolution from manual operations to AI-empowered frameworks and distill key technologies in Agent, providing actionable insights into leveraging its strengths for addressing practical network automation challenges. A core contribution of this paper is the proposal of a hierarchical multi-Agent framework, which is specifically developed to manage every phase in LCM of AONs, including planning, deployment, operation, maintenance, upgrade, and decommission, thereby enabling more cohesive and comprehensive automation throughout the entire lifecycle. In addition, future directions and underlying challenges are also discussed at the intersection of LLM and optical networks. By aligning the LLM Agent with the specialized requirements of AONs, this work aims to explore the potential for the evolution of optical networks moving from task-level semi-automatic execution toward lifecycle-level full autonomy.",
    "published": "2026-09-26T04:41:31Z",
    "updated": "2026-09-26T04:41:31Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32226"
  },
  {
    "id": "2609.32225",
    "title": "LaMET-Agent: An Agent Framework for Large-Momentum Effective Theory Analysis",
    "authors": [
      "Jinchen He",
      "Xiangyu Jiang",
      "Fei Yao",
      "Dian-Jun Zhao"
    ],
    "abstract": "Large-momentum effective theory (LaMET) provides a first-principles framework for computing the $x$ dependence of light-cone parton distributions from lattice QCD. Over the past decade, theoretical and numerical advances have established a mature multi-stage workflow for systematic calculation of parton physics, although its implementation still requires expert judgment and substantial repeated effort. We present lamet-agent, an open-source large language model (LLM) agent framework that organizes this workflow into an executable, reproducible, and inspectable analysis pipeline. The present release supports collinear quark distributions and implements correlator analysis, renormalization, Fourier transformation, perturbative matching, continuum, physical pion mass and infinite-momentum extrapolations, and automated result review. We validate it on four end-to-end analyses: pion parton distribution functions in the gauge-invariant and Coulomb-gauge formulations, and pion and kaon distribution amplitudes, obtaining results consistent with the published calculations. Extensions to transverse-momentum-dependent distributions, generalized transverse-momentum-dependent distributions, and gluonic distribution functions are planned for subsequent releases.",
    "published": "2026-09-26T04:35:11Z",
    "updated": "2026-09-26T04:35:11Z",
    "categories": [
      "hep-lat",
      "cs.AI",
      "hep-ph"
    ],
    "url": "https://arxiv.org/abs/2609.32225"
  },
  {
    "id": "2609.30855",
    "title": "MDSkin-Net: Multi-Task Skin Lesion Analysis Driven by Pattern Analysis Priors and Spatial Alignment Regularization",
    "authors": [
      "Yijian Li",
      "Saad Bedros",
      "Paul Bigliardi",
      "Mei Bigliardi Qi",
      "Vassilios Morellas",
      "Nikolaos Papanikolopoulos"
    ],
    "abstract": "Reliable skin lesion segmentation and classification are central to dermoscopic computer-aided diagnosis. Existing multi-task frameworks couple the two tasks architecturally without clinical knowledge, while knowledge-injecting approaches rely on the macroscopic ABCD rule, which was not designed for dermoscopy. Dermoscopic diagnosis is grounded in Pattern Analysis, a microscopic framework structured around dermoscopic features. We propose MDSkin-Net, which incorporates cue-level Pattern Analysis priors into a hybrid CNN-Transformer architecture. At its core is a Pattern Analysis-Guided Attention Module (PAGAM) comprising three priors motivated by distinct dermoscopic cues: an improved Efficient Channel Attention (iECA), a Multi-Scale Spatial Attention (MSSA), and a Biased Asymmetry Attention (BAA). We further introduce a multi-scale spatial alignment regularization (MSAR) that uses the segmentation ground-truth mask as hierarchical soft supervision, confining the classification head to lesion-localized evidence and coupling both task pathways through a shared spatial prior. Trained exclusively on the ISIC 2017 training split without external dermoscopy data, the MDSkin-Net ensemble transfers robustly under zero-shot evaluation, reaching a Dice Similarity Coefficient (DSC) of 92.38% and a melanoma AUC of 97.84%on PH2, and a DSC of 88.92% on the ISIC 2018 Task 1 test set. On the in-domain ISIC 2017 benchmark, the ensemble attains a mean Area Under the Curve (AUC) of 91.60% across the two classification tasks (melanoma and seborrheic keratosis vs. rest), and a DSC of 84.72% for segmentation. Classification remains competitive with baselines; in-domain segmentation trails single-task specialists, yet the proposed priors and alignment regularization yield representations that generalize consistently across cohorts of different scales.",
    "published": "2026-09-25T06:02:34Z",
    "updated": "2026-09-25T06:02:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30855"
  },
  {
    "id": "2609.30841",
    "title": "Why Jailbreaks Succeed in Diffusion Language Models: An Energy Landscape Analysis",
    "authors": [
      "Thong Bach",
      "Dung Nguyen",
      "Thao Minh Le",
      "Truyen Tran"
    ],
    "abstract": "Existing attacks and defenses for diffusion-based large language models (dLLMs) target specific vulnerabilities but lack a shared framework explaining why attacks succeed. We propose one by interpreting safety alignment as shaping the denoising energy landscape: a well-aligned model routes harmful queries toward safe outputs through an energy barrier that separates the two regions. Current jailbreak attacks reduce to two strategies for circumventing this barrier: obscuring the query's safety disposition at initialisation, or intervening mid-trajectory to force the denoising path across the energy barrier. From this perspective and the result that masked diffusion models minimise kinetic energy during denoising, we derive three complementary, training-free detection signals: a step-0 ratio that reads the initial safety disposition from the logit distribution before generation begins, and two trajectory-velocity signals that track kinetic energy in complementary subspaces of the logit space. An attack must either reveal its intent at initialisation or expend kinetic energy to cross the barrier in at least one monitored subspace, so the three signals cover each other's blind spots in the energy budget by construction. Evaluation across three dense dLLMs (LLaDA-8B, LLaDA-1.5, Dream-7B) and a sparse mixture-of-experts dLLM (LLaDA-MoE-7B) confirms this complementarity. In stress tests of known attacks, every configuration that evades detection also fails to produce harmful content, suggesting that the detection and barrier-crossing thresholds are hard to separate.",
    "published": "2026-09-25T05:35:36Z",
    "updated": "2026-09-25T05:35:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30841"
  },
  {
    "id": "2609.30840",
    "title": "Aligning One-Step Generative Models with Reward-Weighted Transport Distillation",
    "authors": [
      "Austin Wang",
      "Ziheng Cheng",
      "Lexing Ying"
    ],
    "abstract": "One-step generators enable high-quality visual generation with a single network evaluation, but their post-training is difficult: general implicit generators provide neither tractable likelihoods nor denoising trajectories, and many rewards are non-differentiable. We introduce Reward-Weighted Transport Distillation (RWTD), a post-training method that requires only generated samples and scalar reward evaluations. Rather than aligning solely to the conventional reward-tilted reference distribution, RWTD constructs an adaptive target that mixes separately tilted current and reference distributions. The current component incorporates improvements discovered during training, while the reference component anchors the target to the pretrained generator. RWTD realizes this target through feature-space optimal transport and fixed-point regression. Theoretical analysis shows that the fixed-point distributions of RWTD interpolate between off-policy reward tilting of the reference and on-policy tilting of the current model, providing a principled approach to balancing reward adaptation with retention of prior knowledge. Empirically, RWTD substantially improves the GenEval score of the one-step SANA Sprint 1.6B backbone from 0.73 to 0.80, while separate preference alignment experiments demonstrate strong cross-reward generalization that yields balanced improvements and preservation of compositional capabilities.",
    "published": "2026-09-25T05:35:32Z",
    "updated": "2026-09-25T05:35:32Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30840"
  },
  {
    "id": "2609.30837",
    "title": "MOPD-Router: Rethinking Teacher Routing in Multi-Teacher On-Policy Distillation",
    "authors": [
      "Tianze Xu",
      "Yanzhao Zheng",
      "Zhentao Zhang",
      "Yuanqiang Yu",
      "Chao Ma",
      "Jihuai Zhu",
      "Lelun Wu",
      "Lyumanshan Ye",
      "Pengfei Liu",
      "Baohua Dong",
      "Hangcheng Zhu",
      "Ruohui Huang",
      "Gang Yu"
    ],
    "abstract": "Multi-teacher on-policy distillation (MOPD) integrates specialized capabilities into a single student, but existing practice typically hard-routes each prompt to a domain-matched teacher for the entire rollout. This dependence on prompt-level domain labels restricts using unlabeled training mixtures and leaves complementary signals from other teachers unused. We introduce MOPD-Router, a framework that routes supervision over the full teacher pool at each token, without domain labels or training a separate routing model. Its plug-in interface supports different metrics for selecting and weighting teacher-specific OPD signals. Within this interface, we propose ExpertAlign, which scores each teacher by whether its correction to the student at the current token expresses the specialization that teacher acquired during post-training, and compare it against two reference metrics built on teacher confidence (Entropy) and teacher-student discrepancy (Novelty). Experiments on unlabeled and domain-labeled training mixtures under strong-to-weak and same-size distillation scenarios show that ExpertAlign achieves the strongest overall performance in all four settings. On unlabeled data, it improves the overall score by 5.88 (+12.3%) points over Mean aggregation; on domain-labeled data, it outperforms standard MOPD by 3.95 (+7.8%) points without using available domain labels. These results demonstrate token-level routing can exploit cross-domain complementary supervision, and reduce exclusive reliance on prompt-level domain assignment. Code is available at: https://github.com/TURLEing/MOPD-Router.",
    "published": "2026-09-25T05:32:03Z",
    "updated": "2026-09-28T12:07:02Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30837"
  },
  {
    "id": "2609.30836",
    "title": "PTC-Decoder: Towards Intelligent SLMs on Offline Resource-Constrained Edge Devices",
    "authors": [
      "Minghui Yu",
      "Ke Mu",
      "Gang Wu"
    ],
    "abstract": "Deploying small language models (SLMs) on offline, resource-constrained edge devices such as remote sensing satellites presents a fundamental challenge: their limited reasoning capacity hinders reliable execution of multi-step agent tasks requiring complex tool orchestration. Existing plan-solve paradigms rely on prompt-based enforcement, which our experiments show SLMs almost entirely disregard: weak models fail to invoke the plan. We propose PTC-Decoder (Plan-Tool Constrained Decoder), a training-free, plug-and-play decoder framework that combines (1) a Plan-to-Act paradigm, which elevates planning to an atomic tool and forces its invocation at the first inference step, and (2) TC-Decoder, a deterministic finite automaton that imposes token-level hard constraints on tool names while preserving freedom over parameter generation, thereby retaining SLM reasoning capability. Evaluated on 200 real remote-sensing satellite tasks across 7 SLMs, PTC-Decoder yields a statistically significant mean overall score gain of +1.21 (p<0.01), 95% CI [+1.13, +1.29]), with consistent improvements across models and other datasets. An ablation study that removes TC-Decoder causes substantial performance degradation across all quality metrics without reducing computational cost, confirming TC-Decoder as the primary driver. PTC-Decoder thus offers a lightweight yet effective solution for improving step-level reliability, with final-answer accuracy remaining an open challenge. In essence, we enforce plan adherence by constraining the permissible output vocabulary during inference, without requiring retraining.",
    "published": "2026-09-25T05:30:35Z",
    "updated": "2026-09-25T05:30:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30836"
  },
  {
    "id": "2609.30832",
    "title": "Subject-Invariant Cross-Modal Decoding of Perceived Speech from Brain Recordings",
    "authors": [
      "Aoke Zhang",
      "Jing Chen"
    ],
    "abstract": "Perceived speech decoding based on non-invasive brain-computer interface (BCI) signals has been extensively studied in recent years. Research in this field primarily faces two challenges: extracting neural representations with rich spatiotemporal information and achieving cross-subject generalization. Although separate studies have proposed methods to cope with these issues, a unified approach that simultaneously tackles both challenges remains lacking. To fill this gap, we propose the Subject-Invariant Cross-Modal Perceived Speech Decoding (SICMD) method, which integrates functional magnetic resonance imaging (fMRI) and magnetoencephalography (MEG). We conduct comprehensive analyses of the fusion method, fusion position, encoder architecture, and model inputs. Our results demonstrate that the proposed method improves Top-1, Top-10, and Rankacc by more than 10.6%, 10.1%, and 1.7%, respectively, compared to baseline methods in cross-subject perceived speech decoding tasks, while reducing training costs by 88.8% and 60.5% compared to multi-subject and intra-subject decoding settings. Further visualization experiments also confirm the effectiveness of our approach.",
    "published": "2026-09-25T05:22:13Z",
    "updated": "2026-09-25T05:22:13Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2609.30832"
  },
  {
    "id": "2609.30831",
    "title": "CDBG: Causally Motivated Dual-Invariance Learning against Topological and Predictive Shifts in EEG Workload Recognition",
    "authors": [
      "Yuzhe Zhang",
      "Wenmin Zhou",
      "Chengxi Xie",
      "Kai He",
      "Jihong Wang",
      "Huan Liu",
      "Man Yao",
      "Daoqiang Zhang"
    ],
    "abstract": "Generalizing Electroencephalography (EEG)-based mental workload recognition to unseen subjects remains a formidable challenge due to severe inter-subject variability. While functional brain graphs effectively model distributed cognitive dynamics, their inherent subject-specificity induces two coupled distribution shifts: a class-conditional topological shift in the underlying functional connectivity, and a predictive mechanism shift in the learned representation-to-label mapping. Motivated by the subject-induced distribution shifts, we propose CDBG, a Causally motivated Dual-invariance learning framework for Brain Graphs. CDBG disentangles and mitigates these shifts via a two-stage rationale learning pipeline. First, it employs stochastic edge masking to extract sparse, workload-predictive graph rationales, regularized by workload-conditional Laplacian spectral alignment to enforce topological invariance across subjects. Second, it applies subject-wise Invariant Risk Minimization (IRM) to the graph representations, ensuring environment-wise risk stationarity. Extensive experiments on a self-built air traffic controller EEG cognitive workload dataset and multiple public datasets under a strict leave-one-subject-out protocol demonstrate that CDBG significantly outperforms state-of-the-art cross-subject and graph-based baselines, improving the Macro-F1 score by up to 4.23%, while simultaneously providing neurophysiologically interpretable functional rationales.",
    "published": "2026-09-25T05:22:06Z",
    "updated": "2026-09-25T05:22:06Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.30831"
  },
  {
    "id": "2609.30818",
    "title": "Evaluation Is All You Need for Multi-Modal Autonomous Driving",
    "authors": [
      "Zeyu He",
      "Shiqi Liu",
      "Ke Chen",
      "Yun Yan",
      "Jinzi Wu",
      "Dianqiao Lei",
      "Sirui Wang",
      "ShuRui Peng",
      "Tao Chen",
      "Zhuo Huang",
      "Yu Wu",
      "Yadong Shao",
      "Zhichao Li",
      "Ke Sun",
      "Yang Guan",
      "Keqiang Li",
      "Shengbo Eben Li"
    ],
    "abstract": "Multi-modal planning is promising for autonomous driving by representing multiple plausible behaviors in ambiguous and long-tail scenarios. Existing methods mainly focus on improving trajectory multi-modality, enhancing trajectory representations, or reshaping the candidate distribution. Nevertheless, we identify a pronounced generation-evaluation asymmetry in multi-modal planning: despite strong oracle performance, existing planners often fail to reliably select the best available candidate, leaving substantial planning potential unrealized. To address this challenge, we propose iDriveVLA, a multi-modal planning framework that improves the candidate trajectory space while enabling more reliable and context-aware trajectory evaluation. Specifically, iDriveVLA introduces a unified trajectory evaluator comprising a Safety-aware Scorer for quality and risk estimation, together with a VLM-guided Modulator for scene-adaptive criterion weighting. We further develop an oracle-aligned progressive training strategy consisting of candidate imitation pretraining, candidate space refinement, and semantic ranking alignment. On the public NAVSIM v1 leaderboard, iDriveVLA achieves a new state-of-the-art performance of 94.95 PDMS, surpassing the human-expert reference.",
    "published": "2026-09-25T04:56:15Z",
    "updated": "2026-09-25T04:56:15Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30818"
  },
  {
    "id": "2609.30813",
    "title": "A Benchmark and Diagnostic Study of Epistemic Admission in Shared Agent Memory",
    "authors": [
      "Xiaoyang Li",
      "Yiqi Wang",
      "Chencheng Zhu",
      "KE XU",
      "Wencheng Yang",
      "Zequn Sun",
      "Pingan Song",
      "Yiqun Duan",
      "Taotao Cai"
    ],
    "abstract": "Evaluating claim admission in shared agent memory is challenging because repeated claims may be mistaken for independent evidence. An agent may copy or paraphrase a retrieved belief, while admitting a false claim exposes subsequent agents to it. To study this problem, we introduce the Correlated Promotion Benchmark (CPB), which evaluates whether candidate claims should be admitted to shared memory.CPB-Static constructs a frozen test split from publicly annotated sources with fixed gold actions. CPB-Live runs multi-agent teams over a shared store, records all writes and retrievals, and tracks source lineage defined by each scenario. A separate consumer answers from the store alone. We evaluate eight admission policies across four agent families. Our results show that policies which deduplicate sources reject many true claims alongside false ones, whereas policies preserving answer coverage admit nearly as many false claims as unrestricted sharing. Gating on declared source type reduces false adoption to 0.06--0.09, compared with 0.22--0.47 for other answering policies. Once an uncontested false belief enters memory, the consumer asserts it in 0.97--0.99 of probes across all families. No non-oracle policy consistently rejects false claims across verbatim copies, paraphrases, and paraphrases declared authoritative. These findings reveal the limitations of admission policies without access to source lineage.",
    "published": "2026-09-25T04:48:31Z",
    "updated": "2026-09-25T04:48:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30813"
  },
  {
    "id": "2609.30805",
    "title": "XPhysICS: Cross-Physical-Domain Threat Grounding for Industrial Control Systems Security",
    "authors": [
      "Sangshin Park",
      "Jainta Paul",
      "Lawrence Ponce",
      "Md Raihan Ahmed",
      "Mu Zhang",
      "Luis Garcia"
    ],
    "abstract": "Industrial control system (ICS) threats documented for one plant can express cyber-physical effects relevant to another, but semantic similarity alone does not establish whether those effects are structurally admissible or evaluable on a target. We present XPhysICS, a provenance-aware, target-conditioned method that separates analyst-guided source abstraction from deterministic grounding into target-specific validation slices. Given a fixed source abstraction, vocabulary and schema, and machine-validated target contract, XPhysICS evaluates candidate mappings using five eligibility criteria: role compatibility, implemented type compatibility, stage coherence, slice viability, and rule-surface applicability. Grounding acceptance, slice adequacy, dynamic realizability, consumer applicability, and consumer outcome remain distinct evidence layers. We evaluate 83 structured source-threat abstractions across water treatment, water distribution, hydro/water-energy, and chemical-process targets. Controlled target-side studies of SWaT-to-water-treatment and WADI-to-water-distribution groundings produce clean, nominal-confounded, and near-threshold consumer outcomes; nine Hydro/GRFICS cases extend bounded validation-slice execution. We also evaluate bounded predictive, state-aware, and phase-aware consumer lanes, the unmodified upstream GeCo implementation, and a paper-derived reproduction of a physics-guided search method over three frozen groundings. Results show that cross-domain ICS threat reuse requires traceable source semantics, explicit target-conditioned grounding criteria, and careful separation of subsequent target-side evidence.",
    "published": "2026-09-25T04:33:17Z",
    "updated": "2026-09-25T04:33:17Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30805"
  },
  {
    "id": "2609.30798",
    "title": "Evaluating Real-Time Voice Agents: From Component Quality to Grounded Outcomes",
    "authors": [
      "Shivam Negi",
      "Arpit Rawat",
      "Rashi Jain"
    ],
    "abstract": "Real-time voice agents have moved from research prototypes to production deployments, yet the literature describing them is fragmented across three communities that rarely cite one another: speech foundation modelling, turn-taking psycholinguistics, and agentic evaluation. Architecture papers report latency, turn-taking papers report prediction accuracy, and agentic benchmarks report task success, so no single number describes whether a deployed agent is actually good. We address that gap with three evidence-based claims, each traceable to a corpus of 38 primary sources organised into an application-centric taxonomy of six categories. First, architecture choice is a deployment constraint rather than a settled verdict: a 2026 enterprise tutorial reports that no fully self-hostable end-to-end system yet meets production constraints, while a chunked cascade independently reaches state-of-the-art duplex behaviour, showing duplex behaviour is separable from duplex architecture. Second, evaluation has shifted decisively from component quality toward grounded outcomes, with recent benchmarks verifying backend state rather than trusting what the agent claims to have done. Third, the dyadic assumption in most models and benchmarks is breaking down: multiparty turn-taking and multi-speaker reasoning benchmarks show that deciding when not to speak, and reasoning about who may be told what, are first-class capabilities two-participant framings cannot measure. For each source we state the problem it targets, its mechanism, and its reported evidence, alongside the search strategy, inclusion criteria, and a verification step that caught a misattributed arXiv identifier in circulation. We propose TRG (Timing-Recovery-Grounded), a reporting standard characterising an agent by timing, post-disruption recovery, and state-verified outcome together, with a conditional fourth axis for multiparty deployments.",
    "published": "2026-09-25T04:22:20Z",
    "updated": "2026-09-25T04:22:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30798"
  },
  {
    "id": "2609.30797",
    "title": "HasMem: Hard-Origin Adaptively Softened Memory for Long-Term LLM Agents",
    "authors": [
      "Zihong He",
      "Junxiao Shen",
      "Chen Liang",
      "Hai-Ning Liang"
    ],
    "abstract": "Text-based memory and context compression support reuse of past interactions. Resizing continuous memory changes the input to a frozen LLM, coupling capacity allocation with readout. We propose Hard-Origin Adaptively Softened Memory (HasMem). Frozen hard-prompt embeddings provide a verifiable initial state. A controller adjusts memory widths, a Writer re-encodes resized entries, and Reader and Global provide readout adaptation and cross-turn state. On all $535$ questions in a reconstruction probe derived from the Multi-Session Chat (MSC) development split, the main configuration achieves lexical F1 of $95.3$ ($+4.4$ percentage points) at $93.6\\%$ of the hard reference's framed memory positions. With approximately matched per-question target body budgets, six configurations at mean per-entry retention around $0.83$--$0.91$ exceed rule-based re-encoding by $8.0$--$23.6$ exact-match (EM) percentage points. With fixed model parameters and rule target width ratio $0.75$, Global's EM gain passes a user-level exact paired test with Bonferroni correction over eight comparisons. On all $500$ LongMemEval-S questions, local lexical F1 rises from the hard reference's $3.4$ to $8.9$, and answer negative log-likelihood (NLL) falls from $12.257$ to $5.274$. F1 gains accompany lower EM on both evaluations.",
    "published": "2026-09-25T04:22:05Z",
    "updated": "2026-09-25T04:22:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30797"
  }
];
