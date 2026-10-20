window.PAPER_DATA_UPDATED_AT = "2026-10-20";
window.PAPER_ITEMS = [
  {
    "id": "2610.26863",
    "title": "Text-to-Image Generative Modeling Without Language Pretraining",
    "authors": [
      "Keshigeyan Chandrasegaran",
      "Yue Zhao",
      "Armin W. Thomas",
      "Ehsan Adeli",
      "Jiajun Wu",
      "Juan Carlos Niebles",
      "Li Fei-Fei",
      "Michael Poli"
    ],
    "abstract": "Modern text-to-image (T2I) systems use internet-scale language pretraining for text-conditioned image generation. We ask whether language pretraining is necessary for strong T2I generation. We introduce Halcyon, a family of early-fusion multimodal autoregressive models pretrained entirely from scratch on GPIC, a dataset of 100M image-text pairs. Halcyon-0.52B outperforms LlamaGen-XL/8 (48.0 vs. 63.3 gFD) with 18.2$\\times$ less pretraining compute. Further, Halcyon-1.6B outperforms JiT-T2I-XXL/8++ (35.3 vs. 41.0 gFD) with 275$\\times$ less pretraining compute. Controlled experiments show that text-only pretraining does not improve T2I generation. Halcyon also learns image captioning by replacing caption dropout with I2T supervision, maintaining competitive T2I generation quality under the same pretraining budget. We show that strong T2I systems can be trained from scratch without internet-scale language pretraining. Code and models are available at https://cs.stanford.edu/~keshik/halcyon",
    "published": "2026-10-19T17:59:59Z",
    "updated": "2026-10-19T17:59:59Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26863"
  },
  {
    "id": "2610.26860",
    "title": "OpenVLHarness: Real World Visual Agentic Tool-Use with Multimodal Memory",
    "authors": [
      "Yu Zhou",
      "Cheng-Fu Yang",
      "Rui Sun",
      "Di Wu",
      "Sibo Peng",
      "Mingyang Zhang",
      "Zhen Yang",
      "Ruiyi Zhang",
      "Nanyun Peng",
      "Zhe Gan",
      "Kai-Wei Chang"
    ],
    "abstract": "Multimodal large language models (MLLMs) have made rapid progress on visual reasoning, yet many tasks require evidence that is difficult to obtain through internal reasoning alone: our controlled study on 22 benchmarks shows that simply increasing the inference budget of the base model yields only modest gains. Such tasks demand grounded perception, external knowledge, and numerical measurements obtained through heterogeneous tools, whose outputs must be made interpretable to the model and retained across reasoning steps. We introduce OpenVLHarness, a multimodal reasoning harness organized around a capability layer and persistent multimodal memory. The capability layer combines task-level tool interfaces with evidence rendering, providing consistent access to heterogeneous backends and converting their outputs into model-readable observations. Persistent multimodal memory retains the corresponding images, structured data, and web references as addressable artifacts throughout each query. A coding interface executes generated programs over stored data, enabling computations that combine results from multiple tools. Together, these mechanisms support an iterative process of acquiring, inspecting, and composing multimodal evidence. Evaluated on 22 benchmarks with eight open and proprietary backbones, OpenVLHarness improves average scores by 9.7-12.6 points over matched no-tool baselines, including +11.2 with Qwen3-VL-8B, +9.7 with Kimi K3, and +9.9 with GPT-6 Astra. With GPT-6 Luna at medium reasoning effort, OpenVLHarness outperforms the base model, Codex, and Visual Sketchpad at maximum effort by 7.7-8.5 points while incurring at most 37% of their model-token cost.",
    "published": "2026-10-19T17:59:58Z",
    "updated": "2026-10-19T17:59:58Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CV",
      "cs.LG",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2610.26860"
  },
  {
    "id": "2610.26861",
    "title": "Can It Actually Work? Synthesizing Functional CAD Mechanisms",
    "authors": [
      "Wenqian Zhang",
      "Yangyi Huang",
      "Zigeng Xu",
      "Weiyang Liu",
      "Zhen Liu"
    ],
    "abstract": "While LLM agents can generate visually plausible CAD assemblies, these designs often fail to fulfill their intended physical functions. We study functional CAD design, a setting where agents interpret underspecified requests to construct and iteratively revise mechanisms that satisfy functional requirements in physical simulation. Verifying these requirements is nontrivial: different candidate mechanisms may realize the same function through entirely different components, controls, and operating sequences. To bridge this gap, we propose FunCAD-Harness, a framework that translates abstract requirements into candidate-specific physical tests and uses simulation feedback to guide design revisions. To systematically evaluate this capability, we introduce FunCADBench, a benchmark spanning 46 mechanism families with interdependent and multi-step operations. Experiments across frontier LLM agents show that FunCAD-Harness exposes subtle mechanical failures invisible to visual inspection, substantially improving functional success rates over standard simulation-augmented baselines. Ultimately, our work marks a step toward CAD agents capable of translating human intent into working mechanisms.",
    "published": "2026-10-19T17:59:58Z",
    "updated": "2026-10-19T17:59:58Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.26861"
  },
  {
    "id": "2610.26856",
    "title": "Reinforcement Learning with Visually Attributable On-Policy Self-Distillation",
    "authors": [
      "Shiao Xie",
      "Siyu Chen",
      "Jianwei Lv",
      "Xiandong Li",
      "Yujin Wang"
    ],
    "abstract": "Multimodal reinforcement learning with verifiable rewards (RLVR) provides reliable task-level supervision, yet offers limited guidance for localizing errors in visual reasoning. On-policy self-distillation (OPSD) complements this supervision with dense token-level corrections from a privileged teacher equipped with an evidence-centered visual view. However, the resulting corrections may conflate visual evidence with non-visual shifts induced by linguistic priors, response style, or the privileged view itself. We formalize this phenomenon as privileged-correction contamination: a token-level correction is contaminated when its update direction cannot be consistently attributed to the privileged visual evidence. Directly distilling contaminated corrections may therefore reinforce erroneous token-level updates. To address this issue, we propose reinforcement learning with visually attributable on-policy self-distillation, an evidence-consistent paradigm that augments task-level RLVR supervision with privileged token-level corrections grounded in visual evidence. We instantiate this paradigm with Visual-Attribution Gating (VAG), which uses the verifier-derived advantage as the optimization anchor and validates each privileged correction against the contrast between evidence-present and evidence-degraded teacher views. By admitting only corrections directionally supported by this visual contrast, VAG preserves visually grounded guidance while suppressing inconsistent residuals. Experiments across six visual reasoning benchmarks show that VAG consistently outperforms GRPO and OPSD methods, establishing new state-of-the-art average performance.",
    "published": "2026-10-19T17:59:56Z",
    "updated": "2026-10-19T17:59:56Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26856"
  },
  {
    "id": "2610.26857",
    "title": "VideoMaMa++: Temporally Consistent Video Matting via Preserve-and-Refine Token",
    "authors": [
      "Sangbeom Lim",
      "Seoung Wug Oh",
      "Heeji Yoon",
      "Seungryong Kim",
      "Joon-Young Lee"
    ],
    "abstract": "Diffusion-based video matting has recently emerged as a leading approach, leveraging video diffusion priors from internet-scale pretraining to achieve strong zero-shot generalization from limited synthetic data. However, the heavy compute of these diffusion backbones limits inference to a short chunk of just 6 to 24 frames, so even ordinary videos span multiple chunks. Because each chunk is matted independently from coarse mask guidance, existing methods fail to maintain consistency across chunk boundaries, producing flickering edges and discontinuous transparency. We address this with a mask-guided diffusion-matting framework built on two ideas. The RGB and mask conditioning are represented as separate token streams that interact through full spatio-temporal self-attention, letting the model adaptively combine fine RGB texture with coarse mask layout rather than committing to a fixed channel-wise fusion. On top of this, we propose a novel pair of learnable embeddings, the preserve token and the refine token, that act as a per-frame conditioning interface and enable a sliding-window inference scheme in which already-generated mattes are propagated across chunk boundaries for local temporal consistency, complemented by a globally shared reference anchor at every chunk to prevent error accumulation in long sequences without any additional training. Across standard video matting benchmarks and in-the-wild long footage, our framework outperforms prior diffusion-based methods in both fine-detail accuracy and temporal consistency, and uniquely maintains consistency across chunk boundaries on long videos.",
    "published": "2026-10-19T17:59:56Z",
    "updated": "2026-10-19T17:59:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26857"
  },
  {
    "id": "2610.26855",
    "title": "Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience",
    "authors": [
      "Tianqi Liu",
      "Hanfei Zhao",
      "Qifeng Liang",
      "Hui En Pang",
      "Jiarui Xu",
      "Sayang Mu",
      "Penghao Qiu",
      "YingSheng Zhang",
      "Jun Wang",
      "Ziang Cao",
      "Mingze Sun",
      "Yukang Cao",
      "Fangzhou Hong",
      "Zhaoxi Chen",
      "Ziwei Liu"
    ],
    "abstract": "World models enable embodied agents to anticipate action consequences, yet jointly modeling locomotion and manipulation across diverse embodiments remains challenging due to heterogeneous action spaces and limited multimodal supervision. We present Ropedia W0, the first egocentric loco-manipulation world foundation model spanning humans and robots with diverse embodiments. We curate Xp-Data, comprising 10k hours of egocentric human data and 3k hours of robot data with unified multimodal annotations and systematic quality control. A unified kinematic representation encodes locomotion through camera poses and manipulation through projected skeletons, with robot skeletons combining embodiment-specific forward kinematics with extensive manual keypoint annotation and correction. We also introduce Xp-Teleop, a long-horizon loco-manipulation benchmark based on high-quality dexterous humanoid teleoperation data. Evaluations demonstrate state-of-the-art performance across five cross-embodiment benchmarks (DreamDojo, $Ψ_0$, $ω$-HOME, Xp-Teleop, and AgiBot) and on held-out human egocentric video, from zero-shot inference to few-shot and full-data post-training. Scaling human pre-training data improves performance on both human and robot evaluations. After distillation, our model supports real-time, minute-long rollouts, enabling live VR interaction. Applications in policy evaluation, model-based planning, and world-action modeling further demonstrate the model's utility for embodied decision-making.",
    "published": "2026-10-19T17:59:55Z",
    "updated": "2026-10-19T17:59:55Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.26855"
  },
  {
    "id": "2610.26853",
    "title": "InfiniDream: Open-Ended Photorealistic 3D Worlds Through Procedural Generation",
    "authors": [
      "Yi-Chuan Huang",
      "Hao-Jen Chien",
      "Zheng-Hui Huang",
      "Yu-Lun Liu",
      "Kaipeng Zhang",
      "Zhixiang Wang"
    ],
    "abstract": "Procedural generation plays a key role in synthetic data creation and game development, offering greater controllability, editability, and diversity than static mesh representations. However, VLM-based code generation often produces relatively simple 3D assets, while sophisticated photorealistic procedural systems require extensive manual development. Existing VLM-guided procedural methods remain largely constrained by predefined factories and APIs, limiting their ability to create novel asset types. We introduce InfiniDream, a VLM-driven framework for open-ended procedural 3D world generation. First, we propose Symbolically Constrained Asset Generation, which leverages existing procedural algorithms to create novel, photorealistic assets while preserving editability and seed-based diversity. Second, we develop an end-to-end text-to-world pipeline that combines semantic scene planning with Deterministic Frustum-Guided Grid Placement to construct large-scale 3D worlds with precise object placement, procedural population, and animation. Extensive evaluations on 100 object and 20 scene generation tasks demonstrate improvements across four perceptual metrics. Diversity analysis, ablation studies, and human preference evaluations further validate the effectiveness of our framework. Project page: https://yichuanh.github.io/infinidream-page/",
    "published": "2026-10-19T17:59:51Z",
    "updated": "2026-10-19T17:59:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26853"
  },
  {
    "id": "2610.26852",
    "title": "CoopUQ: Robust Multi-Robot Social Navigation via Uncertainty-Aware Cooperative Forecasting",
    "authors": [
      "Zehao Wang",
      "Jianpeng Yao",
      "Yuping Wang",
      "Yiping Li",
      "Jiaqi Li",
      "Zhixu Li",
      "Kanghoon Lee",
      "Jinfeng Wang",
      "Cong Liu",
      "Zhaowei Tan",
      "Jinkyoo Park",
      "Jiachen Li"
    ],
    "abstract": "Reinforcement learning enables mobile robots to make fast and scalable navigation decisions in constrained human-shared environments. However, directly extending single-robot approaches to multi-robot settings often fails to ensure safety and efficiency, especially under occlusions and out-of-distribution (OOD) scenarios, where individual robots may overlook potential risks or make inaccurate predictions. Leveraging cooperation effectively for both prediction and navigation remains a major challenge. We propose CoopUQ, a multi-robot social navigation framework that bridges uncertainty-aware cooperative occupancy forecasting and robust decision making. CoopUQ predicts future occupancy grid maps through cross-robot spatiotemporal feature fusion and further leverages forecasts and their uncertainty to guide policy via constrained multi-agent reinforcement learning, where the cost penalizes navigation through regions predicted to be occupied or highly uncertain. This design enables the policy to adapt its risk sensitivity under distribution shifts. Experimental results across multiple Unity3D-based simulation environments with both in-distribution and OOD settings, including diverse layouts, pedestrian densities, and rushing behavior, demonstrate improved prediction performance and safety over representative baselines. Real-robot experiments further demonstrate its robustness across various scenes. Our code and videos are available at https://coopuq.github.io/.",
    "published": "2026-10-19T17:59:49Z",
    "updated": "2026-10-19T17:59:49Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.26852"
  },
  {
    "id": "2610.26851",
    "title": "Manga2Animate: An Agentic Framework for Faithful Manga Animation with Script and Storyboard Planning",
    "authors": [
      "Sheng-Wei Zhang",
      "Hsi-An Chen",
      "Yan-Ting Liou",
      "Chih-Hsuan Chen",
      "Shih-Chen Tseng",
      "Yu-Lun Liu"
    ],
    "abstract": "Adapting existing manga into coherent animation that stays faithful to the source is a valuable yet challenging task. Existing methods either access the manga mainly through text, losing its characters and art style, or feed manga pages directly into video generation models, which misinterpret the manga's structure and produce incorrect storylines. In this paper, we propose Manga2Animate, a multi-agent framework that grounds every stage of generation in the source manga. We decompose the task into two intermediate representations, an animation script and a visual storyboard. Each representation is produced by a creator agent and reviewed against the source panels by a paired reviewer agent. We tailor representation-specific selection and dual-level feedback to progressively refine both before synthesizing the final animation. Extensive experiments and a user study demonstrate that Manga2Animate produces animations more faithful to the source manga and more consistent across shots than state-of-the-art approaches. Project page: https://annchenn.github.io/Manga2Animate/",
    "published": "2026-10-19T17:59:46Z",
    "updated": "2026-10-19T17:59:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26851"
  },
  {
    "id": "2610.26850",
    "title": "GenOlympiad: Benchmarking Frontier Image Models at Their Capability Boundaries",
    "authors": [
      "Xi Hu",
      "Martin Bell",
      "Liang Zheng"
    ],
    "abstract": "Text-to-image models have made tremendous progress and can produce high-quality images. However, a question which would be asked in any other discipline is where the frontier models fall short. We introduce GenOlympiad, a benchmark which provides the most challenging text prompts from nine capability axes for stress-testing frontier text-to-image models. The assessed capabilities include generating large quantities, performing deep reasoning, ensuring hard physical consistency, following complex rules and so on. The prompts are designed such that prompt alignment is visually verifiable (e.g., counting) instead of relying on subjectiveness (e.g., style). Based on this, we develop an automated evaluation framework which decomposes the prompt into easy and hard questions, and for most hard questions, draws help lines to ground evidence for accurate grading. We evaluate 20+ strong text-to-image models, including Nano Banana Pro, GPT-Image-2.5, Seedream-5.0 and so on. We report that even the best-performing T2I model (Nano Banana Pro) only achieves a strict score of 23.9 out of 100 and that coding models such as GPT-6 Astra have higher prompt alignment scores (but not as visually pleasing). We also derive insights in model evolution, alignment with Elo scores, and effectiveness of our grounding-based evaluation protocol. Code is available at https://github.com/GenOlympiad/GenOlympiad and the project page is at https://genolympiad.github.io/",
    "published": "2026-10-19T17:59:41Z",
    "updated": "2026-10-19T17:59:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26850"
  },
  {
    "id": "2610.26848",
    "title": "Where is Physical RSI capability from? An Observational Scaling Law of LLM-as-policy",
    "authors": [
      "Zekai Li",
      "Jiayi Yu",
      "Jinlu Zhang",
      "Luyang Niu",
      "Zekun Qi",
      "Jun Zheng",
      "Xuchuan Chen",
      "Dairu Liu",
      "Yintianrun Zhang",
      "He Wang",
      "Li Yi"
    ],
    "abstract": "In this paper, we systematically investigate the mechanisms, scaling behavior, and generalization of physical Recursive self-improvement. We introduce PhysRSI-eval to quantify physical RSI through a five-axis metric: First-Attempt Performance, Efficiency, Success, Budget and Improvement from failure. Different VLMs are evaluated on 18 manipulation tasks under a fixed interaction budget. The analysis of experimental results motivates the Physical Barrel Hypothesis: different capabilities may constrain different parts of improvement. The five-axis metrics also distinguish systems with close public benchmark averages and show that high scores need not come with early or efficient gains. We study observational scaling from two perspectives: predicting the relative performance of VLM agents from their public capabilities, and forecasting later progress from early physical feedback. Together, these analyses ask how quickly and how far an agent can improve. Moreover, we conduct workspace interventions and then analyze what improvement leaves behind. Removing history reduces late-round success, frozen workspaces remain useful on unseen layouts, and three cross-task cases achieve success earlier. The results suggest that scene-specific adaptation and reusable experience can coexist.",
    "published": "2026-10-19T17:59:30Z",
    "updated": "2026-10-19T17:59:30Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26848"
  },
  {
    "id": "2610.26847",
    "title": "WeAct: Dynamic Weight Switching as Agent Actions",
    "authors": [
      "Rui Shi",
      "Xunjian Yin",
      "Jiacheng Sang",
      "Zichuan Liu",
      "Shuyan Zhou"
    ],
    "abstract": "Long-horizon agents must learn heterogeneous capabilities from interleaved trajectories. Updating shared parameters to learn new capabilities can degrade previously acquired ones, resulting in catastrophic forgetting. As a trajectory unfolds, different stages may require different capabilities, yet conventional joint training and static adapter merging maintain a fixed parameter configuration throughout execution. We introduce WeAct (Weight-level Internal Actions), which trains independent capability-specific LoRA adapters over a frozen backbone and adds adapter selection to the agent's action space. These internal actions use the model's native tool-calling interface for on-demand capability composition in a shared context. Across eight deep-research benchmarks, Qwen3-32B with WeAct improves average accuracy by 6.2% relative to full fine-tuning counterparts despite using less compute, and by 27.5% relative to the strongest static LoRA-merging method. WeAct also supports modular continual adaptation, by adding a new code computation adapter to expand the agent's capabilities and updating the existing writing adapter to improve report quality. Both updates leave the backbone and other adapters unchanged, supporting modular continual adaptation in agents.",
    "published": "2026-10-19T17:59:19Z",
    "updated": "2026-10-19T17:59:19Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.26847"
  },
  {
    "id": "2610.25665",
    "title": "SpaRV: Sparse Radiance Voxels for Scalable Geometrically Consistent LiDAR-Visual Mapping and Rendering",
    "authors": [
      "Jianheng Liu",
      "Yunfei Wan",
      "Fangming Cheng",
      "Xiangyu Hong",
      "Zuhao Zou",
      "Haotian Li",
      "Longji Yin",
      "Chunran Zheng",
      "Jiarong Lin",
      "Fu Zhang"
    ],
    "abstract": "Robotic simulation, navigation, and inspection need photorealistic and geometrically accurate maps. Radiance fields achieve photorealism, but building them from robot data raises three challenges. A robot's trajectory serves its task, not reconstruction, so images from few viewpoints leave the geometry under-constrained. Residual errors in camera poses and intrinsics blur the map. The map's GPU memory grows with scene size, which limits its level of detail in large scenes. We present \\textbf{SpaRV}, a \\textbf{Spa}rse \\textbf{R}adiance \\textbf{V}oxel map rendered by differentiable ray marching, which lets irregular LiDAR scans supervise it alongside images. LiDAR depth and occupancy anchor the under-constrained geometry, and normal and smoothness regularizers keep it smooth between LiDAR points. To correct camera errors, SpaRV alternates map training with photometric optimization of the camera poses and focal lengths. To bound GPU memory in training and rendering, SpaRV holds one submap at a time at full resolution and the rest at coarser octree levels. Experiments show that SpaRV keeps the geometry consistent away from the captured trajectory and sharpens textures by optimizing the camera parameters. On one 24\\,GB GPU, SpaRV reconstructs a university campus captured in 63{,}582 images and simulates other cameras and LiDARs. Our code will be released at \\url{https://github.com/hku-mars/SpaRV}.",
    "published": "2026-10-19T02:12:26Z",
    "updated": "2026-10-19T02:12:26Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25665"
  },
  {
    "id": "2610.25664",
    "title": "PoSTCache: From Forecasting to Postdictive Smoothing for Revisable Diffusion Caching",
    "authors": [
      "Liwei Lan",
      "Hui Chen",
      "Jungong Han",
      "Guiguang Ding"
    ],
    "abstract": "Diffusion and flow matching models achieve impressive visual generation quality but remain computationally expensive due to iterative sampling. Caching-based acceleration provides a practical training-free solution by reusing or predicting intermediate features. However, existing methods largely enforce a forward-only information flow: approximations produced for skipped model evaluations are immediately committed to the sampling trajectory and cannot benefit from feedback generated by later full-computation steps. We propose \\textbf{PoSTCache} (\\emph{Postdictive Smoothing Trajectory Cache}), a training-free and plug-and-play framework that reformulates diffusion caching as revisable trajectory inference. PoSTCache first uses an existing caching strategy to construct forward proposals for skipped steps. At a later full-computation step, the discrepancy between the refreshed prediction and its forward proposal yields a correction signal, which PoSTCache propagates backward to refine and reintegrate the preceding predictions. Viewing full-computation steps as sources of corrective feedback also changes how they should be selected. We therefore introduce the Posterior Variance Reduction (PVR) strategy, which estimates cross-timestep dependencies from offline denoising trajectories and selects anchors according to their expected reduction in surrogate trajectory uncertainty rather than local approximation error alone. Experiments on representative image and video generation models show that PoSTCache consistently improves the quality--efficiency trade-off over representative caching methods.",
    "published": "2026-10-19T02:11:29Z",
    "updated": "2026-10-19T02:11:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25664"
  },
  {
    "id": "2610.25660",
    "title": "FluidGen: Physics-Aware Fluid Video Generation via Motion-Guided Post-Training",
    "authors": [
      "Yang Zheng",
      "Zizhang Li",
      "Boyang Deng",
      "Jan Ackermann",
      "Lei Shu",
      "Yinghao Xu",
      "Jiajun Wu",
      "Gordon Wetzstein",
      "Leonidas Guibas"
    ],
    "abstract": "Video generation models produce visually compelling motion but systematically fail on fluid phenomena, including smoke, fire, and explosion debris, where outputs lack coherent vortical structure and collapse to bland dynamics that violate the physics of real fluids. Classical solvers achieve high physical fidelity but require detailed 3D scenes and carefully tuned parameters, making them impractical for in-the-wild imagery and video generation. We address this gap by injecting a data-driven fluid prior into a pre-trained video model, trained on a mixture of high-fidelity Houdini simulation data with paired velocity-field ground truth and curated in-the-wild fluid video data for appearance diversity. The core of our approach is a dual stream architecture that predicts per-frame velocity fields alongside RGB, supervised by simulation ground truth. This auxiliary signal regularizes generation toward physically consistent motion and exposes an interpretable physical quantity that we further leverage as a reward for velocity-aware direct preference optimization. Our model produces substantially more realistic fluid dynamics sequences than strong video baselines and optimization-based methods. Project page: https://y-zheng18.github.io/FluidGen/",
    "published": "2026-10-19T02:07:51Z",
    "updated": "2026-10-19T02:07:51Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.25660"
  },
  {
    "id": "2610.25659",
    "title": "Beyond Leaderboards: A Method for Application-Specific Capability Profiling of Large Language Models",
    "authors": [
      "Oleg Grynets",
      "Vasyl Lyashkevych",
      "Andrii Salyk",
      "Dmytro Koziuberda",
      "Dmytro Kostetskyi",
      "Oleh Kaskun",
      "Olena Pochernina",
      "Alona Seletska",
      "Oleksii Ilchuk",
      "Viktoriia Tsymbal",
      "Daryna Tukalo",
      "Bohdan Saukh",
      "Ivan Fedorchuk",
      "Hryhorii Petrenko"
    ],
    "abstract": "Public leaderboards rank large language models (LLMs) in general, but an engineer has to choose a model for a specific application, architecture and cost. This paper presents a method for application-specific capability profiling of LLMs and its realization as a containerized testbed. The method treats each application as a unit of extension: an Oracle-to-PostgreSQL migration agent, a documentation-grounded chatbot or an enterprise-support automation agent runs in its own container behind a small contract, brings its own dataset, evaluator and owned attributes, and is onboarded together with its dashboards. Measurements accumulate in a versioned, sparse metamodel of every model. The method separates the model under test from judges and agents, freezes and hashes plans, refuses to compare values from different contexts, diagnoses the instrument before the system, and applies a null-agent check and a noise rule whose operating characteristics are quantified by simulation. In the evaluated automation conditions, model choices produced larger differences on selected observable outcomes than framework choices, although the experimental design does not establish a general causal ranking of these factors. The experiments also show that instruction tuning is deployment-specific and that system-reported success can exceed independently observed success: of 216 migration units checked against a real Oracle database, 108 were demonstrably correct. These measurements establish application-specific observations, not a universal model ranking.",
    "published": "2026-10-19T02:05:58Z",
    "updated": "2026-10-19T02:05:58Z",
    "categories": [
      "cs.LO",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.25659"
  },
  {
    "id": "2610.25652",
    "title": "A \"feature ODE\" describing the learning behavior of shallow MLPs on simple functions",
    "authors": [
      "Joseph Turnbull",
      "Berkan Ottlik",
      "Jamie Simon"
    ],
    "abstract": "We study the gradient flow training dynamics of two-layer multi-layer perceptrons (MLPs) on anisotropic Gaussian data. Even in this simple setting, solving the dynamics in full is notoriously difficult, so we try something different. We propose a \"feature ODE\" that might be intuitively expected to describe the learning dynamics of a shallow MLP. We find that MLPs trained to learn simple target functions (low-order Hermite polynomials and staircase functions) actually roughly follow the loss trajectories from this feature ODE. This agreement is a surprise because of the size of the simplification and the fact that it does not come from a rigorous chain of approximations. We discuss this surprise and speculate on its reasons and uses.",
    "published": "2026-10-19T01:52:58Z",
    "updated": "2026-10-19T01:52:58Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25652"
  },
  {
    "id": "2610.25650",
    "title": "Consistency Training Suppresses Cue Following Without Teaching Cue Selectivity",
    "authors": [
      "Prakhar Gupta",
      "Terry Jingchen Zhang",
      "Zhijing Jin"
    ],
    "abstract": "Language models often change answers because of a cue, a hint such as \"I believe the answer is B\" that gives no valid evidence. Consistency training (CT) trains a model to answer the same with and without the cue. Four CT methods apply this idea to output tokens (BCT), residual activations (ACT), attention patterns (AttCT) and sampled-answer rates (RMCT). Prior work suggests some learn different solutions. We train all four on Gemma-2-2B-it and Llama-3.1-8B-Instruct with the same data. We test predictions written in advance and inspect the models with a known circuit that carries cues to the answer. All four make the trained cue less effective, and their fixes share three properties. First, correct cues lose about as much influence as wrong ones. Second, the fix is usually large for cues before the answer options, as in training, and much smaller after them. Llama RMCT depends least on position. Third, the circuit heads still carry most remaining cue-induced errors. Making BCT targets depend on the cue's correctness mostly weakens the fix. CT thus weakens the trained cue without teaching models when a cue is right. Evaluations with only wrong cues at the trained position miss the first two properties.",
    "published": "2026-10-19T01:51:24Z",
    "updated": "2026-10-19T01:51:24Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25650"
  },
  {
    "id": "2610.25649",
    "title": "InteractAgent: Agentic Human Motion Interaction with Memory-Augmented Reflection",
    "authors": [
      "Tao Zhang",
      "Senhe Zhang",
      "Zeyu Zhang",
      "Yujia Zhang",
      "Dong Gong"
    ],
    "abstract": "Long-horizon human-scene interaction requires coordinated spatial reasoning, physical feasibility, and the ability to recover from compounding execution errors. Text-driven motion models are largely scene-agnostic and lack closed-loop correction, while geometry-conditioned approaches depend on paired scene-motion training or explicit 3D preprocessing that limits generalization to novel layouts and open-vocabulary goals. We present InteractAgent, an agentic multimodal LLM system for long-horizon human-scene interaction that plans, executes, observes, and reflects in a closed loop, using a single MLLM as both planner and evaluator and a frozen MotionLLM as the executor. InteractAgent integrates Online Observation for step-wise recovery decisions (continue/redo/replan) and Memory-Augmented Reflection for multi-round plan refinement with adaptive stopping. On UniHSI, InteractAgent improves task success and reduces penetration compared with training-free baselines. Code: https://github.com/AIGeeksGroup/InteractAgent.",
    "published": "2026-10-19T01:51:14Z",
    "updated": "2026-10-19T01:51:14Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25649"
  },
  {
    "id": "2610.25646",
    "title": "Spherical Fixed-Point Reasoners: Adaptive Loop Halting on the Hypersphere",
    "authors": [
      "Arber Zela",
      "Artavazd Maranjyan",
      "Pol Puigdemont",
      "David Berghaus",
      "Valentyn Boreiko",
      "Volkan Cevher"
    ],
    "abstract": "Looped (weight-tied) transformers enable adaptive computation by allocating more iterations to harder inputs. Fixed-Point Reasoners (FPRM) achieve this with a damped fixed-point solver, but operate in an unbounded Euclidean residual space with coupled rescaling and relative-norm halting. We introduce Spherical Fixed-Point Reasoners (SFPRM), which perform the same computation on the unit hypersphere of normalized transformers (nGPT). Input injection, damping, and halting become geodesic operations, yielding boundedness by construction and eliminating coefficient coupling. We prove fixed-point existence, local convergence under an explicit step-size condition, and global convergence under strong injection. On Sudoku-Extreme, Maze-Hard, and Mini-ARC, SFPRM achieves 96.6%, 87.9%, and 59.1% test accuracy, respectively, outperforming FPRM and other baselines while allocating test-time compute more effectively. Its converged geometry is also interpretable: token-input angles capture puzzle structure and predict correctness.",
    "published": "2026-10-19T01:45:23Z",
    "updated": "2026-10-19T01:45:23Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25646"
  },
  {
    "id": "2610.25645",
    "title": "Negation without Confusion: Decomposing Bias and Recomposing Style in Text Embeddings for Negation-aware Image Generation",
    "authors": [
      "Sooyeon Park",
      "Hemraj Singh",
      "Kyunghyun Min",
      "Youngjae Yu",
      "Sung-Bae Cho"
    ],
    "abstract": "Negation-aware image generation remains challenging for text-to-image diffusion models, which often struggle with negation due to implicit linguistic biases that are deeply entangled within text representations. As a result, bias-aligned semantics frequently dominate over intended negative constraints. To overcome this limitation, we propose a simple training-free method of Decompose and Recompose text embedding (Dero), which constructs a semantic-preserving subspace and a bias subspace using auxiliary prompts and performs semantic disentanglement based on bidirectional SVD. By decomposing entangled representations and selectively recomposing disentangled semantic components, Dero realigns text representations toward intended negation semantics while restoring residual stylistic features to preserve semantic fidelity and image quality. As a model-agnostic inference-time framework operating solely on text representations, Dero can be seamlessly applied to diverse diffusion architectures, including both U-Net and DiT based models. Extensive experiments on both object- and concept-level negation demonstrate consistent improvements in negation-aware image generation, achieving stronger text-image alignment, better semantic fidelity, and higher human preference scores.",
    "published": "2026-10-19T01:40:27Z",
    "updated": "2026-10-19T01:40:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25645"
  },
  {
    "id": "2610.25641",
    "title": "Visual Memory and Textual Alignment for Cross-Modal Few-Shot Segmentation",
    "authors": [
      "Tianqi Wei",
      "Zhi Chen",
      "Xin Yu",
      "Scott Chapman",
      "Zi Huang"
    ],
    "abstract": "Few-shot segmentation (FSS) aims to segment target objects with limited annotated examples. Recent studies have begun to explore large foundation models to improve generalization for this task. In particular, SAM 3 provides strong visual representations and supports text-guided segmentation. However, its performance remains limited in specialized domains, where semantic prompts and visual representations are often poorly aligned. To address this challenge, we propose ViTA-SAM, a framework built upon SAM 3 that integrates visual memory and textual features through cross-modal alignment. Specifically, we construct a visual memory module that encodes support features together with their corresponding masks, providing support-aware visual guidance for query prediction. In parallel, we leverage the text encoder of SAM 3 to extract semantic features as complementary priors. To bridge the gap between semantic and visual representations, we introduce a cross-modal alignment module that conditions textual features on memory-enhanced visual representations, yielding more consistent and visually grounded predictions. In addition, we propose a pseudo-label refinement strategy that updates the memory with predicted query masks, enabling query-adaptive representation learning. Extensive experiments on multiple benchmarks show that ViTA-SAM achieves the best overall performance among the compared methods, outperforming the strongest competing method by over 5% in average mIoU.",
    "published": "2026-10-19T01:35:43Z",
    "updated": "2026-10-19T01:35:43Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25641"
  },
  {
    "id": "2610.25640",
    "title": "Think, Compress, Answer: Reinforcement Learning for Multimodal Grounding via Reasoning Compression",
    "authors": [
      "Jinbae Seo",
      "Hyeongjun Kwon",
      "Jiyoung Lee",
      "Hyunsung Jang",
      "Namkoo Ha",
      "Jungin Park",
      "Kwanghoon Sohn"
    ],
    "abstract": "Extended reasoning has substantially improved multimodal large language models (MLLMs) on tasks requiring compositional and relational inference. However, multimodal grounding imposes a distinct requirement: reasoning must ultimately converge on a target-specific compact representation that supports precise localization. As reasoning trajectories grow longer, they often expand into broad scene narratives and peripheral relational details, which can dilute grounded perceptual evidence and lead to ambiguous or incorrect predictions. Motivated by the information bottleneck principle, we propose Think-Compress-Answer (TCA), a reinforcement learning framework that decomposes multimodal grounding into three phases: free-form reasoning, target-aware context compression, and answer generation conditioned on the compressed context. TCA is optimized through a multi-stage Group Relative Policy Optimization (GRPO) with progressive rewards that establish the structured output protocol, minimize reasoning-specific information while preserving target-relevant content, and directly improve localization accuracy. This staged design enables MLLMs to retain the benefits of extended reasoning while distilling it into the minimal context required for grounding. Experiments across six multimodal grounding benchmarks show that TCA attains substantial zero-shot performance gains, demonstrating the effectiveness of reasoning compression.",
    "published": "2026-10-19T01:34:19Z",
    "updated": "2026-10-19T01:34:19Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25640"
  },
  {
    "id": "2610.25638",
    "title": "ACorD: Adaptive Correspondence Discovery for Medical Image Registration",
    "authors": [
      "Arghavan Rezvani",
      "Kun Han",
      "Xiaohui Xie"
    ],
    "abstract": "Medical image registration is a fundamental task for aligning anatomical structures across images. Exhaustively searching for point-wise correspondences is prohibitively expensive in both computation and memory, particularly for high-resolution 3D medical images. Most recent learning-based methods directly predict correspondences in a coarse-to-fine manner, but often propagate intermediate estimates across scales without explicitly weighting correspondence evidence, which can allow coarse-scale errors to persist during refinement. To address these challenges, we propose ACorD, an adaptive correspondence discovery framework designed to mitigate error propagation with an attention-guided process. ACorD first predicts multiple potential correspondence candidates through Correlation-guided Cross-scale Offset Prediction (CCOP), which combines correlation maps as spatial matching priors with cross-scale features as global deformation context. Then, Multi-Head Deformable Aggregation (MHDA) aggregates these candidate correspondences using attention, producing a learned, non-uniform weighting over competing matches rather than treating them equally. The multi-head design further captures complementary deformation patterns, ensuring both global alignment and local precision. By integrating adaptive offset prediction with selective, attention-based aggregation of correspondence evidence, ACorD enables accurate deformation refinement. Extensive experiments on four public medical registration benchmarks demonstrate that adaptive correspondence discovery within a multi-scale refinement framework improves registration robustness across diverse anatomical structures.",
    "published": "2026-10-19T01:31:04Z",
    "updated": "2026-10-19T01:31:04Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25638"
  },
  {
    "id": "2610.24414",
    "title": "S3D-Mosaic: Subgradient-Guided Cross-Band Structure Transfer for Spectral Demosaicing",
    "authors": [
      "Weiqiang Zhao",
      "Xian Li",
      "Yuzhe Gui",
      "Tianzhu Liu",
      "Yanfeng Gu"
    ],
    "abstract": "Multispectral filter array (MSFA) imaging enables snapshot spectral acquisition, but its per-band sparse sampling causes severe spatial aliasing. Although missing spatial structures can be inferred across bands, wavelength-dependent contrast variations make direct cross-band transfer unreliable. Existing model-based methods lack explicit magnitude-invariant mechanisms, and learning-based methods require layout-specific training or per-image tuning, limiting generalization. To address these issues, we propose S3D-Mosaic, a model-based spectral demosaicing method built upon a subgradient-guided cross-band structure transfer framework. We first establish a subgradient-guided regularization framework with a generalized cosine-similarity interpretation, providing a convex mechanism for magnitude-invariant information transfer. Then we design a compact Directional Sparse Equivariant Difference Convolution (DSE-DConv) for band-level extraction of orientation-selective, high-frequency structure features at low computational cost. Instantiating the framework with DSE-DConv on spectrally adjacent bands yields a cross-band self-structure similarity regularizer for spectral demosaicing, which we optimize via a dual-scan ADMM algorithm that decouples the bidirectional dependency while propagating magnitude-robust structural information across bands. With DSE-DConv's two parameters trained once via self-supervision, S3D-Mosaic outperforms state-of-the-art unsupervised methods on CAVE and NTIRE 2022, and generalizes robustly to varying MSFA layouts, pan-mosaic fusion, and real-world UAV data with fixed reconstruction hyperparameters. The source code is available at \\url{https://github.com/bestwishes43/S3D-Mosaic}.",
    "published": "2026-10-17T03:29:24Z",
    "updated": "2026-10-17T03:29:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24414"
  },
  {
    "id": "2610.24409",
    "title": "Long Listening Thoughts: Eliciting Open Auditory Reasoning with Deliberative Perception and Cognitive Refinement",
    "authors": [
      "Jaeyeon Kim",
      "Chao-Han Huck Yang",
      "Luoyi Zhang",
      "Chan-Jan Hsu",
      "Fernando Ruiloba Portilla",
      "Jinchuan Tian",
      "Shinji Watanabe",
      "Carlos Busso"
    ],
    "abstract": "We introduce Long Listening Thoughts (LLT), a framework for constructing post-training datasets that improves audio reasoning by pairing deliberate perceptual grounding with explicit cognitive behaviors. On audio understanding and reasoning benchmarks, large audio-language models (LALMs) are limited primarily by perceptual errors, yet existing post-training datasets rely on audio descriptions of limited diversity. Through a four-stage pipeline, LLT (1) builds multi-aspect dense audio descriptions spanning semantic, acoustic, and temporal information, (2) generates more challenging questions, (3) synthesizes incorrect reasoning traces, and (4) extends short reasoning traces into long ones via a thought-continuation strategy that elicits cognitive behaviors such as verification and backtracking. Using LLT, we synthesize 1.6M reasoning traces and train Qwen2.5-Omni-7B with a two-stage pipeline of supervised fine-tuning (SFT) followed by direct preference optimization (DPO). This improves accuracy on MMAU Test-mini (71.5 to 78.2), MMAR (56.7 to 63.7), and MMSU (60.6 to 66.0).",
    "published": "2026-10-17T03:20:36Z",
    "updated": "2026-10-17T03:20:36Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.24409"
  },
  {
    "id": "2610.24405",
    "title": "ZeroDSS: Semantic Segmentation from Class Names Alone",
    "authors": [
      "Tian Ming",
      "Marzi Heidari",
      "Yuhong Guo"
    ],
    "abstract": "Semantic segmentation depends heavily on real images with pixel-level annotations, making dense supervision a major obstacle to deployment in new domains. We study task-specific data-free semantic segmentation, where training uses generic pretrained generative priors but has access to no target-domain images, masks, or captions--only a predefined category set. We introduce Zero-Data Semantic Segmentation (ZeroDSS), a feedback-driven approach that treats synthetic supervision as an adaptively controllable training distribution rather than a direct surrogate for real data. ZeroDSS constructs a semantically structured prompt distribution through LLM-guided compositional generation and adaptive class rebalancing, then converts the prompts into image-mask pairs using diffusion attention. Its feedback-driven distribution refinement consists of a two-phase closed-loop training procedure with a single loop-back step. In Phase I, a segmenter is trained using confidence-weighted supervision and dual-scale consistency. In Phase II, model feedback is used to adaptively target underperforming categories and refine diffusion-derived masks using model predictions. After this refined initial training, a teacher-student framework is utilized in the final phase to iteratively improve the fused supervision and segmenter through exponential moving average (EMA) updates. Using synthetic training data only, ZeroDSS achieves 35.0% mIoU on MS COCO with DeepLabV3, and 66.3% and 63.5% mIoU on PASCAL VOC with DeepLabV3 and Mask2Former, respectively. These results show that explicitly constructing and iteratively refining the synthetic supervision distribution can substantially reduce the synthetic-to-real gap in dense prediction.",
    "published": "2026-10-17T03:14:33Z",
    "updated": "2026-10-17T03:14:33Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24405"
  },
  {
    "id": "2610.24400",
    "title": "Spatons: Spatiotonally Localized Building Blocks for Efficient XR Predistortion",
    "authors": [
      "Mohammadjavad Maheronnaghsh",
      "Sushant Kondguli",
      "Steve Mann",
      "Andreas Moshovos"
    ],
    "abstract": "We present Spatons, a family of compositional, spatially localized neural operators for computationally efficient XR (extended reality) predistortion and distortion compensation. XR displays (AR, VR, and MR) suffer from spatial (e.g., geometric) and tonal (e.g., colour) distortions. Frames can be pre-distorted so that the projected image looks as intended. Distortions vary with manufacturing tolerances and projection systems, motivating programmable compensation. Untethered, battery-operated XR systems also require low energy and latency. A Spaton is a hybrid patch-to-pixel block combining tiny Multi-Layer Perceptrons (MLPs) with fixed-function interpolation. Using Spatons, we build programmable, computationally efficient pipelines for varied distortion scenarios. On the full spatiotonal Scenario 5, Sequential-5' matches CompenNet++ in SSIM (0.944 vs. 0.944) and closely matches its PSNR (27.5 vs. 27.7 dB), with substantially lower complexity. We demonstrate a flexible Spaton solution with 6 times fewer FLOPs and 106 times fewer parameters than CompenNet++, and 4-10 times fewer memory transfers than UNet++. We characterize software implementations and analytical hardware estimates, including optimizations across target XR platforms. The distortions considered are drawn mostly from see-through, near-eye displays, where the spatial light path governs local intensity and spectral response. This early systems-level exploration uses closed-form differentiable distortions and one real projector-camera capture set for training and evaluation, rather than through-the-optics measurements. Testing on a wider range of real XR devices remains future work. Chromatic dispersion (color fringes) remains the main artifact where Spatons trail monolithic baselines.",
    "published": "2026-10-17T03:11:05Z",
    "updated": "2026-10-17T03:11:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24400"
  },
  {
    "id": "2610.24395",
    "title": "MSCR: Jointly Balancing Utilization Across Modalities and Discovering Synergistic Information",
    "authors": [
      "Xinyu Chen",
      "Liangjian Wen",
      "Jiang Duan",
      "Dongkai Wang",
      "Yong Dai",
      "Jiayu Bai",
      "Jianzhuang Liu",
      "Zhen Tian",
      "Guoping Qiu",
      "Zhao Kan"
    ],
    "abstract": "In multimodal learning, modality imbalance often lets one modality dominate optimization and keeps the model from fully exploiting cross-modal interactions. Balance-oriented methods such as the Multimodal Competition Regularizer (MCR) perform well by alleviating this imbalance during training. These dynamic balancing methods, however, mainly adjust modality contributions and do not consider how imbalance affects the formation of synergistic information during fusion. Synergy is a major source of multimodal advantage, because it is predictive gain that cannot be recovered from unimodal evidence alone. We propose the Multimodal Synergistic Competition Regularizer (MSCR), a fusion method that jointly promotes balanced modality utilization and the discovery of synergistic information. MSCR has two complementary objectives. An anti-dominance objective suppresses excessive unimodal influence and leaves room for synergistic information, and a synergy objective encourages the fused predictor to outperform a non-synergistic unimodal reference. An adaptive gate further concentrates the regularization on samples that need stronger collaborative modeling. Experiments on five benchmarks show that MSCR consistently improves performance over MCR and strengthens synergistic capability. It raises conditional recovery, the accuracy of the fused prediction on samples that the unimodal predictors misclassify, as well as the share of the model's output that InterSHAP attributes to cross-modal interactions. Its gain in conditional recovery persists when the fusion module is Transformer-based. Code is available at https://github.com/chenxinyu991-collab/MSCR.",
    "published": "2026-10-17T02:54:30Z",
    "updated": "2026-10-17T02:54:30Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24395"
  },
  {
    "id": "2610.24390",
    "title": "Trust the Edge, Doubt the Arrow: Auditing Validation Signals for Text-Mined Clinical Causal Knowledge Graphs",
    "authors": [
      "Su Lan",
      "Shicheng Zhou",
      "Yiqi Wang",
      "Yanming Zhu",
      "Xuefei Yin",
      "Alan Wee-Chung Liew"
    ],
    "abstract": "Clinical causal retrieval-augmented generation systems increasingly use knowledge graphs (KGs) mined from notes, yet extracted assertions remain candidates that require audit for patient-level EHR support and direction. We construct a directed candidate graph from 328,839 MIMIC-IV discharge summaries using LLM extraction and UMLS normalization, and evaluate three signals against SemMedDB: within-admission co-occurrence lift, cross-admission diagnosis-coding temporal precedence, and literature corroboration. Lift filters unsupported co-mentions and provides useful EHR support, but not causal proof. Coding order is a weak direction signal: among the 686 candidates where it commits, it reaches 54.2% agreement with SemMedDB, below the extractor's 69.4% on the same subset. Literature corroboration supplies independent direction evidence but covers only 30.4% of candidate relations. A MIMIC-III replication yields the same pattern: extractor direction remains stable (70.5%), whereas coding-order direction is near chance (50.9%). Thus, text-mined clinical causal candidate KGs are best treated as EHR-supported but direction-uncertain. In a leakage-controlled causal QA benchmark, lift-only retrieval achieves 35.7% accuracy; conservative causal demotion achieves 37.2% while reducing evidence-unsupported answers from 17.3% to 6.1% at fixed retrieval recall. We release code, aggregate summaries, and scripts to regenerate restricted outputs.",
    "published": "2026-10-17T02:46:57Z",
    "updated": "2026-10-17T02:46:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24390"
  },
  {
    "id": "2610.24389",
    "title": "From Neglect to Resignation: Understanding the Evolution of Mobile Privacy",
    "authors": [
      "Yibo Meng",
      "Ziqi Liu",
      "Lionel Z. Wang",
      "Shuning Zhang",
      "Xiaolan Ding"
    ],
    "abstract": "This decade-long longitudinal qualitative study follows 31 smartphone users in China across four interview waves (2014-2023) to examine how mobile privacy understanding evolves alongside shifting computing infrastructures. Findings reveal three stages shaped by distinct interactional mechanisms: early functional acceptance of permission-based data access, growing vigilance triggered by behavioral tracking feedback loops, and eventual resignation as AI-driven inference made ecosystem-level profiling feel inescapable. Rather than a stable attitude, digital resignation emerges through cumulative infrastructure exposure, as each new system layer retroactively reinterpreted earlier permissions and exhausted users' capacity for self-management. The study challenges permission-centric design assumptions and proposes inference visibility, context isolation, and automated privacy agency as system-level responses.",
    "published": "2026-10-17T02:44:39Z",
    "updated": "2026-10-17T02:44:39Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.24389"
  },
  {
    "id": "2610.24385",
    "title": "Bridging Exploration and Persona: Information-Directed Dueling for Test-Time Agent Personalization",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Xiangyi Wang",
      "Hengquan Huang",
      "Shuang Qiu",
      "Min Zhang",
      "Zhongxiang Dai"
    ],
    "abstract": "Effective test-time personalization requires LLM agents to adapt to query-dependent user preferences from lightweight interaction. We study persona selection with binary comparisons between candidate responses as the online signal. We present ID-TAP, a scalable, IDS-inspired neural dueling-bandit framework for large discrete persona spaces. ID-TAP combines a query-conditioned neural utility model with a lightweight Bradley-Terry explorer, and transfers comparison evidence across related queries through similarity-weighted warm starts. The neural model shares statistical strength across queries while preserving query-specific scores, and efficient BT updates score hypothetical challengers. Across seven user-conditioned generation benchmarks under reference- and model-based preference simulators, ID-TAP achieves the strongest aggregate performance among the evaluated baselines within a fixed ten-round comparison budget. These results support information-directed challenger selection as an effective design for test-time persona adaptation.",
    "published": "2026-10-17T02:40:47Z",
    "updated": "2026-10-17T02:40:47Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.24385"
  },
  {
    "id": "2610.24383",
    "title": "IF-MAP: Influence-Function-Inspired Agent Prioritization in Multi-Agent Systems",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Zikun Qu",
      "Jiahang Sun",
      "Xiangyi Wang",
      "Zhiwei Shang",
      "Zhiyong Wang",
      "Guojun Xiong",
      "Zhongxiang Dai"
    ],
    "abstract": "Improving every agent in an LLM-based multi-agent system can be prohibitively costly, making it important to identify which agent should be prioritized to achieve the greatest system-level gain with limited resources. Failure attribution can inform this decision, but an agent's responsibility for failures does not directly reveal the system-level gains achievable by improving it. We therefore introduce IF-MAP, an influence-function-inspired method for identifying agents with high potential for system-level improvement. For each agent, IF-MAP measures end-to-end loss changes under controlled semantic prompt perturbations, fits a regularized local response model in a low-dimensional prompt-embedding subspace, and uses the estimated response norm as a priority score. This black-box procedure requires no access to model parameters or gradients and produces agent priorities that can guide subsequent improvement effort. We evaluate IF-MAP across six multi-agent workflows spanning code generation, question answering, and mathematical reasoning, using the same priorities for prompt optimization and model upgrades. Optimizing the selected agents' prompts achieves a macro-average gain of 3.81 percentage points, compared with 1.85 for uniform agent selection. Across five target models, upgrading the selected agents yields macro-average gains of 7.62-16.42 percentage points, compared with 3.81-8.62 for uniform agent selection. Despite its probing overhead, IF-MAP reduces Qwen3-8B and DeepSeek-V3.2 token use by 74.2% and 35.2%, respectively, relative to optimizing every agent, and reduces target-model tokens by 63.6-64.9% relative to upgrading every agent. These results support the use of IF-MAP to identify promising agents and direct improvement effort toward greater end-to-end performance gains.",
    "published": "2026-10-17T02:36:35Z",
    "updated": "2026-10-17T02:36:35Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.24383"
  },
  {
    "id": "2610.24382",
    "title": "Is This Your Agent? Identity Watermarking for Agent Systems in Dynamic Environments",
    "authors": [
      "Yuwei Zhong",
      "Yu Cheng",
      "Jiuan Zhou",
      "Weizhi Liu",
      "Yi Xie",
      "Yongkang Hu",
      "Yuan Xie",
      "Zhaoxia Yin"
    ],
    "abstract": "Agent systems deployed in dynamic environments continuously update their memories, skills, and runtime configurations, leading to evolving trajectories and challenges for persistent identity authentication. Existing text and agent watermarking methods struggle to achieve stable watermark embedding under dynamic environments, while embedded watermarks may become difficult to recover due to environmental changes. This paper proposes DASMark, an identity watermarking framework for dynamic agent systems. DASMark introduces Action-Preserving Embedding (APE), which learns semantically similar but distinguishable decision-expression channels from diverse interaction trajectories to enable stable watermark embedding in dynamic systems. It further introduces Shift-Robust Recovery (SRR) to mitigate context-induced shifts and improve watermark recovery stability under dynamic environments. In dynamic settings, DASMark achieves 98.5% bit-decoding accuracy and maintains 95.2% accuracy under attack scenarios, while preserving task utility comparable to unwatermarked agents.",
    "published": "2026-10-17T02:27:55Z",
    "updated": "2026-10-17T02:27:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24382"
  },
  {
    "id": "2610.24381",
    "title": "Learning from the Right Regions: Class-Conditioned Explanation Guidance for Medical Imaging",
    "authors": [
      "Zubair Faruqui",
      "Rahul Dubey"
    ],
    "abstract": "Deep neural networks can achieve strong predictive performance in medical imaging while relying on regions unrelated to the predicted finding. Explanation-guided learning can address this problem, but multi-label classification introduces a key challenge: multiple abnormalities may coexist in an image, requiring each prediction to align with its corresponding spatial evidence. We propose a class-conditioned explanation-guided learning framework that constructs a separate explanation for each positive class and penalizes evidence outside its class-specific annotated regions. We instantiate the framework using Gradient-weighted Class Activation Mapping (Grad-CAM) and evaluate it on 14 abnormalities using EfficientNet-B1, ViT-B/16, ViT-B/32, and Swin-B. Explanation guidance substantially improves annotation alignment across all architectures: All-Saliency Precision increases from 0.140 to 0.625, 0.052 to 0.551, 0.060 to 0.403, and 0.095 to 0.570, respectively. These improvements are accompanied by smaller, architecture-dependent changes in classification performance. Our results show that class-conditioned explanation guidance can substantially improve where multi-label classifiers concentrate their explanatory evidence while largely preserving predictive performance.",
    "published": "2026-10-17T02:27:03Z",
    "updated": "2026-10-17T02:27:03Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24381"
  },
  {
    "id": "2610.24380",
    "title": "Train Locally, Learn Together: Distributed Multi-Agent Training via ADMM",
    "authors": [
      "Yiwei Chen",
      "Changsheng Wang",
      "Yicheng Lang",
      "Qing Qu",
      "Alfred O. Hero",
      "Sijia Liu"
    ],
    "abstract": "Multi-agent systems (MAS) can outperform individual language-model agents by combining specialized roles, diverse reasoning processes, and collaborative decision-making. However, collaborative MAS training is typically centralized, requiring a common trainer to aggregate role-local trajectories and learning signals and maintain model and optimization states. This motivates a distributed multi-agent learning paradigm in which agents improve system-level capabilities through role-local learning and decentralized communication, paving the way toward scalable, resilient, and self-organizing MAS. To this end, we introduce, to the best of our knowledge, the first optimization-grounded framework for distributed MAS training based on consensus alternating direction method of multipliers (ADMM). We formulate collaborative MAS learning as a consensus-constrained finite-sum optimization problem, naturally lending itself to distributed optimization via ADMM. The proposed approach alternates role-local learning with inter-agent consensus using distributed communication protocols such as ring all-reduce, enabling joint optimization while keeping each agent's data and training state local. We evaluate our framework on distributed safety alignment and general reasoning tasks. Under compromised-agent settings, ADMM can reduce HarmBench attack success rate (ASR) by up to 26.4%, while achieving reasoning gains comparable to centralized training. These results show that distributed MAS training retains the benefits of centralized joint optimization without requiring a centralized trainer.",
    "published": "2026-10-17T02:26:46Z",
    "updated": "2026-10-17T02:26:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24380"
  },
  {
    "id": "2610.23663",
    "title": "PCDFusion: Proposal-Context-Detail Bayesian Rendering for Infrared-Visible Image Fusion",
    "authors": [
      "Rui Liu",
      "Lin Gu",
      "Hesong Li",
      "Ying Fu"
    ],
    "abstract": "Infrared-visible image fusion (IVIF) aims to combine visible and thermal infrared observations for human perception and downstream vision tasks. Visible and thermal infrared observations are physically complementary but unreliable in different ways. Existing deep IVIF methods mainly improve feature interaction and reconstruction, but often lack an explicit local rule for deciding when visible appearance should dominate and when thermal responses should contribute. To address this issue, we reformulate IVIF as local Bayesian posterior rendering, where fusion is controlled by posterior action weights rather than direct modality mixing. In this paper, we propose Proposal-Context-Detail Fusion (PCDFusion), a visible-anchored framework that implements this formulation through three rendering stages. PCDFusion preserves potentially useful thermal responses, updates exposure-degraded visible regions, and renders reliable band-limited infrared structures into the final luminance. Extensive experiments on public IVIF benchmarks show that PCDFusion improves fusion quality, target recovery, and downstream detection and segmentation performance under challenging illumination. The code is available at https://github.com/BIT-RuiLiu/PCDFusion.git.",
    "published": "2026-10-16T15:56:59Z",
    "updated": "2026-10-16T15:56:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23663"
  },
  {
    "id": "2610.23661",
    "title": "An Efficient Approach to Beetle Damage Detection of Banana Using Deep Learning",
    "authors": [
      "Md. Mehedi Hasan Naeem",
      "Ishtiyak Ahmmad Araf",
      "Md. Arefin Haque Mahir",
      "Tushar Kanti Saha"
    ],
    "abstract": "Visible surface damage of banana fruits by Basilepta subcostata (the banana fruit scarring beetle) can reduce their market value. Here, manual inspection of Banana fruits is subjective and difficult to scale. This study presents a lightweight framework based on YOLOv8n deep learning model for locating individual bananas and classifying their visible surface condition as healthy or unhealthy. The term beetle damage in the paper title is used operationally for the locally observed scar-like surface condition; the model does not identify a specific beetle species or biological cause. A custom dataset of 2,473 images containing 5,827 annotated banana instances was prepared from local-market imagery in Bangladesh. The reported experiment used an 80/20 protocol with 1,982 training images and 491 test images. A pretrained YOLOv8n model was trained at 640x640 resolution for 50 epochs with a batch size of 4. On the test partition, it achieved 81.36% precision, 74.30% recall, 77.67% F1-score, 87.04% mAP@0.50 and 59.33% mAP@0.50:0.95. A YOLOv8s comparison gave slightly lower F1 and mAP while using a substantially larger checkpoint. The YOLOv8n checkpoint occupied 5.96 MB and required 6.54 ms/image for inference on an NVIDIA Tesla T4. The results support YOLOv8n as a compact baseline for instance-level banana surface inspection within the studied acquisition conditions.",
    "published": "2026-10-16T15:55:23Z",
    "updated": "2026-10-16T15:55:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23661"
  },
  {
    "id": "2610.23659",
    "title": "FlexPart: Text-Controlled Semantics-Aware 3D Part Segmentation at Flexible Granularity",
    "authors": [
      "Yiqun Zhao",
      "Jiachen Xu",
      "Yihao Zhi",
      "Yunfei Zhao",
      "Zibo Zhao",
      "Xintong Han",
      "Chunchao Guo",
      "Shenghua Gao"
    ],
    "abstract": "A 3D asset admits multiple valid part decompositions, while semantics-aware segmentation should reflect both the desired granularity and the parts a user wants to extract. Ideally, a practical segmentation model should strive for a simple principle: what you ask for is what you get. However, realizing this goal is hindered by two core obstacles: the lack of multi-granularity training data and the absence of a holistic control mechanism. We propose FLEXPART, a unified framework for text-controlled 3D mesh segmentation. To establish flexible control, we introduce a holistic control prompt comprising semantic part names with location and shape clauses. To support this mechanism, we utilize an automated Vision-Language Model (VLM) pipeline to construct a large-scale dataset of multi-granularity partitions and their corresponding prompts. Driven by this data, FLEXPART generates a view-independent part-identity field in native 3D space, directly assigning discrete part IDs to mesh faces. To compel the model to respect semantic conditions rather than rely on geometric priors, we train the model using randomized background dropping. Furthermore, an inference-time VLM planner can automatically complete descriptive clauses from 2D renderings, allowing users to simply name the desired parts in ordinary words. FLEXPART with planner-completed prompts outperforms the strongest evaluated baseline by 15% in mIoU, even when that baseline receives ground-truth guidance. On our held-out FLEXPARTBENCH, FLEXPART leads at each granularity and improves average mIoU by 22% over the strongest baseline. With only the requested part names supplied by the user, it also improves IoU by 35% over the strongest click-driven baseline on selective segmentation.",
    "published": "2026-10-16T15:54:52Z",
    "updated": "2026-10-16T15:54:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23659"
  },
  {
    "id": "2610.22872",
    "title": "Look Back, Correct Forward: Error Feedback Calibration for Time Series Forecasting",
    "authors": [
      "Haonan Yang",
      "Yulin He",
      "Zhuo Li"
    ],
    "abstract": "Time series forecasting models are increasingly deployed in continuously evolving environments. After a forecast is issued, future observations gradually arrive and reveal how the model has failed. Existing methods mainly treat such observations as supervision for parameter updates. However, it remains unclear whether verified forecasting errors can themselves provide causal feedback for correcting future predictions. To address this, we introduce Error Feedback Calibration (EFC), a fully test-time framework for deterministic post-hoc correction of time series forecasting. EFC constructs a Causal Error Diagonal (CED) from revealed errors of overlapping historical forecasts, providing a fresh view of the frozen forecaster's recent failure behavior. Then Cumulative Error Transport (CET) maps this error state to future residuals using cumulative estimation, while temporal out-of-sample validation controls the correction strength. Temporal Residual Learning (TRL) further predicts only the residual structure left after CET from recent CED trajectories, rather than relearning the entire forecasting error. Extensive experiments across forecasting backbones and datasets show that EFC broadly improves forecasting performance while substantially controlling harmful over correction.",
    "published": "2026-10-16T03:22:18Z",
    "updated": "2026-10-16T03:22:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22872"
  },
  {
    "id": "2610.22871",
    "title": "ShadowFPT: Backdooring Federated Prompt Tuning via Shadow Triggers",
    "authors": [
      "Kun Zhai",
      "Teng Li",
      "Yunhao Feng",
      "Xingjun Ma"
    ],
    "abstract": "Federated Prompt Tuning (FPT) adapts large vision--language models by freezing the pretrained backbone and optimizing only lightweight prompt parameters across clients. Although this design improves communication and parameter efficiency, it creates an overlooked security risk. Since the backbone is shared and frozen, a malicious client can induce backdoor behavior through the representation space while keeping its uploaded prompt updates close to benign ones. We propose \\textbf{ShadowFPT}, a targeted backdoor attack that exploits this frozen-backbone attack surface. ShadowFPT first pretrains a learnable \\emph{Shadow Trigger} against the frozen CLIP visual encoder, using either auxiliary public data or the malicious client's local data, so that triggered inputs are steered toward the target class in representation space. During federated prompt tuning, the malicious client adapts the trigger under the current global prompt and then optimizes its local prompt on both clean and triggered samples. Only prompt parameters are uploaded to the server, while the trigger and frozen encoders remain local. By shifting most of the attack burden from prompt updates to trigger-induced representation steering, ShadowFPT achieves targeted misclassification while preserving prompt-space stealthiness. Across multiple datasets, aggregation rules, and non-IID federated partitions, ShadowFPT increases the attack success rate from 19.81\\% to 90.36\\% in our main setting, while maintaining clean accuracy. It remains effective across textual, visual, and joint vision--language prompt tuning. These results identify frozen backbones as stealthy and underexplored backdoor surfaces in federated prompt tuning, suggesting that defenses based only on prompt-update anomaly detection are insufficient.",
    "published": "2026-10-16T03:22:06Z",
    "updated": "2026-10-16T03:22:06Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22871"
  },
  {
    "id": "2610.22869",
    "title": "MS-Eval: Benchmarking Sub-Agent Delegation and Orchestration in MCP-Intensive Working Scenarios",
    "authors": [
      "Bowen Ding",
      "Qixin Wang",
      "Lexing Ruan",
      "Weiyi Lu",
      "Qiwei Ge",
      "Ruishan Fang",
      "Tao Lin"
    ],
    "abstract": "LLM agents are increasingly integrated into real-world works, yet they must handle diverse domain-specific tools and complex multi-sub-task problems that sequential tool invocation resolves inefficiently and with severe context bloat. The Main-Agent Delegation and Sub-Agent Execution (MAD-SAE) paradigm addresses these issues by delegating sub-tasks to specialized sub-agents for parallel execution in isolated contexts, but its delegation and orchestration quality remains unquantified. We introduce MS-Eval, a unified evaluation kit comprising an MCP-intensive benchmark, a controlled execution harness, tailored delegation and orchestration metrics, and the MSQ index for comprehensive assessment. Evaluating four MAD-SAE variants and eight frontier models reveals that (1) sub-agent specialization (Spec) is the best practical practice; (2) open-source models are largely competitive with few exceptions; and (3) MAD-SAE generally raises cost with contingent payoff, benefiting most open-source models in both performance and efficiency while leaving closed-source models with higher cost and degraded performance. Our case study further traces these gains to better single-agent solutions, effective context offloading, and genuine sub-task parallelism, whereas unnecessary or redundant delegation turns the same cost into pure overhead. Codes: https://github.com/LINs-lab/MS-Eval",
    "published": "2026-10-16T03:13:30Z",
    "updated": "2026-10-16T03:13:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22869"
  },
  {
    "id": "2610.22861",
    "title": "Evo-B&B: Behavior-Aware LLM-Guided Joint Evolution of Branching and Node Selection Policies for MILP",
    "authors": [
      "Jiayu Chen",
      "Chentong Chen",
      "Yuhan Liu",
      "Ye Fan",
      "Jianyong Sun",
      "Jialong Shi"
    ],
    "abstract": "In branch-and-bound for Mixed-Integer Linear Programming (MILP), branching and node selection are two critical and tightly coupled decisions, yet most existing learning-based approaches focus on optimizing them separately. We propose Evo-B&B, an LLM-guided evolutionary framework that jointly evolves executable branching and node selection policies using end-to-end SCIP solving feedback. To improve search efficiency and reduce redundant evaluations of behaviorally similar policies, Evo-B&B introduces a behavior-aware multi-island evolutionary mechanism. It measures policy similarity from branching and node-selection behaviors on a fixed set of B&B decision states and uses this similarity to preserve population diversity. We evaluate Evo-B&B on four standard MILP benchmarks across multiple instance scales. Experimental results show that Evo-B&B achieves competitive solving performance and generalizes well to larger-scale instances, while ablation studies further demonstrate the effectiveness of joint evolution and behavior-aware diversity management.",
    "published": "2026-10-16T03:07:04Z",
    "updated": "2026-10-16T03:07:04Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22861"
  },
  {
    "id": "2610.22858",
    "title": "Uncertainty-Aware Budget Allocation for Efficient LLM Tree Search",
    "authors": [
      "Jianguo Huang",
      "Zhiyi Lyu",
      "Fuxiang Zhang",
      "Yanchen Deng",
      "Deheng Ye",
      "Bo An"
    ],
    "abstract": "Tree search enhances multi-step reasoning in large language models (LLMs), yet prevailing methods expand every step with a fixed budget, irrespective of the marginal utility of expansion. We first show, across existing search algorithms, that continuations sampled from a shared intermediate state are largely duplicates and collapse to a few distinct answers. Critically, we find that the semantic dispersion of sibling actions predicts the redundancy of their downstream continuations, permitting a subtree's budget to be fixed before expansion. An information-theoretic analysis motivates this: treating the per-step budget as the Monte Carlo sample size for estimating a step's residual answer entropy, we derive a sufficient budget that shrinks with sibling dispersion. We accordingly propose $\\textbf{Uncertainty-Aware Allocation}$ (UAA), a training-free framework that decouples value from uncertainty: values determine which candidates are promising, while uncertainty, estimated from sibling dispersion at no additional model cost, determines how many merit expansion, via uncertainty-aware pruning and uncertainty-aware budgeting. Across mathematical reasoning, logical reasoning, and planning benchmarks, UAA reduces token usage by up to $90\\%$ and latency by up to $9\\times$ at comparable accuracy, generalizing across four tree search algorithms and both open- and closed-source LLMs.",
    "published": "2026-10-16T03:03:28Z",
    "updated": "2026-10-16T03:03:28Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22858"
  },
  {
    "id": "2610.22852",
    "title": "Sample-Efficient Reinforcement Learning for Policy Improvement via Flow-Reversed Action Anchors",
    "authors": [
      "Carl Qi",
      "Weijun Dong",
      "Xiaojie Wang",
      "Peiyi Chen",
      "Rahul Sajnani",
      "Mingyuan Zhang",
      "Amy Zhang",
      "Jose Barreiros",
      "Manikatan Nambi",
      "Lillian J. Ratliff",
      "Dylan Randle"
    ],
    "abstract": "Generalist robot policies offer strong behavioral priors, but achieving deployment-level reliability and throughput remains difficult. Reinforcement learning (RL) can improve these policies, yet its effectiveness is constrained by the cost of online interaction. Existing methods adapt frozen flow-matching policies by treating noise space as a continuous action space. We show that this behaviorally unstructured space makes exploration inefficient, often preventing these methods from extracting meaningful learning signals on challenging tasks. We introduce AnchorQ, which enables coarse-to-fine policy improvement through a structured, refinable latent action representation. At each decision step, AnchorQ uses flow reversal to map reference behaviors to state-conditioned latent anchors, samples local particles around those anchors, and applies value-guided sampling to explore promising refinements. Our analysis shows that anchors reduce identification complexity at the cost of support bias; particle refinement trades this bias against action-class complexity; and critic accuracy determines the reliability of KL-regularized, value-guided selection. Across simulated and real-world manipulation tasks, AnchorQ outperforms state-of-the-art post-training baselines in sample efficiency, delivering a 37% improvement in real-world success rate and 97% higher simulated task throughput under the same interaction budget. Additional visualizations are available on our website https://anchorq-rl.com/.",
    "published": "2026-10-16T02:51:48Z",
    "updated": "2026-10-16T02:51:48Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22852"
  },
  {
    "id": "2610.22847",
    "title": "Measurement-Adaptive Light-Cone Transform for Robust Non-Line-of-Sight Imaging",
    "authors": [
      "Lianfang Wang",
      "Xueying Liu",
      "Junnan Dong",
      "Qinghua Zhang",
      "Jun Liu",
      "Yong Wang",
      "Yuping Duan"
    ],
    "abstract": "Practical non-line-of-sight (NLOS) measurements are affected by noise and deviations from idealized light transport, which can degrade reconstruction with conventional light-cone transform (LCT) methods. We propose the Measurement-Adaptive Light-Cone Transform (MALCT), a physics-guided framework that retains the efficient Fourier-domain inversion structure of LCT. {Within a unified variational formulation, MALCT combines the analytical response with a shared learned response through measurement-conditioned weighting and predicts a measurement-conditioned, frequency-dependent regularization map.} An attention-enhanced spatio-temporal feature extraction module captures long-range temporal dependencies and local spatial correlations to support reconstruction under low-signal conditions. Experiments on synthetic data and real measurements from different NLOS systems demonstrate improved reconstruction quality. Controlled evaluations further assess robustness to temporal-response broadening and reduced acquisition time. MALCT also preserves scene structures with spatial sampling grids down to $32\\times32$, supporting its potential for NLOS imaging under limited acquisition budgets.",
    "published": "2026-10-16T02:47:58Z",
    "updated": "2026-10-16T02:47:58Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22847"
  },
  {
    "id": "2610.24020",
    "title": "DinoMUSE: A DINOv2-guided Framework for Unsupervised Lateral Motion Estimation in Ultrasound Elastography",
    "authors": [
      "Xiyao Meng",
      "Xingyue Wei",
      "Baihua Luo",
      "Bo Peng",
      "Jianwen Luo"
    ],
    "abstract": "Quasi-static ultrasound elastography (USE) is a non-invasive imaging method for assessing soft tissue mechanical properties. Limited by low resolution, low sampling frequency and lack of phase information in the lateral direction, accurate lateral motion estimation remains a critical bottleneck in USE. Existing methods mainly rely on local image matching and physical constraints (such as tissue incompressibility assumption and effective Poisson's ratio), which lack sufficient contextual information. We present DinoMUSE, a DINO-guided mixture-of-experts (MoE) framework for unsupervised lateral motion estimation in USE. DinoMUSE incorporates high-level visual representations learned by DINOv2 into the motion estimation network to provide global contextual guidance. To facilitate effective interaction between DINOv2 features and local matching features, an MoE-based feature-fusion module adaptively transforms and integrates the two representations. Evaluations against NCC, GLUE, RAFT, and sPICTURE on simulation and in-vivo breast datasets show that DinoMUSE substantially improves lateral estimation accuracy while maintaining competitive axial performance. Specifically, DinoMUSE reduces the mean square error (MSE) of lateral displacement and strain estimation by 60% and 65%, respectively, compared with a SOTA algorithm on the simulation dataset. For in-vivo breast data, DinoMUSE achieves axial strain SNR and CNR of 5.70 and 4.82, and lateral strain SNR and CNR of 4.61 and 2.23, compared to 4.11 and 3.32, and 4.57 and 2.13 for the best competing method, alongside improved lesion visualization. These findings indicate the potential of leveraging transferable visual representations and adaptive feature fusion to improve lateral motion estimation in USE. The code is available at xxxxxxxx.",
    "published": "2026-10-16T02:43:08Z",
    "updated": "2026-10-16T02:43:08Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24020"
  },
  {
    "id": "2610.22845",
    "title": "Variational and Decomposed method for Mitigating Bimodal Bias in Robust Visual Question Answering",
    "authors": [
      "Yihan Zhao",
      "Yuncheng Jiang"
    ],
    "abstract": "Visual question answering (VQA) models are known to suffer from the bias issue, which refers to overfitting the regularities of frequent patterns. Previously, researchers only consider the language bias. Recently, the multimodal bias is noticed. However, what multimodal bias is remains unclear. In this paper, we investigate the multimodal bias in counting and non-counting questions. We find that they have distinct underlying mechanism, so their biases come from distinct reasons. We provide valuable interpretations of VQA counting mechanism: \\textbf{quantity information stems from the magnitude of the multimodal features in specific dimensions.} Thus, counting bias stems from the vision side and propagates to multimodal features through modality fusion, while the non-counting bias stems from primarily language bias and slightly vision bias. Thus, we propose a method to deal with them differently: Variational and Decomposed method for mitigating Bimodal Bias (VDB). It extracts bimodal bias affected by different proportion of vision and language sides. We introduce variational bias models utilizing the principle of Variational Auto-Encoder to learn mainly language bias with slight vision effect, and a bimodal bias model for bimodal bias combining language and vision sides. Extensive experiments on VQACPv2, VQACPv1, and GQAOOD datasets demonstrate the rationality of our claim and the effectiveness of our method. We also provide explanation for the compromised performance on VQAv2.",
    "published": "2026-10-16T02:42:07Z",
    "updated": "2026-10-16T02:42:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22845"
  },
  {
    "id": "2610.21581",
    "title": "ClaimScope: Label-Blind Witness Verification for Mathematical Claim Auditing",
    "authors": [
      "Mushir Akhtar"
    ],
    "abstract": "Mathematical agents are commonly evaluated by answer accuracy or proof acceptance. We introduce ClaimScope, a 72-task benchmark for auditing proposed claims through a verdict, scope, counterexample, and repair. Tasks cover optimizer-state transport, finite-horizon affine recurrences, and exact $2\\times2$ linear algebra. We evaluate Qwen3-8B with direct generation and four matched two-pass conditions, each starting from the same draft. A witness checker evaluates only the model's submitted state, without consulting reference verdicts or supplying a replacement witness. Its feedback still conveys information about validity: a verified refutation establishes that the claim is false, and rejection reasons can suggest structural fixes. In this evaluation, verifier feedback yields $23/39$ accepted counterexamples on invalid claims and $25/72$ safe completions, compared with $15/39$ and $20/72$ for checker-free generic feedback. Strict completion remains $17/72$; verdict accuracy changes from $47/72$ to $46/72$. The claim-grouped safe-completion difference is $.094$, with a bootstrap 95\\% interval of $[.000,.198]$. All seven task-level gains follow horizon/input-length diagnostics. A post-hoc schema-only correction of the direct outputs reaches the same 25 safe tasks without another model call. These results separate claim classification from executable evidence, while locating the observed gains in witness-structure correction rather than demonstrating broader reasoning improvement.",
    "published": "2026-10-15T09:29:02Z",
    "updated": "2026-10-15T09:29:02Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21581"
  },
  {
    "id": "2610.21579",
    "title": "Learning to Search for Executable Patternmaking from Certified Programs",
    "authors": [
      "Zhuotao Xu",
      "Chi Zeng",
      "Liying Yang",
      "Xinxing Yu",
      "Yanyan Liang"
    ],
    "abstract": "Recent models generate sewing patterns from images or text, and program-based representations make these patterns executable. These systems produce a finished pattern and do not model how a patternmaker turns one pattern into another. In practice a new style is made by editing an existing pattern: lengthening the bodice, moving a dart, swapping a sleeve. Pattern archives record the results of such edits and none of the steps. We observe that the steps can be recovered by searching over editing actions until one pattern becomes the other. A deterministic compiler makes the recovered steps checkable. To this end, we present SemDraft, the first framework that learns to search for executable patternmaking programs from paired before-and-after sewing patterns without recorded editing steps. Specifically, a bounded search recovers a program of editing actions and certifies it only after three checks: it recompiles from scratch, every pair of its actions is classified as ordered or interchangeable, and an independent replay reaches the same pattern. The certified programs then train a model that ranks candidate actions inside the same search. On two frozen draws of 80 order-sensitive cases, with every other search component fixed, the learned ranker certifies 63 and 64 cases within 1,000 search executions, against at most 53 and 52 for non-learned rankers.",
    "published": "2026-10-15T09:28:18Z",
    "updated": "2026-10-15T09:28:18Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.21579"
  },
  {
    "id": "2610.21573",
    "title": "MYOPIA: Understanding the Limits of Tree-Based Reasoning in Vision-Language Models",
    "authors": [
      "Islam Mesabah",
      "Sary Elmansoury",
      "Gerrit Großmann",
      "Peter Neigel",
      "Sebastian J. Vollmer"
    ],
    "abstract": "Decision trees can make vision-language model (VLM) classification interpretable by replacing a single prediction with a sequence of root-to-leaf questions. However, the accuracy cost of this greedy, non-backtracking procedure remains unclear. We introduce \\textbf{MYOPIA}, a benchmark comprising four LLM-generated, human-refined decision trees for GTSRB, MNIST, CIFAR-10, and MSCOCO, together with matched prompts, diagnostic protocols, and an evaluation harness. Across GPT-4o, Qwen-VL Max, and LLaMA-3.2 11B Vision, tree traversal underperforms zero-shot prompting in all 12 dataset--model pairs; paired bootstrap analyses consistently favor zero-shot. Our diagnostics characterize interacting failure modes associated with this gap. Models often recall tree-encoded class attributes more accurately than they ground the same attributes in images: the mean label--image accuracy gaps are 9.5, 13.8, and 12.6 points for GPT-4o, Qwen-VL Max, and LLaMA, respectively. Incorrect local decisions then irreversibly exclude the correct class, while answer extraction introduces additional model-dependent loss. A node-level audit of the four trees finds that split entropy is weakly but consistently associated with lower node accuracy, whereas depth, branching factor, and within-node grounding differences are less stable. \\textbf{MYOPIA} therefore provides a framework for diagnosing hierarchical visual classification and motivates testing tree designs that prioritize perceptual answerability and recovery from early errors. Code is available at https://github.com/islammesabah/VLM_Classification.",
    "published": "2026-10-15T09:25:10Z",
    "updated": "2026-10-15T09:25:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21573"
  },
  {
    "id": "2610.21571",
    "title": "Rethinking the Role of Tool Graph Memory in Multi-Turn Tool Use",
    "authors": [
      "Uiji Hwang",
      "Richeng Xuan",
      "Taeuk Kim"
    ],
    "abstract": "Large language model (LLM) agents solve complex tasks by calling external tools over multiple turns. Recent work has proposed tool graph memory, which stores past experience as tool transitions to guide subsequent selection. However, it remains unclear whether this component consistently improves agents' tool use or undermines it. We evaluate tool graph memory on nine models and two benchmarks, finding that it seldom improves significantly over baselines, and that its gains, where present, cost over twice the LLM calls. The memory's guidance is often incorrect, and random or no guidance retains most of the gain, implying that the benefit stems from extra computation rather than the memory itself. Moreover, even with the correct next tool suggested, many failures remain, such as giving up without a tool call. Storing the same experience instead as textual insights outperforms tool graph memory with almost no extra LLM calls. This suggests that memory serves better as a soft prior than as a prescription of the next tool, leading to a more effective and generalizable solution.",
    "published": "2026-10-15T09:24:30Z",
    "updated": "2026-10-15T09:24:30Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21571"
  },
  {
    "id": "2610.21570",
    "title": "Independent Data-Integrity Verification for LLM-Driven Functional Coverage Closure in Hardware Design",
    "authors": [
      "Venkata Krishna Kumar Vedantam"
    ],
    "abstract": "LLM agents can write directed tests that close functional coverage, but coverage only shows that a state was reached, not that the data on the way there was correct. This is a long-known point in verification and we do not claim it as new. We describe a small coverage-closure agent that applies it to an LLM loop: coverage is read from the report that the simulation itself exports (cocotb-coverage YAML) and never taken from the model's account, and data integrity is checked by scoreboards that are separate from the model. On three architecturally distinct RTL designs (an asynchronous FIFO, a UART transmitter and an AHB2APB bridge) the agent raised coverage from 91.7%, 88.9% and 67.4% to 100% within its 8-iteration budget in every logged run, using one design-agnostic agent. A reactive scoreboard monitor attached to the FIFO's base testbench also found a clock-domain-crossing bug in the author's own stimulus code. The monitor is not yet attached to the LLM-generated tests, so their data integrity is not independently checked; one manual check on a single FIFO test is reported as preliminary. We list the weaknesses of this evidence: three designs, no baseline, no ablation, and logged runs that come from several agent checkpoints.",
    "published": "2026-10-15T09:24:01Z",
    "updated": "2026-10-15T09:24:01Z",
    "categories": [
      "cs.AR",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.21570"
  },
  {
    "id": "2610.21569",
    "title": "Decoupled Safety Control: A Safety-Control Algorithm for Training-Free Safety Guidance",
    "authors": [
      "Huilin Zhou",
      "Ruoxi Cheng",
      "Yuhang Wang",
      "Yuming Liu",
      "Minghao Sun",
      "Ruolong Ma",
      "Lan Zhang"
    ],
    "abstract": "Diffusion models achieve strong performance in text-to-image generation, but they can still produce unsafe content. Training-free safety guidance offers a practical inference-time alternative that intervenes during sampling without modifying model weights. However, many existing safeguards still rely on a coupled safety-control chain. In this chain, the same unsafe condition simultaneously specifies what should be avoided, indicates the current unsafe signal, constructs the intervention, and determines when that intervention remains active. This coupling can work when unsafe factors are explicit, but becomes less reliable once harmful and benign semantics are entangled in the current generation state, often leaving residual unsafe content or unnecessarily degrading benign-generation quality or prompt fidelity. We address this problem with Decoupled Safety Control (DSC), a plug-in safety-control algorithm for training-free safety guidance. DSC reformulates training-free safety guidance as an explicit state-dependent control process, so the executed intervention is determined from the current generation state rather than inherited directly from a single unsafe condition. Experiments on standard safety benchmarks show that DSC improves representative latent- and text-space safeguards, achieving stronger unsafe-content suppression while preserving benign-generation quality and maintaining efficient inference.",
    "published": "2026-10-15T09:24:00Z",
    "updated": "2026-10-15T09:24:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21569"
  },
  {
    "id": "2610.21565",
    "title": "BiShield-TEE: On the (In-)Security of Unilateral Weight Obfuscation in On-Device TEE-Shielded LLM Partition",
    "authors": [
      "Zhiyuan Wang",
      "Yuezhi Zhou",
      "Ziqi Zhang",
      "Zhu Zhang",
      "Zhixing Tan",
      "Yongheng Deng"
    ],
    "abstract": "On-device deployment of large language models (LLMs) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft. Trusted Execution Environments (TEEs) provide hardware-enforced isolation for on-device inference, yet most TEE-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only the output side. We identify a vulnerability in this design, termed the Solution Determinacy Property (SDP): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection. Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over 2.4 times the full-shielding black-box baseline and recovering near-complete model functionality. To address this vulnerability, we propose BiShield-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates. Experiments across diverse models and datasets show that BiShield-TEE confines attack accuracy to the full-shielding black-box baseline, while achieving higher inference efficiency than prior methods on real hardware. Our code is available at https://github.com/laduiw/BiShield-TEE.",
    "published": "2026-10-15T09:22:45Z",
    "updated": "2026-10-16T04:11:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21565"
  },
  {
    "id": "2610.21561",
    "title": "DialFork: Going Beyond Factuality to Evaluate Procedural Hallucination in Conversational Agents",
    "authors": [
      "Sergio Burdisso",
      "Esaú Villatoro-Tello",
      "Dairazalia Sánchez-Cortés",
      "Yanis Labrak",
      "Jordi Luque",
      "Milos Cernak",
      "Petr Motlicek"
    ],
    "abstract": "Large language models (LLMs) deployed as conversational agents are increasingly expected to follow procedural logic. While factual hallucination has received extensive attention, a different failure mode has been overlooked: procedural hallucination, in which an agent produces individually fluent and factually plausible utterances while deviating from the intended conversational process. We introduce DialFork, the first benchmark to measure this failure mode on raw dialogue text. DialFork is built by forking conformant dialogues at controlled turn positions and injecting one of four hallucination types, yielding 36,278 dialogues across 24 tasks in 12 domains; 30 human annotators validate the construction. We define three evaluation tasks that characterize procedural deviation at three granularities: how far a set of dialogues deviates from conformant ones (monitoring deployed agents), how far a single dialogue does (procedural retrieval), and at which turn a dialogue first goes off-track (real-time guardrails). For the first two, we propose dialog-flow-aware metrics, FlowKL and FlowScore, that compare dialogues by how they unfold rather than their content. At the dialogue level, FlowScore significantly outperforms all baselines across seven encoders, showing that semantic similarity is no substitute for procedural similarity. We release DialFork under open licenses at https://github.com/idiap/dialfork, hoping the community will measure conversational process alongside content.",
    "published": "2026-10-15T09:18:32Z",
    "updated": "2026-10-19T12:57:46Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21561"
  },
  {
    "id": "2610.21555",
    "title": "When Does Muon Actually Win? A Paired Data-, Time-, and Tuning-Budget Benchmark",
    "authors": [
      "Mushir Akhtar",
      "Hazem N. Nounou",
      "Majdi Mansouri",
      "Mohamed N. Nounou"
    ],
    "abstract": "Muon's gains in data efficiency motivate evaluating its performance under explicit data, time, and tuning budgets. On a single A100 GPU, we compare a reference single-device Muon implementation with AdamW across 17.7M- and 33.6M-parameter causal language models and 2.70M-parameter vision transformers. A common 23-candidate development budget selects configurations evaluated with five matched seeds, full validation trajectories, optimizer-step timing, and a frozen one-shot test. Muon reduces validation-loss area under the curve by 3.25--22.44\\% at equal data and lowers test loss in all 20 primary pairs. In this configuration, Muon improves time-normalized loss area} by 19.68--22.31\\% on vision, while AdamW is better by 3.38--6.96\\% on language. The full Muon optimizer call, including auxiliary AdamW updates, consumes 56.1--69.6\\% of training time, compared with 6.1--9.1\\% for the AdamW baseline. Muon also has higher expected regret under restricted access to these candidate pools. These results characterize small models with reference kernels; their wall-clock ordering does not establish a ranking for larger models or optimized implementations.",
    "published": "2026-10-15T09:15:49Z",
    "updated": "2026-10-15T09:15:49Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21555"
  },
  {
    "id": "2610.21554",
    "title": "Uncertainty Quantification in Pairwise Difference Learning for Classification",
    "authors": [
      "Mohamed Karim Belaid",
      "Maximilian Rabus",
      "Eyke Hüllermeier"
    ],
    "abstract": "Instead of learning a mapping from instances to outcomes in the standard way, the key idea of pairwise difference learning (PDL) is to learn a function that takes two instances as input and predicts the difference between the respective outcomes. Given a function of this kind, predictions for a query instance are derived from every training example and then averaged. We propose a version of PDL for the task of classification and propose a suitable meta-learning technique for this purpose. Moreover, we address the problem of uncertainty quantification, i.e., of representing and quantifying the uncertainty of a PDL classifier's predictions in a faithful manner. Building on recent work on the decomposition of total uncertainty into aleatoric and epistemic components, we propose different ways of extending corresponding measures to the setting of PDL, depending on how and to what extent uncertainty is represented by the underlying base learner. In large-scale empirical studies, we analyze both the predictive accuracy and the uncertainty awareness of our PDL classifier.",
    "published": "2026-10-15T09:15:08Z",
    "updated": "2026-10-15T09:15:08Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21554"
  },
  {
    "id": "2610.21550",
    "title": "Rethinking Classifier-Free Guidance for TI2I Flow Matching",
    "authors": [
      "Andreas Floros",
      "Elena Koritska",
      "Teofilo de Campos",
      "Christoph Vogel",
      "Chu-Tak Li",
      "Anuj Sharma",
      "Alexandros Neophytou"
    ],
    "abstract": "We study Text-and-Image-to-Image (TI2I) flow matching methods for controllable image editing. In a broader generative modeling context, Classifier-Free Guidance (CFG) is established as a key component responsible for high quality outputs. However, we argue that its role in TI2I modeling is poorly understood. Specifically, we make the surprising observation that the CFG mechanism is implicitly harmful for editing in the noisy phase of flow modeling, hindering instruction following and controllability. We propose a simple correction in the early flow steps, enabling a richer alignment-preservation tradeoff at no extra cost. The effectiveness of our approach is demonstrated on both pixel-space and latent TI2I flows.",
    "published": "2026-10-15T09:13:23Z",
    "updated": "2026-10-15T09:13:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21550"
  },
  {
    "id": "2610.21549",
    "title": "When Is Muon Optimal? Radial Fragility and Minimax Geometry",
    "authors": [
      "Ao Xu"
    ],
    "abstract": "Muon replaces a matrix gradient by an approximate polar factor and has shown strong empirical performance in neural-network training. The Isotropic Curvature Model (ICM) provides a curvature-based explanation for this update by asking when gradient orthogonalization minimizes a one-step local-loss surrogate. We investigate the stability of this explanation when the fixed input radius of the ICM is replaced by a general radial law. We introduce the Random-Radius Isotropic Curvature Model (RR-ICM) and the Polar-Factor Admissibility Set, which encodes exact scaled-polar optimality as a geometric condition on the positive polar factor of the gradient. We derive an exact characterization of this set for arbitrary radial laws and show that all nonscalar admissible responses arise from radial atoms aligned with curvature kinks. Consequently, every atomless radial law exhibits zero-capacity rigidity: exact scaled-polar optimality is possible only when the gradient is already a scaled column isometry. To connect the curvature-based framework with the established spectral geometry of Muon, we introduce the Minimax RR-ICM by replacing directional averaging with worst-case optimization over probability laws on the sphere. We prove that every nonzero global minimizer lies on the polar ray of the gradient, while its scale is determined by a one-dimensional convex problem. The corresponding admissibility geometry is a positive-semidefinite trace slab, in sharp contrast to the spherical-zonoid geometry of the RR-ICM. Together, these results expose the radial fragility of average-curvature explanations and provide a new minimax variational characterization of Muon's polar direction.",
    "published": "2026-10-15T09:13:19Z",
    "updated": "2026-10-15T09:13:19Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21549"
  },
  {
    "id": "2610.20319",
    "title": "Beyond Static Cues: Unified Dynamic Detection of MLLM Backdoors via Dual-Flow Trajectory Analysis",
    "authors": [
      "Yinzhen Huang",
      "Jiahe Xie",
      "Yitong Sun",
      "Ruochen Zhang",
      "Xingxing Wei"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) are increasingly deployed in safety-critical domains, yet their susceptibility to backdoor attacks remains a formidable challenge. While existing defenses have evolved from visual-centric patch cues to unsupervised internal attention statistics, they are fundamentally constrained by a reliance on static snapshots and attack-specific heuristics. Given the intricate interplay between dual modalities, the vast design space for multimodal triggers allows diverse threats, such as textual injections, sub-perceptual noises, and coordinated cross-modal triggers, to easily circumvent such rigid priors, particularly when attack types are unknown in real-world applications. In this paper, we rethink backdoor detection by shifting the diagnostic paradigm from static observations to dynamic output evolution. We observe that a successful attack inevitably hijacks the model's decoding trajectory, skewing internal modal contributions during generation while maintaining an abnormal output invariance despite input perturbations. To capture this behavior, we propose EVO-Detect, a unified detection framework that monitors the dynamic evolution of internal signals during early decoding steps through two complementary channels: Attention Flow and Logits Flow. The attention branch measures how image-text attention allocation evolves during early generation, whereas the logits branch quantifies the sensitivity of the output distribution to modal perturbations through interventional ablations. We then convert these trajectories into compact sample-level metrics and normalize them against negative-control signatures so that natural perturbations are less likely to be mistaken for backdoor evidence. Extensive evaluations show that our approach substantially outperforms state-of-the-art baselines such as BYE and TCAP across diverse attack families.",
    "published": "2026-10-14T15:05:49Z",
    "updated": "2026-10-14T15:05:49Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20319"
  },
  {
    "id": "2610.20312",
    "title": "Reflect After Failure: Brain-Inspired Self-Evolving Agents for Embodied Spatial Intelligence",
    "authors": [
      "Xin Li",
      "Xiaohuan Gu",
      "Yifan Wang",
      "Shaobin Ling",
      "Tianli Shi",
      "Jingao Xu",
      "Zhimeng Yin",
      "Dapeng Wu",
      "Yun Wang"
    ],
    "abstract": "Vision-Language Models (VLMs) have made substantial progress in spatial reasoning, and self-evolving agents further extend these capabilities to embodied environments by learning from interactions. However, current self-evolution remains particularly challenging in embodied spatial tasks, complex and multi-step decisions from partial visual evidence making it difficult to determine why an execution fails. The failure may stem from misperception, insufficient exploration, or incorrect planning, yet execution feedback alone rarely reveals which component is responsible. As a result, simply accumulating interaction experience can reinforce ineffective strategies. To address this, we propose HiMeco, a brain-inspired self-evolving agent for embodied spatial intelligence, inspired by metacognitive monitoring and hippocampal memory consolidation. Through Hippocampal-Metacognitive Reflection, HiMeco diagnoses failures in perception-exploration-planning (PEP), then compares execution attempts to derive reusable strategies and guidance for avoiding recurring errors. It also abstracts interaction programs into parameterized skills, using evidence contracts and execution-based validation to determine their retention and reuse. These strategies and skills guide subsequent interactions, with memory updated only between rounds and model parameters kept frozen. HiMeco achieves state-of-the-art performance on ESI-Bench, and it also improves accuracy on EmbSpatial-Bench by 3.94 percentage points without evolution.",
    "published": "2026-10-14T14:59:04Z",
    "updated": "2026-10-14T14:59:04Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20312"
  },
  {
    "id": "2610.20309",
    "title": "Event Cameras versus Frame Cameras for Synthetic-Aperture Imaging: A Simulation Study",
    "authors": [
      "Jakob Hinterholzer",
      "Mohamed Youssef",
      "Oliver Bimber"
    ],
    "abstract": "Synthetic-aperture imaging (SAI) removes occluders such as foliage by integrating many views of a scene along a camera path. It has so far been used mainly with frame cameras. We ask whether an event camera has advantages for SAI, and answer the question in simulation, where both sensors see exactly the same scene and the same camera movement. A densely rendered Blender sequence is turned into frames with an EMVA~1288 noise model of an industrial global-shutter camera, and into an event stream with the v2e simulator parameterized like a Sony IMX636. The frames are integrated with the existing airborne optical sectioning renderer. For the events we add a new integration path that projects every single event onto the focal plane at its own interpolated pose, so no events have to be binned into frames. We compare the two sensors in three main runs and an additional dark high-speed test. In a bright scene at 25,m/s the frame camera records only three images on the path and cannot remove the occluder, while the event camera reconstructs the target, even after an event-rate controller drops most of its events to fit the camera link. At the same speed in a 5,lux scene the event camera no longer resolves the target either. In a 5,lux scene at 5,m/s both sensors reconstruct the target at similar quality. We also compare the data one traversal of the aperture costs. At high speed the capped event stream still shows the target at the same data volume as the three frames. At 1,m/s we compare both cameras at two matched data budgets, and there the event camera has no advantage over the frame camera in reconstruction quality. The data rate of the event camera depends on the scene and is highest exactly in the fast bright scenes where it is needed most.",
    "published": "2026-10-14T14:56:22Z",
    "updated": "2026-10-14T14:56:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20309"
  },
  {
    "id": "2610.20293",
    "title": "CASI: Credit Assignment via Set Intervention for Agentic Retrieval",
    "authors": [
      "Xinyi Cheng",
      "Tianfu Zhang",
      "Jiwen Li",
      "Xuesen Zhang",
      "Shihao Yu",
      "Pengfei Zhu",
      "Renhuan",
      "Heda Wang"
    ],
    "abstract": "Large language models increasingly generate multiple retrieval actions jointly, while downstream systems often provide only one reward for the resulting set. Broadcasting this reward provides a valid score-function gradient estimator for the expected set-level objective, but does not determine a coalition-dependent within-set attribution. We introduce CASI (Credit Assignment via Set Intervention for Agentic Retrieval), which constructs the missing counterfactual information through snapshot-grounded set intervention: generate and retrieve once, hold replayable snapshot components fixed, and evaluate alternative subsets under common conditions. Shapley aggregation converts these marginals into within-set credit, which bounded zero-sum advantage shaping incorporates into policy optimization. For m >= 4, singleton, leave-one-out, and full-set endpoints do not generally determine the Shapley allocation; under additive set values, extra coalition evaluations are redundant. In a five-action sponsored-search setting, exhaustive auction replay over 1,200 requests reveals substantial coalition dependence. Under the training-time evaluator, CASI achieves the highest median cosine similarity to a replay-defined Shapley reference among evaluated credit rules; under a sensitivity backend, CASI does not outperform Singleton. Across five independent training runs, CASI-trained policies achieve higher held-out auction-replay set value than Singleton- or Broadcast-trained policies. In a randomized seven-day production A/B test on 10% of traffic, the CASI-trained policy yields an observed 3.51% lift in the primary advertiser-value metric over production control.",
    "published": "2026-10-14T14:47:46Z",
    "updated": "2026-10-14T14:47:46Z",
    "categories": [
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.20293"
  },
  {
    "id": "2610.20676",
    "title": "When Correctness Feedback Erases Evidence: Phase-Separated Completeness Auditing in Verus",
    "authors": [
      "Adarsh Agrawal"
    ],
    "abstract": "Correctness feedback suppresses the very evidence that specification-completeness auditing is designed to uncover: programs that satisfy a written contract but violate intended behavior. We demonstrate this objective reversal on 12 Verus/Rust tasks across four model families under matched call budgets. Independent no-feedback discovery more than doubles certified-witness yield relative to IntentShield's corrective-feedback loop (59.0% versus 27.1%). A format-matched iterative control places the larger share of this gap in feedback content, not independent restarts. The advantage holds in every model family and survives parser repair. A separate phase-separated execution matches the aggregate yield without reusing responses; most certified witnesses also fail held-out cases. Preserving these witnesses delivers stronger specification repair: Phase-Revised contracts achieve 81.3% implementation success, versus 62.5% for IS-Revised, with Direct-Revised close behind. Both no-feedback witness sources substantially outperform weakened contracts. The effect does not reproduce in the available Dafny and Lean evaluations, establishing an empirical boundary around the studied Verus/Rust workflow. Completeness auditing and correctness repair have opposing immediate objectives. Preserve and certify the admitted failure before repairing it.",
    "published": "2026-10-14T14:43:24Z",
    "updated": "2026-10-14T14:43:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20676"
  },
  {
    "id": "2610.20283",
    "title": "From Semantic Editing Intentions to Persistent Parametric Controls for AI-Assisted Image Editing",
    "authors": [
      "Rifat Mehreen Amin",
      "Michelle Dutoit",
      "Anton Rockenstein",
      "Baptiste Caramiaux",
      "Andreas Butz"
    ],
    "abstract": "AI-powered image editing increasingly allows users to express high-level editing intentions, yet how these intentions are translated into concrete editing actions often remains difficult to understand. We present Atelier, a semantic image editing tool that uses image semantics and user intent to determine which editing controls to surface and how to initialize them. Guided by a formative study with eight image-editing practitioners, Atelier composes context-specific, directly manipulable controls that users can refine rather than committing AI interpretations directly to finished edits. In a within-subjects study with 12 practitioners, participants preferred AI-composed controls, described them as supporting creative exploration, and actively refined AI proposals. However, experiences of control were mixed, and interviews highlighted limited insight into why particular controls and values were proposed. Our findings suggest that making AI interpretations actionable through manipulable controls can support exploration and refinement, but actionability alone does not make those interpretations transparent to all users.",
    "published": "2026-10-14T14:39:58Z",
    "updated": "2026-10-14T14:39:58Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.20283"
  },
  {
    "id": "2610.22408",
    "title": "ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation",
    "authors": [
      "Tengda Guo",
      "Jiawang Hu",
      "Yifei Tao",
      "Yin Wang",
      "Haotian Hu",
      "Fanyi Wang",
      "Liujuan Tang"
    ],
    "abstract": "Long-horizon GUI agents rely on visual history to maintain task states, but retaining historical screenshots increases visual-token usage and inference costs, while textual summaries can discard critical state information, undermining long-horizon reliability. We propose ECHOES, which leverages training-time privileged information to guide textual history compression and strengthen long-horizon reasoning. Specifically, ECHOES adopts a Compression-Think-Action (CTA) format to recursively update a textual history state and reason. The same model, given privileged multi-image inputs, serves as a teacher that provides dense token-level on-policy distillation on student-generated CTA rollouts. Our Perception-Memory Fidelity (PMF) Gap-guided OPD-RL framework dynamically balances privileged distillation and task-reward optimization, with periodic teacher updates supporting continued improvement. We further introduce ECHOESBMK, a fine-grained diagnostic benchmark derived from real GUI agent failure trajectories to jointly evaluate visual perception and cross-modal state retention. Experiments on four GUI benchmarks and ECHOESBMK demonstrate substantial gains in task performance and memory fidelity. Without retaining historical screenshots at deployment, ECHOES achieves competitive performance with a favorable performance-inference-cost trade-off and exhibits positive zero-shot transfer to unseen visual planning tasks.",
    "published": "2026-10-14T14:39:41Z",
    "updated": "2026-10-14T14:39:41Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22408"
  },
  {
    "id": "2610.20278",
    "title": "A Valid Watermark Is Not a Valid Identity: Spatial-Spectral Adversarial Face Evasion with Watermark Preservation",
    "authors": [
      "Jefferson David Rodriguez Chivata",
      "Davide Ghiani",
      "Simone Maurizio La Cava",
      "Marco Micheletto",
      "Giulia Orrù",
      "Gian Luca Marcialis"
    ],
    "abstract": "Facial image watermarking can support traceability and certification in biometric pipelines, but provenance or manipulation detection alone does not guarantee reliable biometric identity. We introduce a watermark-preserving face evasion attack that targets this gap under a black-box watermarking setting, without access to the watermarking components. The proposed PGD-L_2 attack guides adversarial perturbations with spatial and spectral preservation terms to reduce face-recognition similarity while limiting pixel-level distortion and high-frequency changes that may interfere with hidden watermark cues. Evaluated on controlled facial images with two watermarking schemes, two face-recognition models, and two datasets, the attack achieves evasion rates above 92% at operational thresholds while preserving watermark recovery above 93% for StegaFormer and above 99.7% for FaceSigns, with visual quality above 47dB PSNR at epsilon_2=2.0. These results expose a structural gap in watermark-based facial certification: a face image can remain watermark-valid and visually faithful while becoming biometrically unreliable.",
    "published": "2026-10-14T14:37:52Z",
    "updated": "2026-10-14T14:37:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20278"
  },
  {
    "id": "2610.20274",
    "title": "Resolution Allocation with Learnable Resizing and Spectral Filter Parameterization",
    "authors": [
      "Wei Wu",
      "Eric C. Larson"
    ],
    "abstract": "Learnable downsampling and spectral-domain filter parameterizations have each made convolutional networks more flexible, but their interaction has not been systematically examined. We bridge this gap by examining convolutional kernels learned in the spatial and spectral domains, together with learned downsampling ratios under a cropped resizing implementation. We find that spectral and spatial kernels respond differently to learned resolution allocation, with larger gains for the spectral kernel. We observe this consistently on three datasets (EuroSAT, CIFAR-10 and STL-10) and at two model sizes (differences in accuracy gain of +0.013 to +0.028 on held-out test sets). Part of this difference reflects the greater gain of the spectral kernel from retaining more spatial area, but the difference remains positive when total retained area is matched. This pattern is observed across datasets and model sizes, although its magnitude and dependence on the complexity budget vary with model size and the resizing implementation.",
    "published": "2026-10-14T14:35:28Z",
    "updated": "2026-10-14T14:35:28Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20274"
  },
  {
    "id": "2610.20272",
    "title": "CSWBench: Evaluating Context-Sensitive Code-Switching in Creative Writing",
    "authors": [
      "Zewen Jiang",
      "Yahan Li",
      "Chenlu Guo",
      "Diana Inkpen",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Large language models (LLMs) have demonstrated multilingual capabilities across diverse language generation and understanding tasks. Yet effective code-switching requires more than multilingual proficiency: models must decide when, where, and why to switch languages in ways that fit the surrounding context. This context-sensitive ability remains insufficiently evaluated. We introduce CSWBench, a benchmark for evaluating context-sensitive code-switching in creative writing through two complementary settings: Focused Narrative and Extended Narrative. We further propose CSWEval, a theory-informed framework with two complementary levels: event-level evaluation of Licensing, Contextual Appropriateness, and Functional Gain, and whole-text evaluation of task-specific quality---overall literary and narrative quality in Focused Narrative and quality emphasizing multilingual organization in Extended Narrative. Evaluating twelve LLMs, we find that models exhibit meaningful but uneven code-switching competence across narrative contexts. Model differences are particularly pronounced in multilingual literary integration, while multilingual-focused dimensions show stronger difficulty effects overall than the general narrative dimensions; narratively salient switches are associated with stronger contextual and functional realization; and event-level CS quality is moderately associated with whole-text performance.",
    "published": "2026-10-14T14:33:48Z",
    "updated": "2026-10-14T14:33:48Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20272"
  },
  {
    "id": "2610.20264",
    "title": "FUSE: Fairness-aware Update Screening against Byzantine Exploitation in $q$-Fair Federated Learning",
    "authors": [
      "Tiantong Sun",
      "Jinlin Liu",
      "Xingru Wei",
      "Zequan Fang",
      "Wei Chen",
      "Qiang Yang",
      "Xiaojin Zhang"
    ],
    "abstract": "Client-level fair federated learning, in the form of $q$-fair federated learning ($q$-FFL), agnostic federated learning, or tilted empirical risk minimization, has emerged as an attractive solution to equalize utility across heterogeneous clients. This paradigm grants high-loss clients greater relative influence, while a central server aggregates their loss-weighted updates into a single shared model. Yet, the Byzantine robustness of $q$-fair federated learning has been largely neglected, leaving the server unable to tell legitimate fairness-induced amplification from malicious update scaling. To address this critical gap, we formalize the problem of Byzantine-robust $q$-fair federated learning under an \\emph{update-only interface}, in which the server observes nothing but the fairness-scaled client updates. Our analysis under shared class-conditional label skew shows that fairness scaling preserves the nonnegative class-mixture structure of honest updates, while replacing their unit-sum constraint by a client-dependent radial scale. Moving beyond magnitude-based screening, we show that this warped geometry supplies two complementary tests, one radial and one structural, that a single norm cannot provide. We then introduce FUSE, a structure-aware robust aggregator that uses a small trusted labeled dataset for coefficient recovery, scale and cone-consistency screening, and post-screening step-size control. Across four benchmarks and seven Byzantine attacks, FUSE improves seed-wise worst-attack accuracy over the strongest baseline on each benchmark by 3.9--30.1 percentage points, while largely preserving the influence of the high-loss honest clients that fairness is meant to protect.",
    "published": "2026-10-14T14:29:48Z",
    "updated": "2026-10-14T14:29:48Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20264"
  },
  {
    "id": "2610.20261",
    "title": "Harness Policy Distillation: Aligning Agent Policies with Runtime Semantics",
    "authors": [
      "Junze Zhu",
      "Weihao Chen",
      "Zhiyang Zhou",
      "Zhen Wu",
      "Xinyu Dai"
    ],
    "abstract": "Deploying a general-purpose model as an agent means running it inside a product-specific runtime harness that decides which actions are executable, how state advances, and when the loop may terminate. Ordinary trajectory supervision shows which action was taken but leaves the runtime semantics behind that action implicit. We introduce Harness Policy Distillation (HPD), which makes these runtime control semantics an explicit training target alongside actions to align the harness policy. HPD replays reference trajectories through the harness to recover the runtime semantics that are implicit in ordinary trajectory data, and represents them as control documents at each model-call boundary. These documents provide privileged information for a teacher to generate actions, while harness verification ensures that the resulting targets are executable under the runtime contract. We jointly train a shared model on the runtime semantics recovered from control-state privileged information and native history, thereby internalizing these semantics into the model policy. At deployment, the trained model uses the original harness interface without requiring the control document or any additional supplement. On TRAJECT-Bench with the Pi harness, Qwen3-8B trained with HPD reaches 22.98% autonomous task success and 49.23% runtime compliance, against 3.09% and 19.90% for the unadapted model. Harness-verified teacher actions substantially improve the native deployment policy, while joint control-state supervision provides further gains in task completion and runtime compliance. HPD turns executable runtime semantics into dense supervision for learning harness-compatible actions at each decision boundary.",
    "published": "2026-10-14T14:28:02Z",
    "updated": "2026-10-14T14:28:02Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20261"
  },
  {
    "id": "2610.18613",
    "title": "Does self-distillation improve reasoning?",
    "authors": [
      "Jason Ken Adhinarta",
      "Raina Wu",
      "Ashutosh Sharma",
      "Avinash Balakrishnan",
      "Rameswar Panda",
      "Polina Golland",
      "Yoon Kim",
      "Zhang-Wei Hong"
    ],
    "abstract": "Self-distillation is an emerging approach that trains a model to imitate its own predictions when conditioned on privileged information, such as correct answers or environmental feedback. Recent methods have reported better sample efficiency and generalization than reinforcement learning (RL), but it remains unclear whether these gains extend beyond in-distribution evaluations and whether they stem from privileged distillation. In this paper, we revisit two representative methods, Self-Distillation Policy Optimization (SDPO) and On-Policy Self-Distillation (OPSD), across code, science, tool use, and math reasoning tasks. We find that their reported gains do not consistently generalize to unseen problems and are largely explained by overfitting or transferring existing reasoning behavior, rather than effectively using privileged information. Moreover, self-distillation gradients show weak alignment with policy gradients that directly optimize expected reward, questioning whether they provide an effective direction for policy improvement. Our experiments across Qwen3 models (1.7B-14B) and OLMo-3-7B suggest that effectively leveraging privileged information to improve reasoning remains an open challenge. Our code is available at https://github.com/sleepypandu/does-sd-improve-reasoning",
    "published": "2026-10-13T15:59:36Z",
    "updated": "2026-10-13T15:59:36Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18613"
  },
  {
    "id": "2610.18612",
    "title": "Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications",
    "authors": [
      "Yang Luo",
      "Tiantian Ji",
      "Zifeng Kang",
      "Yucheng Wang",
      "Yong Liu",
      "Zhiyi Yin",
      "Xinran Liu"
    ],
    "abstract": "System One models such as Jev change how software makes decisions by mapping open-ended semantic contexts into structured judgments that directly drive program execution. However, this paradigm introduces a new security risk, which we term Jev Program Decision Hijacking (JPDH): attacker-controlled contexts can redirect program decisions through schema-valid Jev judgments. Existing evaluations focus primarily on model-level attacks or predefined injection channels, leaving attack reachability and downstream security consequences in real-world Jev applications underexplored. In this paper, we present JevProbe, the first automated framework to evaluate JPDH by tracing adversarial influence from reachable context surfaces through program-consumed decisions to downstream security consequences in real-world Jev applications. Our key insight is that application logic maps diverse Jev judgments to observable decisions, enabling systematic, program-grounded attack evaluation. Across 228 popular real-world Jev applications and 2,273 test cases, 81.5% exhibit decision flips, of which 98.6% lead to potential downstream security impacts. Compared with the strongest adapted baseline, JevProbe improves macro-average Decision Flip Rate (DFR) by 50.4 percentage points, while existing defenses offer limited protection. We further construct JevProbeBench to support systematic evaluation of JPDH in real-world Jev applications. We have responsibly disclosed our findings to Jev application maintainers, pending their responses. The source code of JevProbe and the JevProbeBench dataset are publicly available on GitHub (https://github.com/xiaoxiaohg8d/JevProbe-).",
    "published": "2026-10-13T15:59:31Z",
    "updated": "2026-10-13T15:59:31Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18612"
  },
  {
    "id": "2610.18610",
    "title": "Jev-ToM: Evaluating Theory of Mind in Typed Decision Models",
    "authors": [
      "Kawai Chung",
      "Chunkit Chan",
      "Yuxuan Liu",
      "Yauwai Yim",
      "Xi Yang",
      "Wenbin Hu",
      "Huihao Jing",
      "Chiu Yeung Tang",
      "Changxuan Fan",
      "Ki Sen Hung",
      "Tsun On Kwok",
      "Haoran Li"
    ],
    "abstract": "Dialogue and collaborative assistants repeatedly judge what a partner knows, believes, or intends. Typed decision models offer a potential alternative to generative large language models for bounded Theory of Mind (ToM) selection. We present Jev-ToM, comparing five typed decision models and seven generative baselines on 11,117 English text questions from nine ToM benchmarks across six capability groups. TypeSafe Jev reaches 73.2% source-balanced accuracy including native controls and ranks first or second across all six capabilities, leading beliefs, goals/desires/intentions, and emotions. Other typed models show distinct strengths across tasks. Separate resource comparisons suggest that Jev could reduce the cost and waiting time of repeated ToM selection. Confidence-based selection remains benchmark-dependent, and supplied reasons can repair errors or overturn correct answers depending on their attachment. Candidate expansion reveals distinct selection and output-validity problems. Related-question cues account for most of Jev's downstream gains, with task-dependent effects from predicted states. The findings motivate testing Jev as a ToM selection component in assistants, with task-specific confidence calibration, candidate design, and output validation as integration priorities.",
    "published": "2026-10-13T15:59:00Z",
    "updated": "2026-10-13T15:59:00Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18610"
  },
  {
    "id": "2610.18609",
    "title": "DPOison-VL: Clean Preference Poisoning in Vision-Language Direct Preference Optimization",
    "authors": [
      "Chengtao Jian",
      "Kai Yang"
    ],
    "abstract": "Direct Preference Optimization (DPO) has become a widely adopted approach for aligning vision-language models (VLMs), yet the security of multimodal preference data remains largely unexplored. Existing preference poisoning attacks either corrupt explicit supervision signals or require visible triggers, making them detectable under human inspection. We introduce DPOison-VL, the first clean preference poisoning attack against VLM-DPO, which manipulates model alignment solely through imperceptible perturbations on a small fraction of training images, while leaving all prompts, responses, and preference annotations semantically intact. We formulate poison construction as a bilevel optimization and derive a gradient alignment surrogate that efficiently steers image perturbations toward the attacker-specified preference. We further introduce a preference displacement score for principled poison selection with provable first-order optimality under a fixed poison budget, and derive a sufficient condition for preference inversion. Extensive experiments across diverse attack tasks, different VLM architectures and scales, and baseline comparisons demonstrate that DPOison-VL achieves up to 98\\% ASR with only 2\\% poisoned data and exhibits cross-model transferability, while largely preserving clean accuracy and general utility. Our findings reveal a critical vulnerability in VLM-DPO, where imperceptible image perturbations in preference training data can silently redirect alignment.",
    "published": "2026-10-13T15:58:58Z",
    "updated": "2026-10-13T15:58:58Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18609"
  },
  {
    "id": "2610.18607",
    "title": "Recasting DiT for Extreme Image Compression with Hierarchical Visual Priors",
    "authors": [
      "Yunuo Chen",
      "Jingnan Gao",
      "Bing He",
      "Jinjing Zhao",
      "Chuqin Zhou",
      "Xiaoyue Ling",
      "Li Song",
      "Guo Lu",
      "Wenjun Zhang"
    ],
    "abstract": "Pretrained diffusion models provide powerful generative priors for extreme image compression, but their stochastic, iterative generation processes are not designed to decode compressed representations directly. We present PrismCodec, which recasts a pretrained Diffusion Transformer (DiT) as a bitstream-grounded one-step generative decoder. PrismCodec uses the decoded representation in two complementary roles: a projected codec state defines the starting state for generation, while hierarchical visual priors derived from the same decoded latent provide semantic and structural guidance. To bridge the gap between stochastic, iterative generation and deterministic one-step decoding, we develop a progressive adaptation strategy. We first learn codec-conditioned transport from a noisy neighborhood centered on the codec state, distill it into a one-step mapping, and finally anneal the source perturbation to zero during end-to-end optimization. The resulting decoder reconstructs deterministically from the received representation without additional conditioning bits. Across Kodak, CLIC, and DIV2K, PrismCodec consistently improves rate-perception performance over prior generative codecs, achieving BD-rate reductions of 70-75% in LPIPS and 75-81% in DISTS over StableCodec. Code will be released upon acceptance.",
    "published": "2026-10-13T15:58:40Z",
    "updated": "2026-10-13T15:58:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18607"
  },
  {
    "id": "2610.18606",
    "title": "Beyond Answer Voting: Fine-Grained Correction of LLM Reasoning through Graph Alignment across Sampled Traces",
    "authors": [
      "Haotian Liu",
      "Yingjian Chen",
      "Xiaohang Xu",
      "Lang Huang",
      "Yusuke Iwasawa",
      "Yutaka Matsuo",
      "Irene Li"
    ],
    "abstract": "Large language models increasingly tackle tasks that require multi-step reasoning, where errors in intermediate claims can affect the final answer. Self-consistency (SC) improves reasoning by voting over sampled final answers, but its vote leaves intermediate disagreements unresolved. To address this problem, we introduce DDRG (Disagreement-Driven Verification Guided by Reasoning Graphs), a framework for selective correction from a frozen bank of reasoning traces. Our insight is that graph alignment can expose claim-level disagreements and provide correction evidence without expanding the sampled trace bank. DDRG builds source-grounded claim graphs and sends localized conflicts to an answer-blind verifier. A verifier-supported refutation that reaches the majority answer's supporting path triggers one focused repair; otherwise, DDRG returns the exact SC vote. Experimental results across five benchmarks show that native zero-shot DDRG improves macro-average accuracy over direct answering by 8.65 and 15.83 percentage points for Qwen2.5-7B and Llama3.1-8B. It also exceeds CoT, the evaluated GoT and GoV question-answering adaptations, and SC on this macro metric. DDRG links local verification to selective correction without enlarging the initial candidate bank.",
    "published": "2026-10-13T15:58:02Z",
    "updated": "2026-10-13T15:58:02Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18606"
  },
  {
    "id": "2610.18604",
    "title": "LLM2R: From Large Language Models to 3D Reassemblers",
    "authors": [
      "Zhouhan Zhong",
      "Qiuhong Shen",
      "Xingyi Yang",
      "Jinyi Xu",
      "Xinchao Wang"
    ],
    "abstract": "3D part assembly aims to reconstruct a complete shape from a set of unassembled parts by predicting a rigid SE(3) transformation for each part. Because the placement of a part is rarely determined by its own geometry, the task demands reasoning over the entire part set, and existing methods, which rely on pairwise relations or iterative generation and verification, scale poorly to objects with many parts. We present LLM2R, which casts part assembly as sequence modeling with a pretrained decoder-only large language model (LLM): a Point-BERT encoder and a Q-Former compress each part into a block of geometric tokens, the blocks of all parts are concatenated, and a causal LLM adapted with Low-Rank Adaptation (LoRA) processes the sequence in one forward pass. Causal attention, however, lets the hidden states of a part observe only the parts that precede it. LLM2R therefore appends a block of learnable summary tokens after the last part: these tokens follow every part, so their states aggregate the whole assembly at a constant token cost, and a part-aware pose head fuses each part's states with them before predicting its rotation and translation. One architecture thus handles semantic and geometric assembly and predicts all poses in a single non-autoregressive pass. LLM2R achieves the highest part accuracy and success rate on all three PartNet categories, the best rotation error, translation error, and part accuracy on PartNeXt, and the lowest translation error and fastest inference on Breaking Bad, where only a fracture-specialized method is more accurate. Its advantage grows with the number of parts: at 100 parts it exceeds GARF by 33.5 points in part accuracy on Breaking Bad and Assembler by 29.1 points on PartNet, and it transfers zero-shot to unseen categories with more than 16 points higher part accuracy than the strongest of three baselines.",
    "published": "2026-10-13T15:57:41Z",
    "updated": "2026-10-13T15:57:41Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.18604"
  },
  {
    "id": "2610.18603",
    "title": "AgentStripes: An Evidence-Graded Maturity Model for AI Agents",
    "authors": [
      "Nutan Kumar Naik",
      "Vijay Prasad Poudel",
      "Aditya Kumar Saroj",
      "Saurav Samantray",
      "Abhishek Patel"
    ],
    "abstract": "Benchmarks report what an Artificial Intelligence (AI) agent can do on a task suite, but not whether one released version has been engineered with the controls that make it reliable, safe and observable, or how strongly that is shown. This paper proposes AgentStripes, an evidence-graded maturity model for AI agents. It defines levels (0 to 7 stripes), process areas (12 areas holding 40 capabilities), three gates (basic, safety, proof) that hold an agent at a level however high its score, and evidence grades E0 to E5. Each applicable capability receives a rating from 0 to 3 and a separate evidence level; these are combined into a credit, aggregated into a severity-weighted score and converted into stripes that the gates limit. Instruments gather evidence, language-model judges interpret it under explicit criteria, and the arithmetic is deterministic. The model is compared with standards at topic level without a claim of conformance, and an unexecuted validation protocol is specified. An empirical evaluation (exploratory, non-confirmatory) of 30 public Python agent repositories, with static evidence only, is a demonstration and not a validation: static evidence caps every final stripe at 2, 26 repositories end at one stripe and 4 at two, and this distinction is unreliable, since re-judging changed the final stripe of 4 of 22 repositories (engine, dossier and panel changed), whereas none of 8 panel-only repeats, all at stripe 1, changed. The parameters are expert conventions without outcome based calibration, and the stripes have not been shown to predict reliability or safety.",
    "published": "2026-10-13T15:57:28Z",
    "updated": "2026-10-13T15:57:28Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.18603"
  },
  {
    "id": "2610.18602",
    "title": "Auditing Future-Memory Use in Point-in-Time Language Agents",
    "authors": [
      "Rongtian Ye"
    ],
    "abstract": "Point-in-time (PIT) agents can recall post-cutoff facts even when their external evidence respects a historical cutoff. We examine whether this access predicts evidence gathering in 48 historical company-comparison tasks. Independent closed-book revenue probes identify the better-remembered company for each model on tasks with unequal recall, fixing the predicted direction before agent runs. We then compare paired runs with real or anonymized company identities while keeping external evidence PIT-valid. Both Qwen and DeepSeek recalled future facts, but neither supported the prespecified shift toward the better-remembered company. Qwen's four allocation estimates on 28 unequal-recall tasks were negative, with descriptive intervals spanning zero. A prospective DeepSeek replication showed an inverse pattern across all four metrics on 20 such tasks, with intervals below zero. These estimates remained negative after each company, pair, and future-fact omission, and all four post-hoc max-T-adjusted sign-flip p-values were below .05. In a prospectively specified follow-up, explicit future facts produced small estimated shifts away from the supplied-fact company, with intervals spanning zero, while final choices shifted toward it. The mechanism behind the natural inverse pattern remains unresolved. These findings support separate assessments of memory accessibility, search allocation, and final outputs alongside cutoff checks on external evidence.",
    "published": "2026-10-13T15:56:58Z",
    "updated": "2026-10-13T15:56:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18602"
  },
  {
    "id": "2610.18598",
    "title": "Rethinking Projector Training in Multimodal LLMs",
    "authors": [
      "Fabian Gröger",
      "Naël Ouerghemi",
      "Shuo Wen",
      "Maria Brbić"
    ],
    "abstract": "Multimodal LLMs are typically trained by first aligning a vision encoder with a language model via projector training on large image-caption datasets, followed by joint training of the full multimodal model. Despite its widespread use, the role of the projector training stage remains poorly understood. We find that (i) using only $10$ to $20\\%$ of the data for training the projector already recovers most downstream performance gains, and (ii) projectors trained on different datasets can be linearly interpolated while largely preserving performance. These results suggest that projector training mainly performs a coarse alignment, which many different projectors achieve equally well. Motivated by these findings, we propose PORTAL, a training-free projector initialization that requires neither paired image-caption data nor gradient-based optimization, but only per-modality summary statistics. PORTAL computes an optimal-transport-based map between Gaussian approximations of the vision and language feature distributions on a shared principal subspace, so that the projector training stage can be skipped entirely. Without any paired data, PORTAL matches the standard pipeline trained on 558k image-caption pairs across six LLM backbones, two vision encoders, and 16 benchmarks. It outperforms that pipeline in $3$ of $7$ (vision encoder, LLM) settings and reaches an average $98\\%$ of its score across the other four.",
    "published": "2026-10-13T15:53:53Z",
    "updated": "2026-10-13T15:53:53Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18598"
  },
  {
    "id": "2610.18597",
    "title": "PhysicsSliders: Learning Physical Controls for Audio Foley Generation",
    "authors": [
      "Peiwei Chang",
      "Yongqiang Chen",
      "Yuelan Cheng",
      "Liting Gao",
      "Yishun Lu",
      "Li Zhang",
      "Mark D. Plumbley",
      "Philip J. B. Jackson",
      "Wenwu Wang"
    ],
    "abstract": "Physical properties provide intuitive controls for sounds made by interacting objects. The challenge is to make a generative model respond predictably to these controls, both individually and in combination. We present \\method\\ (PXS), trained on simulated contact sounds with 15 material, geometry and contact parameters. Two separately trained variants accept direct parameter inputs or numerical captions. PXS controls hardness, size, speed and damping, supports room descriptions and produces spectrally distinct outputs at fixed targets. When controlling damping and size together, specifying thickness improves frequency accuracy and joint target delivery. Measurements from real recordings define effective-damping targets, which simulator inversion maps to generation inputs without real-audio fine-tuning. Across 18 impact classes from five real-audio datasets, PXS-Physical follows these targets with mean grouped Spearman correlation $ρ=0.976$ and class-median error 0.094 dex (a factor of 1.24).",
    "published": "2026-10-13T15:53:45Z",
    "updated": "2026-10-13T15:53:45Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18597"
  },
  {
    "id": "2610.18596",
    "title": "ACCRUE: Continual Off-Policy Reinforcement Learning for Robot Foundation Models",
    "authors": [
      "Changyeon Kim",
      "Kimin Lee",
      "Yashraj Narang",
      "Yijie Guo"
    ],
    "abstract": "Reinforcement learning (RL) post-training improves robot foundation models (RFMs) beyond their demonstrations, but real-world deployment demands more: learning new tasks efficiently while retaining previously acquired behaviors. Existing continual RL methods on top of VLAs mitigate forgetting but rely on on-policy updates with limited forward transfer, whereas off-policy methods improve single-task sample efficiency without addressing learner persistence across tasks. We propose ACCRUE, a continual off-policy RL framework that carries lightweight actor and critic networks across tasks, allowing each stage to reuse behavioral and value knowledge acquired through prior RL. The inherited critic adapts only on current-task transitions and guides current-task actor learning, while prior behavior is preserved by distilling the actor toward cached targets on a small number of retained episodes. Fixed visual features keep the inherited learner and its replay compatible with base-policy updates. Across contact-rich assembly sequences in simulation and on real-robot hardware, ACCRUE accelerates subsequent-task learning with near-zero forgetting and significantly reduces real-robot training time by 31.0\\% to 68.5\\%.",
    "published": "2026-10-13T15:53:26Z",
    "updated": "2026-10-13T15:53:26Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18596"
  },
  {
    "id": "2610.17019",
    "title": "Understanding Personalization Gains in Whisper",
    "authors": [
      "Sergei Katkov",
      "Antonio Liotta"
    ],
    "abstract": "Whisper-style ASR models provide strong zero-shot transcription, but their residual errors are not evenly distributed across datasets, recording conditions, and metadata-based groups. We study when lightweight low-rank adaptation (LoRA) improves Whisper and whether observed gains require group-specific adapters. Across Common Voice, LibriSpeech, and VoxPopuli, we compare zero-shot Whisper, pooled LoRA, and group-specific LoRA under matched within-group splits. We find that adaptation is not uniformly beneficial: gains are concentrated in difficult Common Voice groups, are consistent on VoxPopuli, and largely disappear on low-error LibriSpeech. Crucially, pooled LoRA often matches, and sometimes clearly outperforms, group-specific LoRA. Gains over zero-shot should therefore be tested against matched pooled adaptation before being interpreted as evidence of personalization.",
    "published": "2026-10-12T15:59:09Z",
    "updated": "2026-10-12T15:59:09Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.17019"
  },
  {
    "id": "2610.17016",
    "title": "ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty",
    "authors": [
      "Yuyang Dai",
      "Yuting Tang",
      "Futoshi Futami",
      "Takashi Ishida"
    ],
    "abstract": "Evaluating model uncertainty on real-world data is challenging because each instance provides only a single observed label, leaving true conditional class probabilities unknown. To address this, we introduce ProbabilityBench, a benchmark that provides exact, instance-level class probabilities across three simulated text-based domains: peer review, covert information transfer, and credit risk. By explicitly defining the full data-generating process for each environment, we analytically compute both exact class probabilities and Bayes error. Furthermore, we provide a theoretical guarantee that rendering these cases into natural-language memos strictly preserves their underlying generative probabilities. This exactness enables direct measurement of reported probability quality via KL divergence. Across 16 evaluated models, most models on the observed cost-quality Pareto frontiers are decision models, including Jev and Perplexity Decider. Finally, ProbabilityBench serves as a meta-evaluation framework, leveraging known ground-truth values to benchmark the accuracy of standard calibration metrics and Bayes-error estimators themselves.",
    "published": "2026-10-12T15:58:15Z",
    "updated": "2026-10-12T15:58:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.17016"
  },
  {
    "id": "2610.17015",
    "title": "DIME: Scaling Facial Representation Learning via Differential Masked Autoencoding",
    "authors": [
      "Hao Yu",
      "Haoyu Chen",
      "Hui Wei",
      "Yan Jiang",
      "Nicu Sebe",
      "Guoying Zhao"
    ],
    "abstract": "Scaling up data and model capacity has driven substantial progress in visual representation learning. However, conventional pretext tasks exhibit diminishing returns on fine-grained facial analysis. We attribute this to a scaling bottleneck: these tasks model each image's appearance and are dominated by identity, pose, and illumination, so subtle within-identity facial differences contribute little to the training signal. We introduce DIME, a differential masked autoencoder for large-scale facial representation learning. DIME builds on a simple observation: two images of the same person share identity-specific appearance, so their difference exposes facial changes. DIME reconstructs both masked images in an identity-matched pair and, through an Explicit Differential Direction Supervision (EDDS) objective, aligns the direction of their reconstructed difference with the true difference, while source isolation makes each reconstruction depend only on its own image. Shared appearance cancels in this difference, and because EDDS ignores magnitude, subtle facial changes count as much as large pose or illumination changes. DIME uses identity labels only to form pretraining pairs, requires no dense annotations, and learns dense facial representations with emergent part-level semantics. We pretrain DIME on 20 million high-resolution facial images consolidated from existing face datasets. DIME's AU detection performance continues to improve as pretraining data scales from 6M to 20M images, with its BP4D F1 increasing by 5.9 points, while MAE gains only 0.5 points on the same subsets. DIME also outperforms specialized facial methods on AU detection, AU intensity estimation, cross-domain anti-spoofing, landmark localization, head pose estimation, face parsing, and face generation.",
    "published": "2026-10-12T15:57:06Z",
    "updated": "2026-10-12T15:57:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17015"
  },
  {
    "id": "2610.17014",
    "title": "MAGNET: Manifold-Aware Graph Diffusion Network for Connectome Generation",
    "authors": [
      "Protyay Dey",
      "Ayush Roy",
      "Hyuna Cho",
      "Won Hwa Kim",
      "Vishnu Suresh Lokhande"
    ],
    "abstract": "Functional brain connectome represents neural connectivity as a matrix of pairwise interactions between brain regions. Generation of functional connectomes is not only a question of validity; rather, having satisfied the constraints on the correlation matrix, the next step is to recover the class-conditional geometry buried under coarse labels. We propose MAGNET, a Manifold-Aware Graph Diffusion Network which uses a normalized-Cholesky representation of the manifold of correlation matrices that guarantees validity. MAGNET lifts noisy latent states into ROI-level region tokens and performs denoising with a relational inductive bias over brain atlas regions. To deal with structural problems induced by coarse labels, MAGNET employs class-anchored conditioning, amortized structural bridge, and relevance-preserving corruption. Across ABIDE, ADNI, and OASIS-3, MAGNET consistently achieves favorable results compared to previous manifold-aware approaches, demonstrating improvements of 7-21% in class-conditional fidelity ($α,β$-F1) across three cohorts and better sampling efficiency. Moreover, while training only with strict binary labels, MAGNET is capable of maintaining clinical heterogeneity through fine substructure of the connectomes in a zero-shot setting, improving subclass covariance alignment ($λ$-MSE) by over 30%. These results suggest that geometric validity is a necessary but insufficient condition for clinical utility in connectome synthesis. Moreover, efforts in making the diffusion denoising class-conditional manifold aware finds utility beyond the highly curved brain connectome generation as this is a critical problem in various general settings. The code repository can be found at https://github.com/protyayofficial/MAGNET.",
    "published": "2026-10-12T15:56:09Z",
    "updated": "2026-10-12T15:56:09Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17014"
  },
  {
    "id": "2610.17009",
    "title": "MaskSense: Confronting the Visual Exploration Trap in Masked Image Generation",
    "authors": [
      "Yawen Shao",
      "Jie Xiao",
      "Kai Zhu",
      "Yu Liu",
      "Hongchen Luo",
      "Xueyang Fu",
      "Yang Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    "abstract": "Reinforcement learning (RL) has shown strong potential for aligning generative models with human intent, but adapting RL to masked generative models (MGMs) remains largely underexplored. Existing approaches that directly adapt Group Relative Policy Optimization (GRPO) to MGMs leave a foundational conflict unaddressed: MGMs' exploitative decoding nature is inherently at odds with the exploratory diversity that GRPO presupposes. In this work, we reveal a structural decoding bias termed the visual exploration trap: confidence-based sampling trades the exploration of diverse subject realizations for the greedy resolution of low-uncertainty background regions, causing premature collapse of the generative exploration space and starving GRPO of the rollout diversity it depends on. To this end, we propose MaskSense, a novel RL framework for MGMs that confronts the visual exploration trap at both the sampling and optimization stages. Specifically, we introduce a semantic anchored routing sampling mechanism that leverages semantic priors to preserve high-entropy subject token exploration while amplifying intra-group reward variance through exploratory-exploitative routing to yield more discriminative advantage estimates. Furthermore, we design a global entropy transition anchoring strategy to identify the most consequential decoding steps and concentrate gradient updates on them. Extensive experiments on multiple text-to-image benchmarks demonstrate that MaskSense substantially improves upon the base model, with GenEval accuracy improving from 54% to 86% and HPS from 28.89 to 36.39, achieving state-of-the-art performance.",
    "published": "2026-10-12T15:52:58Z",
    "updated": "2026-10-12T15:52:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17009"
  },
  {
    "id": "2610.17002",
    "title": "Governing Copyright Responsibly in the Era of Generative AI",
    "authors": [
      "D. Kochetkov"
    ],
    "abstract": "Large language models are trained on collections that may include scholarly works, while authors generally lack work-level information about whether and how their works were used. This paper asks how copyright governance frames and operationalises the protection of such authors, and what a responsible alternative would require. Forty legislative, judicial and soft-law instruments issued between 2019 and 2026 were coded deductively against a framework derived from Responsible Research and Innovation theory, yielding 1,337 category assignments across 835 segments. The European Union and the United States are the primary cases; the United Kingdom, China and international bodies serve as comparators. Normative orientation and the distribution of responsibility dominate the corpus, while reflexivity is the least represented category and reaches its minimum in the US sub-corpus. Both primary jurisdictions frame protection procedurally rather than as an entitlement, and no instrument in the corpus creates a general author-facing attribution duty for the use of works in AI training. From the coded gaps, the paper derives a six-instrument governance design and a capacity-based allocation of responsibility among developers, publishers, collecting societies, funders, institutions, regulators, and individual authors.",
    "published": "2026-10-12T15:50:05Z",
    "updated": "2026-10-12T15:50:05Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.17002"
  },
  {
    "id": "2610.16998",
    "title": "Glasseek: A Transparent Recipe for Training and Trustworthy Evaluation of DeepSearch Agents",
    "authors": [
      "Cong Pang",
      "Jiaqi Su",
      "Chengrui Wu",
      "Kuihao Yan",
      "Tianrui Zhang",
      "Zixuan Qiu",
      "Chao Lin",
      "Zixiu Lin",
      "Zixuan Chen",
      "Zelin Xiao",
      "Tiankuo Yao",
      "Jiawei Hong",
      "Zixuan Chen",
      "Dan Xu",
      "Lewei Lu",
      "Wenjie Wang",
      "Xin Lou"
    ],
    "abstract": "Deep search enables language agents to solve complex information-seeking tasks through iterative web exploration. However, developing robust open-source agents remains challenging for three reasons. First, opaque trajectory-construction pipelines make training data difficult to audit and reproduce. Second, context compression can create a substantial mismatch between training and inference. Third, agents may retrieve benchmark content from the open web during evaluation, contaminating the results and overstating their performance. To overcome these bottlenecks, we introduce Glasseek, a fully transparent deep search framework spanning the complete development lifecycle, releasing all data, model weights, training recipes, and code. Specifically, for data construction, we establish a verifiable trajectory curation pipeline that systematically generates high-quality exploration paths. For training, we propose Compaction-Managed GSPO (CM-GSPO), which uses the same policy for search and summarization while optimizing only execution sub-trajectories, enabling end-to-end search-policy training across context-compaction boundaries. For evaluation, we conduct the first systematic audit of test-set leakage in open-web agents and release a modular anti-leakage plugin that seamlessly integrates into existing evaluation harnesses. Under this rigorous evaluation protocol, our 9B agent outperforms frontier proprietary agents across almost all deep research benchmarks spanning diverse task types, and achieves the best overall performance among recent open-weight agents, setting a new state of the art at the 9B scale.",
    "published": "2026-10-12T15:48:45Z",
    "updated": "2026-10-12T15:48:45Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16998"
  },
  {
    "id": "2610.16990",
    "title": "TabGift: A Context-Efficient Foundation Model for Tabular Data Generation",
    "authors": [
      "Yu-Sheng Li",
      "Jun-Peng Jiang",
      "Han-Jia Ye"
    ],
    "abstract": "Tabular data generation aims to synthesize realistic samples from limited observations while faithfully capturing the underlying data distribution. Tabular foundation models (TFMs), pretrained on diverse tabular tasks and adapted through in-context learning, have demonstrated strong predictive capabilities, suggesting the potential of extending this paradigm to tabular data generation. However, the strong predictive performance of TFMs often relies on sufficiently large context sets, whereas tabular generation is typically needed precisely when target data are scarce. Extending the foundation-model paradigm to generation therefore requires reliable distribution inference from only a limited context. To this end, we propose TabGift, a context-efficient tabular foundation model enabling both efficient distribution modeling and effective generation from only a few context samples. TabGift maps heterogeneous tables into a shared latent space with a pretrained tabular encoder, where an in-context diffusion model learns to denoise latent samples conditioned on a small set of clean examples. This design transfers generative priors across datasets and enables distribution inference from limited context, while a lightweight dataset-specific MLP decoder maps generated representations back to the original data space. Experiments on 7 classification and 11 regression datasets show that TabGift consistently outperforms representative baselines in synthetic data quality, with particularly strong gains under limited-context settings, while achieving substantially faster adaptation and generation.",
    "published": "2026-10-12T15:43:52Z",
    "updated": "2026-10-12T15:43:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16990"
  },
  {
    "id": "2610.16988",
    "title": "Self-Supervised Learning of Semantically Consistent Visual Features via a Simple 3D Prior",
    "authors": [
      "Sebastian Day",
      "Oisin Mac Aodha"
    ],
    "abstract": "Visual features extracted from vision models like DINOv2 or Stable Diffusion enable high quality semantic correspondence between images. However, such features exhibit documented limitations that hinder accurate correspondence estimation such as the inability to disambiguate the left from right for categories exhibiting symmetries or repeated parts. Previous attempts to improve these features rely on using supervised data such as annotated keypoint pairs or camera pose information, or make restrictive topological assumptions, such as modelling the object of interest as a 3D sphere. We introduce a new self-supervised approach that allows us to learn features for topologically complex object categories using a simple prior. Instead of relying on an expensive instance-level analysis by synthesis pipeline, our approach makes use of contrastive learning and distribution matching at the global dataset-level to learn the coarse shape and appearance of a category. Combined with additional geometric losses, this enables us to replicate the global and local statistics of visual features which match those that are extracted from real images. Quantitative results are presented across several challenging object categories, demonstrating the effectiveness of our approach.",
    "published": "2026-10-12T15:42:59Z",
    "updated": "2026-10-12T15:42:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.16988"
  },
  {
    "id": "2610.16985",
    "title": "AUGUstus: Autonomous Driving VLA Model with Unified Generation and Understanding",
    "authors": [
      "Yuqi Ye",
      "Caigao Jiang",
      "Zhuonan Wang",
      "Congyuan Pei",
      "Chao Qu",
      "Changhao Peng",
      "Junhong Lin",
      "Qize Yu",
      "Zetian Song",
      "Guangzhao Fu",
      "Chongruo Wu",
      "Shiyu Huang",
      "Shuchang Zhou",
      "Honggou Yang",
      "Wei Gao"
    ],
    "abstract": "Vision-language-action (VLA) models show strong potential for end-to-end autonomous driving by leveraging world knowledge and understanding to excel in long-tail scenarios. However, current VLAs have two limitations: 1) Degeneration into vision-action (VA) models. For low latency, regression/flow-based methods directly generate actions but underuse VLM understanding, causing unsafe, unexplainable actions. 2) Autoregressive high latency. Autoregressive methods sequentially generate chain-of-thought (CoT) and action tokens, fully leveraging VLM understanding, but high latency hinders deployment. To enable low-latency deployment while using CoT to assist action generation, we propose AUGUstus, an Autonomous-driving VLA model with Unified Generation and Understanding. We unify diffusion-based action generation and autoregressive CoT understanding in one model, where understanding only serves generation. Joint CoT supervision preserves VLM spatial understanding in shared representation for safer, more accurate trajectories. AUGUstus-mode orders action generation before CoT, so CoT supervises reliable actions during training while inference needs only action output, enabling low latency. AUGUstus-GRPO, a unified GRPO algorithm, jointly optimizes action and CoT, improving action performance. Experiments show AUGUstus achieves 94.6 PDMS on NAVSIMv1 and 90.7 EPDMS on NAVSIMv2, SOTA planning without scorer module. On nuScenes, it achieves average L2 error 0.27 m and average collision rate 0.05%, best among compared methods. To validate AUGUstus practicality, we train on in-house data with 512 NVIDIA H800 GPUs for ~2 days, evaluate on an internal 1,000 km dataset, and preliminarily deploy on a real vehicle, achieving 12 Hz operation. Project page: https://augustus-ad.github.io",
    "published": "2026-10-12T15:42:09Z",
    "updated": "2026-10-12T15:42:09Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16985"
  },
  {
    "id": "2610.16984",
    "title": "From Suboptimal to Optimal: One-Step Latent Flow Policies for Offline Reinforcement Learning",
    "authors": [
      "Shenghua Lu",
      "Zixuan Yang",
      "Rongxu Zhao",
      "Bohao Qu",
      "Jifeng Hu",
      "Hechang Chen"
    ],
    "abstract": "Offline reinforcement learning aims to learn effective policies from fixed datasets without environment interaction. Although generative models such as diffusion and flow matching enhance policy expressiveness, they typically start from uninformative Gaussian noise and generate actions through multi-step iteration, leading to high computational costs and failing to effectively leverage suboptimal trajectories in datasets. We propose MeanFlow2Better (MF2B), which reformulates offline RL as generative decision chunk optimization from current performance status to better performance status in a high-level latent decision space. MF2B maps trajectory chunks to high-level latent decision representations through an encoder, placing generation starting points within a structured decision space sculpted by behavioral data. The model learns a shared conditional mean velocity field in this space, constructing two flow mappings: from Gaussian-Induced Decision Sources toward positive behavioral decision regions, and from suboptimal decisions toward high-value decision regions. Both flow mappings complete decision refinement through one-step ODE integration over the unit time interval $Δt=1$, requiring neither multi-step iterative sampling nor backpropagation through time. Furthermore, we propose hierarchical chunk-level advantage to guide the flow direction toward high-return regions, where the high-level decisions cover multiple low-level actions, leading to sequence length compression from $T$ to $K \\approx T/H$ and significantly lower computational overhead. On the D4RL Gym-MuJoCo benchmark, MF2B achieves an average score of 90.91, matching or surpassing strong baselines.",
    "published": "2026-10-12T15:41:40Z",
    "updated": "2026-10-12T15:41:40Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16984"
  },
  {
    "id": "2610.16980",
    "title": "PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models",
    "authors": [
      "Max Achterweust",
      "Stefan Groot Nibbelink",
      "Vincent J. de Beer",
      "Stefan Schipper",
      "Zeynep Yüksektepe",
      "Pedro Andrade da Silva",
      "Aurelia Peppelaar",
      "Martijn J. van der Willigen",
      "Christophe B. Minkenberg",
      "Robert F. van der Willigen"
    ],
    "abstract": "Artificial Intelligence (AI) models are increasingly developed, published and used across scientific fields. Researchers, students and industry professionals who want to apply these models to their own research questions often lack the programming and data science expertise to do so. Existing guidelines cover single steps, but not the route from a published model to working predictions on one's own data. Here we present the hands-on workflow PRAISE, a Practical, Reproducible AI-model Implementation for Science and Education, that helps non-programmers implement published AI models step by step. Because implementations rarely work the first time, PRAISE anticipates common failures and provides a fallback route for each. As a proof of principle, three BSc chemistry students and their tutor applied PRAISE without prior programming or data science knowledge. They reproduced, validated and extended a state-of-the-art model that predicts enzyme-substrate interactions. This shows that with PRAISE, implementing an AI model from the literature becomes a learnable skill, one that turns non-programmer scientists from users into evaluators and improvers of AI models.",
    "published": "2026-10-12T15:39:12Z",
    "updated": "2026-10-12T15:39:12Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.16980"
  },
  {
    "id": "2610.15715",
    "title": "History Replays Itself: Unleashing Long-Context Capability in Linear Attention",
    "authors": [
      "Li Nanbo",
      "Firas Laakom",
      "Yilan Zhang",
      "Piotr Piękos",
      "Yimeng Chen",
      "Liangyu Wang",
      "Yifan Xu",
      "Mateusz Ostaszewski",
      "Dandan Guo",
      "Wenyi Wang",
      "Yanning Dai",
      "Yuhui Wang",
      "Jürgen Schmidhuber"
    ],
    "abstract": "Linear attention promises the efficiency needed for long-context language modelling, yet its fixed-size recurrent state must simultaneously support ongoing computation and preserve information from an ever-growing history. This coupling has reinforced a prevailing view that the state's memory capacity defines the model's long-context capability. We challenge this presumed ceiling: \\emph{recurrent computation need not bear the full burden of long-term storage}. We introduce NoteBank, a sparse episodic memory that archives selected text before future queries are known, uses the backbone's native features for writing and addressing, and reads retrieved evidence through its native forward computation via replay. This \\emph{training-free, plug-and-play} interface requires no external embedding model, separately trained retriever, or separate neural reader. At one million tokens, it raises Gated DeltaNet's mean accuracy across six RULER retrieval tasks from 1.7% to 70.3%, with no observed significant retrieval degradation from 4K to 1M tokens. This recovery adds $\\leqslant$0.025% to analytical FLOPs, with persistent context storage approximately 1/2,600 that of a Transformer's full MHA KV cache at matched width, depth, and precision. Experiments extend from three 1.3B recurrent backbones to Mamba-2-8B and post-trained Qwen3.5-9B, demonstrating gains on LongBench v1/v2 and MemoryAgentBench. Together, these results show that sparse evidence storage and native replay can substantially expand the long-context capability of pretrained linear attention models while retaining the efficiency of recurrent computation.",
    "published": "2026-10-11T15:58:04Z",
    "updated": "2026-10-11T15:58:04Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.15715"
  },
  {
    "id": "2610.15714",
    "title": "MedHarnessBench: A Unified Benchmark for Healthcare Agent Evaluation",
    "authors": [
      "Rui Tang",
      "Hongqiu Wang"
    ],
    "abstract": "Healthcare agents must transform longitudinal clinical evidence into reliable actions through heterogeneous tools and stateful workflows, conditions under which model-centric systems may lose context, misuse tools, fail to verify consequential transitions, or cross authorization boundaries. Existing medical-agent benchmarks primarily emphasize terminal task outcomes, making it difficult to determine whether execution failures arise from the agent model, the runtime harness, or their interaction. We present the Medical Harness Protocol, an outcome-preserving framework that independently evaluates seven healthcare-specific process dimensions: Care Action Fulfillment, Clinical Resource Competence, Patient-Evidence Alignment, Clinical Workflow Continuity, Clinical Auditability, Closed-Loop Verification, and Clinical Conduct Boundaries. A normalized intervention trace further tracks whether runtime support is available, activated, delivered, adopted by the agent, and propagated into subsequent behavior. We instantiate the protocol as MedHarnessBench, comprising 342 executable tasks across FHIR/EHR operations, healthcare-administration interfaces, and multimodal clinical tools. Across more than 16,000 controlled task executions, MedHarness yields broad improvements in terminal task success, intermediate subtask completion, and healthcare-specific process quality. We further evaluate MedHarness against multiple general-purpose harnesses and use controlled single-fault perturbations to verify the sensitivity and discrimination of the seven-dimensional evaluation. These results demonstrate that healthcare-specific runtime support can substantially improve both task completion and execution quality, while revealing failures that terminal outcomes alone cannot capture. Code and resources are available at https://github.com/Tomry1114/Awesome-Agent-Harness-for-Healthcare.",
    "published": "2026-10-11T15:57:52Z",
    "updated": "2026-10-11T15:57:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15714"
  },
  {
    "id": "2610.15711",
    "title": "What DNA Foundation Models Learn Beyond Sequence Composition",
    "authors": [
      "Vincenzo Yuto Civale",
      "Andrew David Bagdanov",
      "Alberto Magi"
    ],
    "abstract": "Do genomic foundation models (FMs) provide predictive information beyond simple sequence composition? We evaluate frozen representations from five DNA FMs against normalized k-mer frequencies across 57 genomic classification datasets and two exploratory gene-expression regression tasks. Simple k-mer features remain competitive with most models, whereas NTv3 shows a consistent advantage; the ranking is robust to globally fixed and multi-scale k-mer baselines and alternative downstream probes. To test incremental predictive utility directly, we compare global 6-mer features with their concatenation with each FM embedding under a matched Random Forest protocol. NTv3 improves 46 of 57 datasets (mean $Δ$MCC = +0.072), while Caduceus provides smaller gains and the other models do not improve mean MCC. We separately decompose embeddings into a component linearly predictable from 6-mer frequencies and a ridge residual, finding that linear recoverability does not reliably indicate downstream utility. Exact 6-mer-preserving shuffles further reveal task-relevant sequence-order sensitivity, most pronounced for NTv3, although order sensitivity alone does not guarantee predictive improvements. Our results establish compositional features as essential controls and offer complementary diagnostics for evaluating the added value of frozen genomic representations, without making claims about fine-tuning capacity.",
    "published": "2026-10-11T15:51:29Z",
    "updated": "2026-10-11T15:51:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15711"
  },
  {
    "id": "2610.15710",
    "title": "Suggested Is Not Superseded: A Pre-Registered Evaluation of a System-One Model as a Memory-Retirement Gate",
    "authors": [
      "Xupeng Chen",
      "Chenqian Le"
    ],
    "abstract": "Long-term memory for assistants needs a gate that decides when a new utterance retires an old stored claim. Benchmark labels for this step mark a pair as changed or not, so they cannot tell a gate that acts on established change from one that acts on a hint. We write a task contract that separates the two (SUPERSEDED vs. NEEDS-CONFIRMATION vs. COMPATIBLE), label 500 test pairs built from STALE (change pairs plus same-user controls) with three LLM annotators and two human adjudicators (one author and a second annotator; provenance reported), and evaluate Jev, a typed \"System One\" decision model, under pre-registered hypotheses. Of the 179 test pairs STALE marks as changed, 72 meet the contract's bar for an established change. Jev never retired a claim on 141 same-conversation non-changes. Its failure is premature retirement: the binary gate retires 39.2% of claims whose change is only suggested. A three-way decision cuts this to 15.5% at a 15.3-point detection cost, which misses our pre-registered 10-point budget, and it lands on the binary gate's own threshold frontier; these verdicts hold under three readings of the gold labels. On a held-out vault scored against a second annotator's labels, a cascade that escalated uncertain cases to a reasoning model and looked best on development data was indistinguishable from simply raising the threshold (premature retirement 26.8% vs. 6.5% on dev). Part of the gap comes from the gold labels: relative to that annotator's reading, LLM-majority gold shares most of its errors with a same-family escalation model, and an identity for binary labels says how much such shared errors hide. The rest is small-sample selection on development data. For builders this means a binary score should not be wired to delete: route suggested changes to pending evidence, and do not trust a cascade selected on development data of this size.",
    "published": "2026-10-11T15:48:16Z",
    "updated": "2026-10-11T15:48:16Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15710"
  },
  {
    "id": "2610.15708",
    "title": "SpecForge: Recursive Self-Improvement for Coding Agents via Behavioral Specifications",
    "authors": [
      "Yutong Cheng",
      "Haifeng Chen",
      "Peng Gao",
      "Wei Cheng"
    ],
    "abstract": "Coding agents based on frozen language models can improve their performance by refining the external context they rely on, without updating model weights. We study recursive self-improvement through behavioral specifications: natural-language code documentation that describes the behavior of program entities and guides agents in generating correct code. We formulate a self-improvement loop in which an agent generates code from its current specifications, evaluates it with execution-verified tests, and refines the specifications based on observed failures. The improved specifications then guide subsequent generation, progressively improving the agent's understanding of the codebase. However, recursive refinement is challenging because program entities are interdependent. Improving the specification of one entity can inadvertently degrade the correctness of others, a phenomenon we call output coupling. This creates a whack-a-mole effect in which local improvements cause regressions elsewhere, preventing consistent progress. We introduce SpecForge, a multi-frontier tree search framework that addresses this challenge with three mechanisms: (i) Pareto-guided state selection preserves complementary specification states and prevents premature commitment; (ii) dependency-constrained entity selection prioritizes callee-before-caller refinement; and (iii) error-diversified expansion explores multiple refinements using different subsets of test failures. On DevEval+, SpecForge achieves the best performance across five backbone models, including a 94.9% solve rate with Claude-4.5-Sonnet and a 5.7-percentage-point average improvement over the strongest baseline. The improved specifications also make the agent better at tasks outside the loop: they transfer to cross-language translation and to new-feature implementation, where they outperform the benchmark-provided requirement documents.",
    "published": "2026-10-11T15:46:22Z",
    "updated": "2026-10-11T15:46:22Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.15708"
  },
  {
    "id": "2610.15705",
    "title": "bharatSetu: a 1M x 22 bridge for indic translation",
    "authors": [
      "Haq Nawaz Malik",
      "Nahfid Nissar",
      "Faizan Iqbal"
    ],
    "abstract": "India's Eighth Schedule recognises 22 languages, yet parallel data is uneven across them, and many language pairs, especially among lower-resource languages such as Bodo, Dogri, Santali and Kashmiri, lack direct bitext. We present BharatSetu 22-Indic 1M, a row-aligned table of 984,764 English sentences, each paired with machine translations into all 22 scheduled languages (21,664,808 Indic cells), generated with the sarvamai/sarvam-translate model family. Because every Indic cell in a row translates the same English sentence, any two columns form a translation pair: 462 directed Indic-to-Indic pairs, or 506 including English, without direct bitext. We call these pivot-derived pairs and propose a confidence layer that lets users choose how strictly each pair is connected. The corpus is machine-generated and not human-verified; quality is expected to vary by language, domain and sentence style, and pivot-derived pairs can inherit errors from both sides. We therefore release BharatSetu as a machine layer and propose a human-correction layer keyed to the same row identifiers, so that each corrected column upgrades every pair that uses it, together with an evaluation protocol. We report no translation-quality results.",
    "published": "2026-10-11T15:39:19Z",
    "updated": "2026-10-11T15:39:19Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15705"
  },
  {
    "id": "2610.15702",
    "title": "RespFocus: Learning Temporal Evidence for Weakly Supervised Respiratory Sound Classification",
    "authors": [
      "Yi Tian",
      "Xiaohuan Chen",
      "Yufei tang",
      "Xinyu Lin",
      "Hongliang Li",
      "Chengbin Hou",
      "Degen Huang",
      "Rongshan Yu"
    ],
    "abstract": "Respiratory auscultation provides a low-cost means of assessing pulmonary function, yet transient crackles and sustained wheezes can be difficult to recognize in noisy clinical recordings. Conventional deep learning classifiers often operate as black boxes, offering limited insight into the temporal acoustic evidence supporting their predictions. We present RespFocus, a weakly supervised framework that uses multiple instance learning (MIL) to learn inspectable temporal evidence from cycle-level labels and integrate it into classification. We also introduce PedResp2026, a multicenter pediatric respiratory sound cohort collected in routine clinical environments with adjudicated cycle-level annotations. In classification experiments, RespFocus achieves four-class Scores of 69.55\\% on public ICBHI 2017 and 72.91\\% on PedResp2026. Evidence diagnostics and matched temporal interventions support the functional contribution of the learned evidence to model predictions. Together, these findings highlight RespFocus's potential as a tool for automated respiratory sound diagnosis.",
    "published": "2026-10-11T15:37:56Z",
    "updated": "2026-10-11T15:37:56Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15702"
  },
  {
    "id": "2610.15699",
    "title": "TabMosaic: Unified In-Context Diffusion for Tabular Generative Tasks",
    "authors": [
      "Jayoung Kim",
      "Sanghyun Hong",
      "Noseong Park"
    ],
    "abstract": "Generative modeling for tabular data has advanced to the point where models can synthesize realistic records, recover missing values, and generate samples conditioned on class labels or observed attributes. Despite recent advances, existing approaches either require table-specific training or restrict in-context learning to single-cell prediction. In this work, we formulate these tabular generative tasks as a single problem: modeling the joint conditional distribution of an arbitrary set of target cells given the observed cells of an unseen table. To this end, we turn to diffusion, whose denoising objective is defined jointly over all target cells rather than one cell at a time. Under the pretraining distribution, this objective is minimized by the posterior predictive distribution over the target set. Building on this, we propose TabMosaic, a unified in-context diffusion model for generating mixed-type target cells in unseen, potentially incomplete tables without table-specific training. We further show that its pretraining objective bounds the conditional negative log-likelihood and the divergence from the posterior predictive for arbitrary target sets, extending the Bayesian account of in-context learning from a single-value prediction to joint multi-cell generation. Across 48 real-world tables, TabMosaic ranks first on all evaluated generative tasks against 20 baseline approaches",
    "published": "2026-10-11T15:35:39Z",
    "updated": "2026-10-11T15:35:39Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15699"
  },
  {
    "id": "2610.15691",
    "title": "FARL: A Fully Automated Pipeline of RL Interface and Solver Design",
    "authors": [
      "Tianyu Jin",
      "Liuyu Xiang",
      "Chaowen Yang",
      "Xingyang Chang",
      "Pei Pei Li",
      "Zhaofeng He"
    ],
    "abstract": "Existing reinforcement learning (RL) largely focuses on optimizing learning algorithms within a pre-defined task formulation, while applying RL to new tasks still relies heavily on human expertise to design the learning pipeline: what an agent observes, how it is rewarded, which algorithm it uses, and how training is configured. Automating these choices is challenging because they are tightly coupled. We introduce FARL (Fully Automated Reinforcement Learning), a framework that automates RL design by jointly searching observation and reward programs, learning algorithms, and training settings. FARL uses training statistics and observed behavior to diagnose failures, propose changes, and test whether they improve learning. Its search preserves diverse candidates and the controls needed for these tests, using a staged budget to screen designs before investing in longer training. Experimental memory records each finding together with its conditions, so an unsuccessful component can be reconsidered in a different combination. Across expert-withheld and expert-available settings, FARL outperforms the evaluated automated baselines on challenging navigation, locomotion, and manipulation tasks. On Adroit Hand Relocate, FARL achieves 97.1% success at 5M training steps per policy, compared with 0% for Eureka and LiMEN and 1.0% for native Proximal Policy Optimization (PPO) under the same policy training budget.",
    "published": "2026-10-11T15:22:18Z",
    "updated": "2026-10-11T15:22:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15691"
  },
  {
    "id": "2610.15685",
    "title": "Radioactive Feedback: Tracing Models Trained by Label-Only LLM Supervision",
    "authors": [
      "Yuejia Li",
      "JunHeng Li",
      "Hao Wu",
      "Ke He",
      "Mang Ye"
    ],
    "abstract": "Conventional distillation transfers capability through teacher-generated demonstrations. LLM-as-a-Judge knowledge distillation offers a distinct and increasingly practical alternative. In the label-only variant studied here, the student generates every response and improves from scalar scores alone. Prior work shows that this non-demonstrative feedback can improve student capability, but it creates a fundamentally different provenance problem. No teacher-generated answer enters the student's training set, so any evaluator-specific trace must pass through a low-bandwidth reward signal rather than copied text. Existing watermarks and distillation detectors do not cover this score-only channel. We introduce Radioactive Feedback, which encodes a registered pattern of behavioral preferences in the rewards themselves. The evaluator applies bounded pointwise adjustments to quality-qualified responses, allowing repeated optimization to transfer the pattern to a student trained by another party. Experiments on code and mathematics show that the registered preferences transfer through scores alone and across datasets, enabling black-box detection against a fixed reference pool.",
    "published": "2026-10-11T15:09:58Z",
    "updated": "2026-10-11T15:09:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15685"
  },
  {
    "id": "2610.15681",
    "title": "Rethinking Human Intent-to-CAD: Parametric CAD Model Generation via Cooperative Multi-Task Alignment and Spatial-Aware Reinforcement Learning",
    "authors": [
      "Qingwang Zhang",
      "Jiahao Li",
      "Xiangdong Zhou"
    ],
    "abstract": "Parametric Computer-Aided-Design (CAD) modeling from human intent remains challenging, particularly during the conceptual design stage, where design goals are expressed through incomplete and unstructured modalities (e.g., hand-drawn sketches and textual descriptions). In this work, we rethink the human intent-to-CAD pipeline and propose a unified method that directly maps multi-level human intents to executable codes, without assuming the prior existence of target CAD models. To support our study, we construct HiCAD, the first large-scale dataset aligning hand-drawn sketches, textual descriptions, and parametric CAD codes. Based on this, we introduce HiCAD, a two-stage framework comprising Cooperative Multi-Task Alignment to bridge the representational gap between heterogeneous inputs, and Spatial-Aware Reinforcement Learning to enforce geometric and topological consistency. Extensive experiments demonstrate that our method significantly outperforms existing baselines across multiple tasks, validating its effectiveness and robustness in transforming heterogeneous human intents into high-fidelity parametric CAD models. Our project page: https://zqwlearning.github.io/HiCAD.",
    "published": "2026-10-11T15:05:49Z",
    "updated": "2026-10-11T15:05:49Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15681"
  },
  {
    "id": "2610.15677",
    "title": "Knowledge Interaction in Hypernetwork-based Continual Learning: Conflict and Composition",
    "authors": [
      "Jiaqi Zheng",
      "Yi Hu",
      "Yadong Mu",
      "Muhan Zhang"
    ],
    "abstract": "Continual learning aims to adapt pretrained large language models (LLMs) to evolving data while preserving their pretrained capabilities. A central challenge is catastrophic forgetting: adaptation to new data can impair performance on previously learned knowledge. Since continual learning commonly changes model parameters, the model's predictions may draw on knowledge from the base model, the parameter update, and the input context. Understanding how these sources interact is essential: conflicts reveal whether new knowledge can override outdated knowledge, while multi-hop reasoning tests whether new knowledge can be composed with existing knowledge to support generalization. We study these interactions in a hypernetwork-based adaptation framework, where a shared network generates adapters from context, allowing a frozen base model to adapt without task-specific updates. We find that, under knowledge conflict, models preferentially follow the context, and their choices depend more on where knowledge is presented than on its content. We also show that context and adapter knowledge perturb the base model's representations along directions orthogonal to its clean hidden states, enabling us to derive steering vectors that control which source the model follows. In multi-hop reasoning, we find that models fail to reliably compose knowledge across the three sources, with the key breakdown arising from the interaction of the hypernetwork with both the base model and the context. Code and reproduction materials: https://github.com/missswiftie/Knowledge-Interaction-in-CL",
    "published": "2026-10-11T14:57:18Z",
    "updated": "2026-10-11T14:57:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15677"
  },
  {
    "id": "2610.14547",
    "title": "A Self-Defining Operator for Distributed Applications",
    "authors": [
      "Shihang Li",
      "Thomas Anderson",
      "Ratul Mahajan",
      "Simon Peter",
      "Luke Zettlemoyer"
    ],
    "abstract": "To operate distributed applications with high availability, operators must rapidly diagnose and mitigate any incident. LLM-based agents can help, but unlike experienced human operators they do not improve as they handle more incidents. Each investigation starts from scratch, re-deriving likely causes and re-testing hypotheses even when a similar fault was resolved in the past. We present a self-defining operator (SDO) that improves with time by updating its operational behavior and memory. When SDO resolves an incident, it distills that experience into playbooks, which describe reusable diagnostic instructions for future incidents with similar faults, and detectors, scripts that take application telemetry as input and output relevant playbook(s). SDO continuously runs the detectors and invokes LLMs only when one fires, so its token cost scales with incident count rather than with operational time. Across 11 open-source microservice applications, SDO cuts resolution time by 52% on recurring faults while keeping per-incident cost low. SDO is open source at https://github.com/self-defining-systems/sdo.",
    "published": "2026-10-10T04:08:13Z",
    "updated": "2026-10-14T06:00:51Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14547"
  },
  {
    "id": "2610.14544",
    "title": "InfraWorld: Motion-Aware World Modeling for Roadside 4D Occupancy Forecasting",
    "authors": [
      "Songkai Wang",
      "Xiaokai Bai",
      "Lei Yang",
      "Hui-liang Shen"
    ],
    "abstract": "Roadside 4D occupancy forecasting predicts future semantic occupancy in a fixed infrastructure coordinate system. Roadside scenes are globally structured yet locally evolving, requiring comprehensive scene-level context while precisely modeling sparse localized motion. However, existing forecasting paradigms struggle to tackle both requirements. To address this limitation, we propose InfraWorld, a world model formulating roadside occupancy forecasting as selective state evolution. InfraWorld maintains a dense BEV state for the complete scene and persistent motion queries for moving regions, assigning complementary states to global context and local dynamics. Specifically, we propose Dynamic Query Initiation (DQI) to initialize queries in regions supported by motion in the observed history. During rollout, the dense state is updated through Long--Short Temporal Fusion (LST), which combines short-term adjacent-frame continuity with long-term motion trends to preserve stable context while capturing scene evolution. Motion-Aware Query Injection (MAQI) then refines the queries and injects confidence-weighted query information into corresponding BEV tokens, enabling targeted dynamic updates without perturbing global context. Together, InfraWorld concentrates predictive capacity on evolving traffic regions. Extensive experiments on the InfraOcc and Occ3D--nus datasets demonstrate that InfraWorld achieves state-of-the-art performance for roadside 4D occupancy forecasting while retaining its effectiveness under ego-centric settings. Code will be released.",
    "published": "2026-10-10T04:00:44Z",
    "updated": "2026-10-10T04:00:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14544"
  },
  {
    "id": "2610.14542",
    "title": "Are Multimodal Benchmarks Really Useful? Item-Level Multimodal Benchmark Diagnosis via Structure-Response Co-Calibration",
    "authors": [
      "Shiqi Zhang",
      "Weixin Zeng",
      "Ziheng Zhang",
      "Jiuyang Tang",
      "Xiang Zhao"
    ],
    "abstract": "Multimodal benchmarks are central to evaluating whether models can reason over information from multiple modalities. However, existing literature has revealed that some benchmarks may contain shortcut items that can be answered from a single modality or from answer-option regularities alone, thus failing to reflect models' true cross-modal inference ability. Existing methods for assessing benchmarks typically rely either on intrinsic item structure or extrinsic model response behavior, which are not adequate for a comprehensive diagnosis. To fill in this gap, we propose SRCoD, a structure-response co-calibrated diagnosis framework for item-level diagnosis of modality dependence in multimodal benchmarks. SRCoD estimates sample-wise multimodal information structure from benchmark content and target answers, and uses this signal as a soft structural anchor for modality-conditioned item response modeling. The learned model produces a calibrated item-level diagnostic profile that reflects how strongly an item depends on different forms of modality evidence, enabling fine-grained benchmark analysis beyond aggregate accuracy. SRCoD also provides interpretable attribution of the diagnosis results. Extensive experiments under two complementary protocols, i.e., benchmark-refinement oriented validation and human-labeled item validation, demonstrate that SRCoD outperforms state-of-the-art benchmark diagnosis methods.",
    "published": "2026-10-10T03:57:33Z",
    "updated": "2026-10-10T03:57:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14542"
  },
  {
    "id": "2610.14541",
    "title": "GG-Nav: Goal-oriented Grounding Chain-of-Thought Elicits Reasoning in Navigation Foundation Models",
    "authors": [
      "Shaohao Zhu",
      "Wensi Huang",
      "Siqi Zhang",
      "Yuqiang Yang",
      "Meng Wei",
      "Chenyang Wan",
      "Tianle Liu",
      "Tai Wang",
      "Jinming Xu"
    ],
    "abstract": "Emerging strong Vision-Language Models (VLMs) have advanced navigation foundation models. However, these models still have unsatisfactory performance on goal-oriented navigation settings. In this paper, we first conduct a motivating study revealing that the key issue lies in the insufficient utilization of streaming observations and imprecise target localization. To tackle these challenges, we propose GG-Nav, a simple yet effective navigation framework that learns a structured chain-of-thought (CoT) mechanism via supervised fine-tuning to explicitly localize goal-relevant instances, accumulate grounding evidence, and support more reliable decision-making. Specifically, the structured CoT is designed with two key stages: (i) Observation-to-Evidence, which reasons over all intermediate frames between adjacent decision steps to retain useful goal-related evidence; and (ii) Evidence-to-Decision, which integrates the current observation with accumulated evidence to ground the target and support the generation of navigation actions or clarification questions. Extensive experiments show that GG-Nav outperforms the state-of-the-art methods in terms of success rates on the HM3D ObjectNav, VL-LN, and CoIN benchmarks by 3.1%, 16.6%, and 5.3%, respectively. Ablation studies further show that accumulating evidence from intermediate observations reduces evidence-missing failures by 11.6%, while explicit grounding reduces stopping errors by 49.4%. We also deploy GG-Nav on a Unitree Go2 robot, demonstrating its zero-shot generalization capability in unseen real-world environments.",
    "published": "2026-10-10T03:54:19Z",
    "updated": "2026-10-10T03:54:19Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14541"
  },
  {
    "id": "2610.14539",
    "title": "FDE-Bench: Evaluating End-to-End Delivery from Underspecified Real-World Business Requests",
    "authors": [
      "Huaiming Li",
      "Can Huang",
      "Chufan Wu",
      "Danyu Liu",
      "Xiaomin Yuan",
      "Qinze Li",
      "Yui Lo",
      "Wenhui Bai",
      "Qianlong Wang",
      "Zengle Ge",
      "Xiyu Yan",
      "Yuheng Cheng",
      "Jinhui Ren",
      "Guokai Chen",
      "Jiaqun Liu",
      "Haoran Li",
      "Qianhui Liu",
      "Annan Li",
      "Jianmin Wu",
      "Dawei Yin",
      "Dou Shen"
    ],
    "abstract": "Real-world business requests often leave key requirements unstated because frontline practitioners struggle to articulate rules they know from experience. Forward-deployed engineers (FDEs) must elicit these requirements through dialogue and iteratively optimize solutions until they meet customer acceptance criteria. Existing optimization benchmarks typically start from explicit objectives, while clarification benchmarks often introduce information gaps into existing tasks. We introduce FDE-Bench, the first benchmark built from real customer projects to evaluate agents on end-to-end delivery tasks that require interactive requirement clarification and iterative optimization. Its 49 cases span combinatorial optimization and machine learning. Clarification targets are distilled from discussions between frontline practitioners and FDEs. Agents elicit missing requirements from a simulated customer, and case-specific evaluators assess final artifacts against acceptance criteria using customer-accepted FDE solutions as quality references. Across 18 agent configurations, the highest mean delivery score is only 0.5510, compared with an FDE reference of 1.0. The highest delivery success rate (DSR), defined as the fraction of planned runs reaching this reference, is only 6.12%. These results show that reliable FDE-level end-to-end delivery remains out of reach for the evaluated agents on underspecified real-world business tasks. The benchmark project page is available at https://baidubce.github.io/FM-Agent/FDE-Bench/.",
    "published": "2026-10-10T03:53:42Z",
    "updated": "2026-10-10T03:53:42Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.14539"
  },
  {
    "id": "2610.14530",
    "title": "Who to Trust in Multi-Robot Systems: Joint Robot and Object Hypothesis Trust Inference via Neural-Symbolic Cross-Validation",
    "authors": [
      "Ruiyang Wang",
      "Hao-Lun Hsu",
      "Haocheng Meng",
      "Songqiao Xie",
      "Miroslav Pajic"
    ],
    "abstract": "Multi-robot systems (MRS) offer significant advantages over single-robot platforms by enabling information sharing and coordination for different tasks in complex environments. However, reliable cooperation critically depends on inferring trust over both information sources and their reported hypotheses, particularly under partial observability and potential adversarial interference. Existing approaches frequently depend on pre-established trust relationships or side-channel information, which may not be available or reliable in realistic MRS deployments. This work introduces NeST-Bayes, a neural-symbolic framework that jointly infers robot and hypothesis trust using only inter-robot observation consistency, without requiring preassigned robot trust, reputation information, or side-channel identity signals. NeST-Bayes infers instantaneous trust evidence scores for robots and object hypotheses by reasoning over ego-centric relational graphs constructed from cross-robot observation consistency. These evidence scores are accumulated over time through Bayesian updates of Beta-distributed trust beliefs to maintain temporally consistent trust estimates. Extensive evaluations show that NeST-Bayes achieves the highest mean object precision and robot recall across all benchmark settings, and the highest robot precision and object recall in most settings, compared to trust-based methods. Under aggressive optimized attacks, it achieves 98.8\\% robot precision with 93.8\\% recall and 98.3\\% object precision with 95.4\\% recall. In an occlusion-rich Webots warehouse, it maintains 92.5\\% robot precision with 92.0\\% recall and 97.3\\% object precision with 85.0\\% recall. These results demonstrate joint improvements in the reliability and coverage of retained information.",
    "published": "2026-10-10T03:41:27Z",
    "updated": "2026-10-10T03:41:27Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14530"
  },
  {
    "id": "2610.14525",
    "title": "Energy Ring: Stabilizing Feature Energy for Reliable Test-Time Discovery",
    "authors": [
      "Tianle Liu",
      "Fan Lyu",
      "Tingliang Feng",
      "Chenggong Ni",
      "Tianqi Wang",
      "Zhang Zhang",
      "Fuyuan Hu",
      "Rui Yao",
      "Tao Zhou"
    ],
    "abstract": "Test-Time Discovery (TTD) aims to recognize known classes and detect novel ones while the model is already deployed, operating directly on a continual unlabeled test-time stream. Existing TTD methods are overly conservative, making known and unknown features collapse together and difficult to separate during test-time adaptation. In this paper, we revisit TTD from an energy perspective and find that the natural energy gap between known and unknown classes is unstable and easily collapses. We therefore propose Energy Ring to stabilize this gap by anchoring the two types of classes on separate energy rings. A lightweight adapter enlarges the norm-based gap while preserving known-class directions, and a perturbation consistency module forms compact clusters for unknown classes. During testing, energy-guided confidence weighting improves prediction, and a stability-based rectification mechanism corrects unreliable updates. Experimental results show that Energy Ring significantly improves TTD performance against existing TTD methods.",
    "published": "2026-10-10T03:36:12Z",
    "updated": "2026-10-10T03:36:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14525"
  },
  {
    "id": "2610.14523",
    "title": "ScienceBuddy-PV: A Verifier-Governed Recursive Improvement Protocol for Panvascular Intervention Research",
    "authors": [
      "Lingsen You",
      "Yujun Guo",
      "Xinyu Zhong",
      "Zijie Feng",
      "Wentong Wang",
      "Li Shen",
      "Junbo Ge"
    ],
    "abstract": "ScienceBuddy-PV adapts the ScienceBuddy recursive-in-recursive design to panvascular intervention research through a structured evidence ledger, device-vessel ontology, abstention contract and retained failure bank. Recursive harness optimization and outer-loop model learning, including reinforcement learning, are specified but not executed. We audit a fixed component, rather than the complete agent system, using separate ARCADE syntax and stenosis tasks (1,000 training, 200 validation and 300 test images per task). A shared task-masked convolutional model was trained once per representation setting; its parameters and the heuristic support gate were then held fixed, with the stenosis threshold selected on validation data. On the locked test sets, syntax Dice was 0.475 (95% CI 0.459-0.490) and stenosis Dice was 0.231 (95% CI 0.214-0.249). Stenosis pixel AUROC was 0.957 and AUPRC was 0.180 at prevalence 0.00975. The gate accepted 76.7% of stenosis-frame outputs versus 100% for a score-only comparator. In a constructed mask audit, it accepted 44.3% of reference candidates and rejected 55.7%, exposing the cost of abstention. Acceptance does not establish correctness or clinical safety. This public-data component audit makes support and abstention measurable and provides a reproducible protocol for future collaborative agent studies. It does not demonstrate recursive improvement, patient-level validity or clinical device recommendations.",
    "published": "2026-10-10T03:35:28Z",
    "updated": "2026-10-10T03:35:28Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14523"
  },
  {
    "id": "2610.14517",
    "title": "We Have Been Interpreting Diffusion Transformer Backbone Behaviors Wrong",
    "authors": [
      "Benyuan Meng",
      "Longtao Huang",
      "Yang Liu",
      "Liang Lin"
    ],
    "abstract": "During a network forward call, diffusion backbones naturally produce many intermediate activations. If we evaluate each activation against an identical downstream benchmarking protocol, we can plot an inverted-U-shaped curve as the depth profile: the activation's performance goes up first and then down as we go into deeper layers. This is common knowledge in the diffusion model community, which inspires many applications including the widely-adopted REPA. However, the common interpretation of this depth profile may be inaccurate and incomplete: (i) The cause of this curve has long been treated as signal granularity changing from coarse to fine, but there has been little evidence in DiT backbones. (ii) The community has been mainly studying this phenomenon in a static way, without investigating how it changes across different training setups. In this work, we show a different mechanism picture for the profile, where the prediction target (e.g., $ε$, $u$, $x_0$) sits at the center. The semantically meaningful signal is only an intermediate by-product for predicting the target, while the prediction target is the real goal for the backbone. Furthermore, the choice of prediction targets as part of the training setup can predictably affect the curve's shape. With this updated interpretation, many applications of this depth profile can be better grounded and predicted. As an example, we show how to predict the near-optimal placement of REPA based on the prediction target of the training setup. The code is at https://github.com/Darkbblue/dit-compare.",
    "published": "2026-10-10T03:26:50Z",
    "updated": "2026-10-10T03:26:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14517"
  },
  {
    "id": "2610.14514",
    "title": "Compositional Concepts Erasing: Disentangling Object-Style via Domain Manifold Unlearning",
    "authors": [
      "Yang Xiao",
      "Kaiyuan Deng",
      "Gen Li",
      "Zinan Ling",
      "Zhiwen Fan",
      "Xiaolong Ma",
      "Bo Hui"
    ],
    "abstract": "Diffusion models pose significant risks regarding the generation of illicit content and copyright violations. This has catalyzed the development of machine unlearning to erase harmful concepts or copyrighted styles from a model's generative repertoire without compromising its general performance. However, previous unlearning approaches on diffusion models have largely focused on either object-level or style-level removal and failed to address the challenge of object-style combination unlearning. At the same time, multiple unlearning requests often lead to catastrophic forgetting. To address these challenges, we propose Domain Manifold Unlearning (DMU), which uses an EMA-updated feature proxy extracted from intermediate diffusion features to represent the retained target-object direction. As a lightweight estimating representation of an object, DMU enables selective unlearning of domain-specific components in a specific object while preserving other semantic representations, thereby significantly enhancing robustness in multiple combination unlearning scenarios. Extensive experiments show that DMU significantly mitigates catastrophic forgetting, outperforming state-of-the-art methods of batch unlearning and sequential unlearning.",
    "published": "2026-10-10T03:22:31Z",
    "updated": "2026-10-10T03:22:31Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14514"
  },
  {
    "id": "2610.14513",
    "title": "TartanMatch: Towards Universal Dense Correspondence Across Modalities",
    "authors": [
      "Hyeokjoon Kwon",
      "Jiting Cai",
      "Ruogu Li",
      "Kritan Bhandari",
      "Geethika Hemkumar",
      "Parv Maheshwari",
      "Yuheng Qiu",
      "Yuchen Zhang",
      "Sebastian Scherer",
      "Wenshan Wang"
    ],
    "abstract": "Robotic platforms combine multi-modal sensors to operate across diverse conditions, but most dense correspondence methods are limited to RGB-RGB or a small set of modality pairs. Training a model for each modality pair scales poorly with the number of sensors and forgoes potential positive transfer across modality pairs. We introduce TartanMatch, a unified model for dense correspondence across all 25 ordered pairs among RGB, event, thermal, depth, and projected LiDAR. TartanMatch adapts an RGB-pretrained correspondence model to all modality pairs within one shared network using lightweight modality adaptation and a mixture of real and synthetic data. On zero-shot real-world benchmarks, TartanMatch reduces Endpoint Error (EPE) over the strongest baselines by 61.9% for cross-modal matching and 49.6% for same-modal matching. We further show that joint training across all modality pairs improves average matching accuracy over pair-specific training, especially on challenging cross-modal pairs. These results demonstrate that a single model achieves broad multi-modal coverage and state-of-the-art matching accuracy.",
    "published": "2026-10-10T03:19:32Z",
    "updated": "2026-10-10T03:19:32Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.14513"
  },
  {
    "id": "2610.14512",
    "title": "Spatiotemporal Recognition of Abdominal Wall Layers During Optical Trocar Entry",
    "authors": [
      "Shreeram Athreya",
      "Andrew Melehy",
      "Carter Prentice",
      "Michael Robinson",
      "Corey Arnold",
      "James Wu",
      "William Speier"
    ],
    "abstract": "Objective. To evaluate whether spatial context and temporal modeling improve tissue recognition during optical trocar entry, where multiple abdominal-wall tissues may be visible simultaneously. Methods. We retrospectively analyzed 71 recordings with 1,516 annotated keyframes and 29,151 clinician-annotated sectors. Each frame was divided into 28 polar-grid sectors assigned to nine tissue classes. Color, neighboring-sector, and positional features were used by a gradient-boosted emission classifier. The full pipeline added learned temporal smoothing, spatial regularization, an anatomically ordered hidden Markov model, and posterior blending. Five-fold cross-validation was grouped by recording, with cross-fitting to prevent within-recording leakage. Primary evaluation used clinician-derived targets; ablations assessed classification, probability quality, spatial consistency, and peritoneum-or-deeper onset timing. Results. The complete pipeline achieved accuracy 0.646, macro-F1 0.507, and macro-AUROC 0.882, versus 0.600, 0.440, and 0.861 for emissions alone. Macro-F1 improved by 0.066 across all five folds. Label changes decreased from 66.2 to 19.5 per sector-minute, and median onset error decreased from 15.58 to 2.45 seconds. Frames with a tissue-depth-code span of at least three decreased from 53% to 26%, versus 22% for clinician annotations. Performance remained limited for preperitoneal fat and bowel, and the full model retained a 44% premature-onset proportion. Conclusions. Combining appearance, spatial context, and temporal constraints improved retrospective tissue recognition and onset localization. Tissue-specific limitations, residual timing errors, and reliance on future observations warrant external validation and prospective evaluation of causal models before clinical use.",
    "published": "2026-10-10T03:19:27Z",
    "updated": "2026-10-10T03:19:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14512"
  },
  {
    "id": "2610.12574",
    "title": "Scaling Multi-Teacher Distillation for Digital Pathology",
    "authors": [
      "Sofiène Boutaj",
      "Pierre Marza",
      "Varun Belagali",
      "Dimitris Samaras",
      "Maria Vakalopoulou",
      "Stergios Christodoulidis"
    ],
    "abstract": "Multi-teacher distillation allows transferring knowledge from multiple \"teacher\" networks to a single \"student\" network. This method is promising in fields such as digital pathology, where many powerful foundation models were proposed recently. However, as we show in this paper, the standard multi-teacher distillation approach reacts poorly to an increase in the number of teachers used to train a student encoder. We demonstrate that learning teacher-specific representations is a key to scaling in MTD. Importantly, different design choices, such as learnable teacher tokens, a tailored attention scheme, additional mixture-of-experts layers and a contrastive loss, are proposed to better learn such teacher-specific representations. We show that our method better scales with respect to the number of considered teachers, allowing us to train compact student encoders, up to 10x more efficient than larger teacher foundation models, while matching their performance and even outperforming them on a large set of tile-level and slide-level tasks. We conduct a thorough empirical validation, evaluating more than 10 foundation models on 39 tasks spanning tile and slide levels. As a result, we release a new collection of strong and efficient foundation models, named OMNI, trained from the knowledge of 10 state-of-the-art foundation models. We finally conduct an analysis of the learned teacher-specific representations, highlighting their complementarity and explaining why they can be easily aggregated at downstream time.",
    "published": "2026-10-08T18:02:09Z",
    "updated": "2026-10-08T18:02:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12574"
  },
  {
    "id": "2610.12568",
    "title": "MIRAGE: Metric Inference and Reliability-Aware Gaussian Estimation from Feed-Forward Vision",
    "authors": [
      "Xinzhe Wang",
      "Changjian Jiang",
      "Kaiwen Song",
      "Xudong Li",
      "Kerui Ren",
      "Ran Yi",
      "Lizhuang Ma",
      "Chunhua Shen",
      "Linning Xu",
      "Tao Lu",
      "Mulin Yu"
    ],
    "abstract": "Feed-forward 3D priors enable high-quality reconstruction from image streams but often lack reliable metric scale and suffer from long-term trajectory drift. In contrast, LiDAR--inertial estimation provides metrically accurate motion but lacks the image-space consistency needed for high-fidelity reconstruction. We propose $MIRAGE$, which anchors feed-forward visual geometry to LiDAR--IMU metric motion and regulates online pose corrections according to correspondence support and cross-modal agreement, jointly enabling accurate metric pose estimation and high-fidelity Gaussian reconstruction. Experiments on Oxford Spires, M2DGR and INS show that MIRAGE achieves accurate metric trajectory estimation, outperforming COLMAP, a widely used but computationally expensive reference for vision-only benchmarks. Motivated by the scarcity of long-horizon monocular benchmarks for large-scale indoor reconstruction, we further build a multimodal data-collection platform and use MIRAGE to establish accurate 6-DoF reference trajectories for a new vision-only benchmark. We benchmark recent monocular large-scale reconstruction methods on this dataset, providing a systematic evaluation of their performance in long-horizon indoor scenes.",
    "published": "2026-10-08T18:00:56Z",
    "updated": "2026-10-08T18:00:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12568"
  },
  {
    "id": "2610.12567",
    "title": "CASTER: Formalizing Zero-Shot Manipulation from Synthetic Videos as Constrained Optimization",
    "authors": [
      "Yinlong Dai",
      "Homanga Bharadhwaj",
      "Dylan P. Losey"
    ],
    "abstract": "Prior research on learning from humans often requires real human demonstrations. But advances in video generation models offer a new paradigm: we can now prompt these generators to make synthetic videos of the task. On the plus side, these synthetic videos take place in the robot's current environment, and do not require actual human teaching. However, while the generated videos appear to show plausible motions, they lack both physical consistency and robot grounding, and thus the robot cannot directly roll out the trajectory shown by the video. In this paper we seek to formalize the process of going from synthetic video generation to real-world robot trajectories for zero-shot manipulation tasks. We recognize that this problem is an instance of constrained optimization. The object trajectories extracted from the synthetic video provide an initial guess at the correct motion, and the robot must refine these trajectories (for instance, within a digital twin) while enforcing physical feasibility and semantic consistency. Our optimization-based formalism provides insights into the video generation properties necessary for success. Specifically, we show that the video generation must probabilistically seed the search within a semantic basin of attraction where the trajectory can be locally modified without losing its task alignment. Our analysis further reveals that state-of-the-art approaches can be viewed as instances of our unified formalism with key simplifications. In our experiments we remove these simplifications to more closely match the underlying optimization, leading to more robust zero-shot trajectories from synthetic videos and improving average task success by 34.1% compared to the best-performing baseline. See videos at our project website: https://collab.me.vt.edu/CASTER",
    "published": "2026-10-08T18:00:55Z",
    "updated": "2026-10-08T18:00:55Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12567"
  },
  {
    "id": "2610.12549",
    "title": "Fly-by-Code: Embodied Coding Agents for Aerial Manipulation with Active Visual and Physical Feedback",
    "authors": [
      "Jaewoo Lee",
      "Jeongyeon Seo",
      "Sihyun Cho",
      "Gyeongrak Choe",
      "Yutong Wang",
      "Bavin Saravanan",
      "Jia-Bin Huang",
      "Furong Huang",
      "Sebastian Scherer",
      "Guanya Shi",
      "H. Jin Kim",
      "Seungjae Lee",
      "Dongjae Lee"
    ],
    "abstract": "Embodied coding agents construct robot policies from natural-language instructions by generating executable programs and refining them from execution feedback. This refinement assumes that execution feedback reveals whether the task succeeded and, after a failure, provides sufficient evidence to guide program revision. Aerial manipulation violates this assumption in two ways. Payload constraints restrict onboard camera coverage and leave task-critical outcomes outside the robot's view (partial observability), while strong dynamic coupling and limited control margins make physical interactions fragile (limited interaction robustness) and leave failure causes unresolved. Re-examining the same feedback cannot recover observations that were never collected or separate failure causes that the available evidence does not distinguish. To acquire this missing evidence, we introduce Active Feedback (AF), an active \"View and Probe\" framework. When execution feedback leaves unresolved questions, the agent synthesizes a separate diagnostic program that runs in simulation to inspect unseen outcomes from informative viewpoints (View) or test hypotheses about failure causes through targeted physical interactions (Probe). Across six simulated aerial manipulation tasks with 60 trials per condition, AF reduces false completion declarations from 25 to 5 and raises final task success from 31.7% to 75% compared with terminal feedback under the same coding-agent configuration and task-execution limit. Using shared robot APIs, task programs refined with AF in simulation run on a physical aerial manipulator without task-program source-code modification and complete multi-stage manipulation tasks in the real world. These results show that executable diagnosis fills gaps in execution feedback for embodied coding agents, improving both completion assessment and program refinement in aerial manipulation.",
    "published": "2026-10-08T18:00:00Z",
    "updated": "2026-10-08T18:00:00Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12549"
  },
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
    "id": "2610.12545",
    "title": "AutoIndexer: Flexible-Order Decoding by Training Causal Models on Chains of Edits",
    "authors": [
      "Shu Ishida",
      "Aliasghar Khani",
      "Tianyu Zhang",
      "The Cong Luong",
      "James Seale Smith",
      "Adam Gaier"
    ],
    "abstract": "Autoregressive decoding is less suited to non-causally ordered data, e.g., cross-references or future dependencies, since their outputs cannot be revised post hoc, unlike iterative human reasoning. Diffusion LLMs partially mitigate this limitation but still cannot flexibly insert or remove arbitrary numbers of tokens from a pre-generated context. We design AutoIndexer as a generative model with a novel training and decoding mechanism that simulates a Chain of Edits, allowing the model to flexibly modify its prior outputs in hindsight via token insertions, substitutions, and deletions. The model learns to predict marker tokens for opening and closing edits, simultaneously moving a cursor to positions in the existing token sequence, analogous to a text editor. Training sequences are obtained by perturbing ground-truth labels with inverse chained edit operations, and the model learns to edit by undoing those inverses. The perturbation training allows AutoIndexer to be robust to erroneous context and adaptable to editing tasks such as code correction. We demonstrate that our method exhibits post-generation context-editing capabilities that most autoregressive and diffusion models lack without compromising performance on standard LLM benchmarks. The code is available at https://github.com/AutodeskAILab/autoindexer.",
    "published": "2026-10-08T17:59:52Z",
    "updated": "2026-10-08T17:59:52Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12545"
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
      "cs.AI",
      "cs.LG",
      "stat.ML"
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
    "id": "2610.11318",
    "title": "Finsler Flow Matching: Dynamics-Aware Geodesic Interpolation for Single-Snapshot Trajectory Inference",
    "authors": [
      "Niklas Canova",
      "Jonas Simon Fleck"
    ],
    "abstract": "Single-cell snapshot data can resolve a continuum of cellular states but do not uniquely determine the dynamics governing transitions between them. However, additional dynamical information can often be encoded in a cell-cell Markov transition kernel. Existing generative approaches for single cell trajectory inference either infer transport only from population marginals, impose a symmetric geometry on the state space, or incorporate directionality through a single velocity vector at each observed state. We introduce Finsler Flow Matching (FFM), a framework for learning continuous stochastic dynamics from discrete Markov transition graphs. We use the first and second local moments to construct a Finsler structure motivated by the Freidlin--Wentzell action, where the second moment determines anisotropic accessibility and the first moment introduces a preferred direction of motion. We learn neural approximations of the resulting directed geodesics, use their Finsler cost to construct source-target couplings, and define geometry-aware stochastic conditional paths that can be distilled into a continuous generative process through simulation-free score and flow matching. Across synthetic and single-cell trajectory inference benchmarks, FFM improves recovery of withheld intermediate populations, particularly when the transition dynamics are strongly directional or anisotropic. Our results provide a principled route from discrete transition probabilities to continuous generative dynamics while retaining both directional and diffusive structure.",
    "published": "2026-10-08T06:23:09Z",
    "updated": "2026-10-08T06:23:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11318"
  },
  {
    "id": "2610.11317",
    "title": "DivMoE: Fine-Grained MoE Upcycling via Cross-Domain Expert Composition",
    "authors": [
      "Yuxuan Lou",
      "Kai Yang",
      "Geng Zhang",
      "Yong Liu",
      "Yang You"
    ],
    "abstract": "Mixture-of-Experts (MoE) architectures have become essential for scaling large language models, with recent work demonstrating the benefits of fine-grained expert designs. Training such models from scratch is expensive, and sparse upcycling from pre-trained dense models is an attractive alternative. However, we identify a structural pathology of fine-grained upcycling: when fine-grained experts are derived from a single source model, naive routing collapses and downstream accuracy drops to near-random (e.g., on Qwen3-1.7B, Drop-Upcycling-fine-grained reaches only 23.2% average accuracy across 15 benchmarks, essentially matching from-scratch training at 22.2%, while the same method's coarse-grained variant reaches 50.2%). We propose DivMoE, the first framework achieving fine-grained MoE Upcycling with structurally-balanced routing. DivMoE introduces domain-specialized fine-grained expert initialization, deriving experts from dense models that have undergone domain-adaptive continual pre-training, and diversity-constrained routing, a hard structural constraint guaranteeing that each token activates experts from distinct domain groups. Across two base models and 15 benchmarks, DivMoE consistently outperforms six upcycling baselines (55.6% vs. 51.6% for the strongest baseline on Qwen3-1.7B) and strictly improves over the dense base model on every benchmark after Stage 2 continual pre-training -- closing the regression gap that has plagued prior fine-grained upcycling. After supervised fine-tuning on a public reasoning mixture, our 12B-parameter DivMoE model matches Moonlight-MoE (16B) at 64.5% average accuracy while outperforming a controlled NVIDIA-Upcycling baseline by 6.1 percentage points.",
    "published": "2026-10-08T06:23:01Z",
    "updated": "2026-10-08T06:23:01Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11317"
  },
  {
    "id": "2610.11316",
    "title": "MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface",
    "authors": [
      "Jianpeng Cheng",
      "Guangyu Sun",
      "Aashu Singh",
      "Benyu Zhang",
      "Haixing Dai",
      "Hossein Mansour",
      "Jiangfan Zhang",
      "Shlok Kumar Mishra",
      "Wei Sun",
      "Xuanming Cui",
      "Yanli Liu",
      "Qi Guo",
      "Max Xiangjun Fan",
      "Jun Xiao"
    ],
    "abstract": "System One models output constrained decisions and probability distributions rather than free-form text generation. While prevailing paradigms rely on structured schema objects to encode state, intent, and candidate choices, we revisit a fully natural language-based System One interface. In this framework, both the user request and each candidate option are expressed in natural language, supported by multimodal (image and video) auxiliary inputs. We introduce MetaEncoder, which fine-tunes a pre-trained Muse-Glimmer 30B decoder into an instruction-following decision-making encoder. To scale effectively across both small closed-set (< 256) and massive open-set (millions) candidate spaces, MetaEncoder employs a bi-encoder architecture trained via unidirectional contrastive learning for request-candidate alignment. We conduct extensive evaluations across 11 benchmark suites and 190 tasks spanning multimodal decision-making, understanding (closed-set) and retrieval (open-set), highlighting where MetaEncoder beats SOTA multimodal encoders, as well as its current limits on reasoning-intensive tasks.",
    "published": "2026-10-08T06:22:48Z",
    "updated": "2026-10-08T06:22:48Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11316"
  },
  {
    "id": "2610.11315",
    "title": "Deflating the Hessian: Rank-4 W4A4 Quantization for Multimodal Diffusion Transformers",
    "authors": [
      "Shiwen Wang",
      "Pengxiang Zhao",
      "Xiaoming Yuan"
    ],
    "abstract": "In diffusion transformers, low-rank branches can mitigate 4-bit weight--activation (W4A4) post-training quantization (PTQ) loss by decomposing each weight into a low-bit residual and a high-precision low-rank component. Existing low-rank PTQ approaches, however, either optimize low-rank compensation and residual quantization separately, often requiring higher ranks, or rely on second-order weight updates without explicitly modeling activation quantization error, which becomes particularly pronounced under 4-bit quantization. To address these limitations, we present HSVDQuant, a unified framework modeling low-rank-assisted W4A4 PTQ as a coupled calibration problem and deriving optimization-based solvers from the joint objective. Eliminating the output-side low-rank factor yields a deflated Hessian that discounts residual errors already captured by the low-rank component, while an activation-noise surrogate is incorporated to suppress activation quantization error. Across five diffusion backbones, rank-4 HSVDQuant consistently outperforms rank-4 SVDQuant in PSNR and LPIPS. It further surpasses rank-32 SVDQuant on SANA-1.6B, FLUX.1-schnell, and FLUX.1-dev with an $8\\times$ smaller rank and up to $6.25\\times$ faster quantization. Furthermore, on the Qwen3-8B LLM, rank-4 HSVDQuant improves MMLU accuracy from 61.50% to 68.17% over rank-32 SVDQuant. Overall, HSVDQuant achieves better W4A4 performance with substantially lower rank and quantization cost.",
    "published": "2026-10-08T06:22:19Z",
    "updated": "2026-10-09T04:09:36Z",
    "categories": [
      "cs.LG",
      "cs.CV",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.11315"
  },
  {
    "id": "2610.11312",
    "title": "MedBenchAgent: Towards Systematic Automation of Medical VLM Benchmark Construction",
    "authors": [
      "Yulin Fu",
      "Junren Wang",
      "Guangjing Yang",
      "Zhangyuan Yu",
      "Wanran Sun",
      "Jiabao Zhou",
      "Jin Yin",
      "Qicheng Lao"
    ],
    "abstract": "Large-scale construction of medical vision-language model (VLM) benchmarks is increasingly feasible with richly annotated imaging datasets and large language models (LLMs), yet existing automation largely focuses on generating evaluation items within predefined benchmark specifications. We study the broader problem of automatically deriving the specification itself: what to evaluate, which annotations support each task, and how to translate this evidence into reliable evaluation items. We formulate benchmark construction as constrained compilation, in which the benchmark specification is progressively derived from evaluation requirements, heterogeneous annotations, and medical knowledge. Based on this formulation, we introduce MedBenchAgent, a multi-agent framework with a Benchmark Intermediate Representation (BIR) that encodes task definitions, evidence mappings, evaluation protocols, and item specifications across construction stages. MedBenchAgent separates planning, which derives and verifies the specification, from instantiation, which constructs and audits items under the locked specification. MedBenchAgent achieves a Task-Space F1 of 90.9%, outperforming direct task induction (79.2-80.0%) and prior-guided induction (85.1%); 994 of 1,000 sampled items from correctly identified tasks pass human audit. We further demonstrate portability to a specialized medical domain and evaluate twelve VLMs, revealing task- and setting-specific variation obscured by aggregate scores. These results establish constrained compilation as a scalable and auditable framework for medical VLM benchmark construction beyond question generation.",
    "published": "2026-10-08T06:17:33Z",
    "updated": "2026-10-08T06:17:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11312"
  },
  {
    "id": "2610.11310",
    "title": "FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs",
    "authors": [
      "Kyeong-Rae Kim",
      "Sungnyun Kim",
      "Tae-Hyun Oh"
    ],
    "abstract": "While 3D spatial reasoning in dynamic egocentric environments is crucial for embodied intelligence, audio-visual large language models (AV-LLMs) lack explicit mechanisms to process and internalize global geometry directly from raw sensory streams. Existing approaches either require costly fine-tuning or underutilize the model's cross-modal reasoning capacities. In this paper, we propose FloorSAV, a novel framework that explicitly grounds spatial audio-visual context by rendering a dynamic 2D floormap. By integrating 3D point clouds, camera trajectories, spatial audio cues, and semantically grounded object landmarks, we inject this floormap into the AV-LLM as a synchronized stream with an egocentric video. AV-LLMs utilize their multi-modal capabilities to jointly reason over visual, auditory, and geometric cues in a single inference with floormap interpretation guidance. We further introduce SAVED-Bench (Spatial Audio-Visual Egocentric Benchmark with Dynamic Agents), constructing essential tasks of spatial capability in real-world scenarios: dynamic relativity, regional, and path reasoning QAs. FloorSAV improves AV-LLMs' spatial reasoning on various tasks from both SAVED-Bench and SAVVY-Bench. Studies with ground-truth floormaps demonstrate the substantial potential of FloorSAV with accurate spatial information.",
    "published": "2026-10-08T06:15:36Z",
    "updated": "2026-10-08T06:15:36Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11310"
  },
  {
    "id": "2610.11309",
    "title": "From Geometry to Generalization: Why Row Normalization Can Beat Adam and Muon",
    "authors": [
      "Jihwan Kim",
      "Dogyoon Song",
      "Chulhee Yun"
    ],
    "abstract": "Different optimizers can fit the same training data while selecting classifiers with substantially different geometries, but whether this difference provably affects population performance remains unclear. We show that row-wise normalization can achieve strictly higher population accuracy than full-batch Adam, a proxy for random-reshuffling Adam, and exact-SVD Muon in high-dimensional multiclass classification. Under an isotropic Gaussian-cloud data model, this advantage arises because row normalization's class-wise Euclidean geometry asymptotically preserves the population decision-boundary directions, whereas Adam's coordinate-wise geometry and Muon's spectral geometry introduce nonvanishing distortions. Beyond isotropy, the advantage persists for full-batch training on class means with independently oriented class-mean and test-noise covariances. It holds for power-law spectra with class-mean exponent below one, even under heavily anisotropic test noise. When both covariances are diagonal and sufficiently close, the advantage over Adam can reverse, while applying the same random rotation to both restores it by changing only their alignment with Adam's coordinate axes. Synthetic and last-layer language-model experiments support the predicted advantage.",
    "published": "2026-10-08T06:15:13Z",
    "updated": "2026-10-08T06:15:13Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.OC",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.11309"
  },
  {
    "id": "2610.11306",
    "title": "Collaboratively Guided Adversarial Robust Distillation with Teacher-Favorable Examples",
    "authors": [
      "Zhi Li",
      "Haowei Liu",
      "Hongchen Yang",
      "Xiaoxuan Wang",
      "Song Gao",
      "Shaowen Yao",
      "Wei Zhou"
    ],
    "abstract": "Adversarial distillation transfers robustness from high-capacity teachers to compact students. Existing adversarial distillation methods mainly use teacher predictions on clean or adversarial examples to supervise student learning. However, teacher-favorable supervision within the perturbation neighborhood remains underexplored in adversarial distillation. We therefore propose Collaboratively Guided Adversarial Robust Distillation (CGARD), which jointly optimizes distinct student-adversarial and teacher-collaborative examples within the same perturbation neighborhood. The teacher-collaborative example is constrained to incur no greater cross-entropy loss under the teacher than the clean input. CGARD combines collaborative teacher guidance with adversarial teacher supervision to improve robust knowledge transfer. Experiments on CIFAR-10 and CIFAR-100, including white-box evaluation and additional black-box transfer evaluation, demonstrate consistent robustness improvements over strong adversarial distillation baselines.",
    "published": "2026-10-08T06:12:23Z",
    "updated": "2026-10-08T06:12:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11306"
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
    "id": "2610.09875",
    "title": "SANet: Selective Attention Network for Infrared Small Target Detection",
    "authors": [
      "Yingmei Zhang",
      "Wangtao Bao",
      "Qin Xiao",
      "Yong Yang",
      "Weiguo Wan",
      "Yitao Luo",
      "Xueting Zou",
      "Lei Zhang"
    ],
    "abstract": "Infrared small target detection aims to accurately identify and locate dim targets in complex backgrounds and supports applications such as maritime surveillance and military search and rescue. However, the small size and weak contrast of infrared targets make it difficult to balance detection accuracy and false alarms. This paper proposes a selective attention network (SANet) for infrared small target detection. A dual-path semantic-aware module combines standard and pinwheel-shaped convolutions to preserve local spatial consistency and capture broader contextual information. Spatial and channel attention further refine the features and improve target-background discrimination. To address the limitations of static skip connections in U-Net, a selective attention fusion module adaptively integrates features across scales using spatially varying weights. It selectively enhances salient regions and improves discrimination between true targets and false alarms. Experiments on three public benchmarks, NUAA-SIRST, IRSTD-1K, and NUDT-SIRST, show that SANet achieves competitive performance in intersection over union (IoU), normalized IoU, detection probability, and false alarm rate. Its IoU exceeds that of the second-best method by 1.93, 4.32, and 2.21 percentage points, respectively. These results support the effectiveness of SANet in dim-target perception, discriminative feature representation, and background suppression.",
    "published": "2026-10-07T11:34:01Z",
    "updated": "2026-10-07T11:34:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09875"
  },
  {
    "id": "2610.09873",
    "title": "Bringing BNNs to Fast Event Processing",
    "authors": [
      "Paul Longour",
      "Julien Moreau",
      "Franck Davoine"
    ],
    "abstract": "Binary Neural Networks (BNNs) enable efficient deep learning deployment on resource constrained devices with weights and activations compressed to one bit, substantially reducing model size and inference cost. Event cameras offer complementary advantages, including low latency, high dynamic range, and low power consumption, by capturing asynchronous streams of events rather than dense image frames. Despite their shared emphasis on efficiency, the combination of these technologies remains largely unexplored. This work aims at adapting and evaluating modern deep BNN architectures on event data. We also show that cross-modal pretraining from RGB data can improve the classification accuracy of BNNs on neuromorphic datasets. We introduce the Polar-wise Binary Event Volume (PBEV), a binary representation that enables event-camera data to be processed directly by BNNs and represents a step toward fully binarized event-based vision systems. Best evaluated BNN on N-Caltech101 classification benchmarks shows 90.58% accuracy with 7.5x less operations than their full-precision counterparts.",
    "published": "2026-10-07T11:33:25Z",
    "updated": "2026-10-07T11:33:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09873"
  },
  {
    "id": "2610.09872",
    "title": "LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets",
    "authors": [
      "Jun Zhao",
      "Leiming Fu",
      "Yanbo Wen",
      "Yiding Wang",
      "Xuantong Liu",
      "Yang Shu",
      "Yuyang Lu",
      "Xuanran Xing",
      "Jingqi Tong",
      "Hao Xu",
      "Qi Zhang",
      "Xuanjing Huang"
    ],
    "abstract": "Evaluating agents by outcomes alone can obscure the capabilities that produce them. This problem is especially pronounced in evolving environments, where outcomes reflect a closed-loop interaction between agent behavior and changing external conditions. We introduce LiveMACEBench, a process-aware benchmark that uses live financial markets as a naturally evolving testbed for persistent LLM agents. Five frontier LLMs operate along continuous trajectories under matched Tool Use, Persistent Memory, Rule Following, and Multi-Agent Collaboration configurations. We evaluate them through both realized outcomes and mechanism-specific diagnostics derived from complete decision traces. Across 30 days of live evaluation, we find a pronounced outcome-capability gap: realized returns often diverge from capability-specific measurements, and similar outcomes can arise from markedly different patterns of mechanism use. Trace-level diagnostics further expose distinct bottlenecks across capabilities, demonstrating that mechanism access, effective mechanism use, and downstream performance are not interchangeable measures of agent capability. LiveMACEBench makes this distinction measurable, turning live markets from a performance leaderboard into a diagnostic environment for agent capability",
    "published": "2026-10-07T11:33:21Z",
    "updated": "2026-10-07T11:33:21Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.09872"
  },
  {
    "id": "2610.09871",
    "title": "An AI-assisted conditioning and geological interpretation workflow for usage in implicit geological modeling",
    "authors": [
      "Stefan Carpentier",
      "Jan Diederik van Wees",
      "Eva de Boever",
      "Jan Niederau",
      "Camille Chapeland",
      "Suzanne Atkins",
      "Boris Boullenger",
      "Jens Wollenweber"
    ],
    "abstract": "Implicit modeling and Relative Geologic Time are geological modeling techniques that enable more efficient, faster, less biased and more reproducible modeling results. For optimal operation, these techniques require many well-constrained input data. In the framework of the Horizon Europe GO-Forward and MOOI WarmingUP GOO projects and to accelerate Implicit modeling, Machine Learning (ML) methods have been tested and implemented in a toolkit for the interpretation of (onshore) seismic data from the shallow to deep range (+- 300 - 3500 m). The goal is to rapidly characterise this depth domain by efficient interpretation of horizons and faults in seismic data. The first step is to improve the signal by applying AI techniques like self-supervised and semi-supervised contrastive learning CNN's for noise reduction and interpolation. Next, horizons and faults are interpreted with minimal use of human-generated training data by using (semi-) self-supervised methods. The resulting developed toolkit supports the application of the implemented algorithms in an efficient workflow. As a first demonstration, the top of the Dutch Maassluis Formation has been interpreted in the Leeuwarden and Waalwijk 3D seismic cubes. Overall, this study demonstrates that AI-assisted interpretation workflows have reached a level of maturity that allows their integration into applied geological modeling and decision-making.",
    "published": "2026-10-07T11:32:47Z",
    "updated": "2026-10-07T11:32:47Z",
    "categories": [
      "physics.geo-ph",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09871"
  },
  {
    "id": "2610.09870",
    "title": "Deadline-Aware Multi-Agent Reinforcement Learning for TSN-Based Vehicular Edge Networks",
    "authors": [
      "Bernardo A. C. Pereira",
      "Marcos Carvalho",
      "Fatih Temiz",
      "Shavbo Salehi",
      "Melike Erol-Kantarci",
      "Andreas Gavrielides",
      "Johann M. Marquez-Barja",
      "Daniel F. Macedo"
    ],
    "abstract": "Vehicular edge computing (VEC) enables latency-sensitive applications by bringing computing and networking resources closer to vehicles. However, existing approaches often overlook network contention among co-located services with heterogeneous and dynamic latency requirements. While time-sensitive networking (TSN) provides bounded-latency communication, conventional and reinforcement learning-based schedulers struggle to adapt to highly dynamic vehicular environments and inter-queue dependencies. To address these limitations, we propose a multi-agent reinforcement learning (MARL) approach for queue-level scheduling in TSN-enabled VEC. Each TSN queue is assigned an autonomous agent that jointly learns the queue service order and time-slot duration to minimize deadline misses under speed-dependent latency requirements. We employ multi-agent proximal policy optimization (MAPPO) to enable coordinated yet autonomous scheduling decisions. Evaluation against single-agent, multi-agent, and non-learning-based baselines shows that MAPPO provides robust performance across different traffic profiles. Compared with centralized single-agent methods, it reduces service latency by up to 66.2% and improves reliability by up to 271.8%. Furthermore, unlike urgency-based heuristics, MAPPO ensures balanced scheduling while achieving lower inference times compared to other MARL methods.",
    "published": "2026-10-07T11:30:19Z",
    "updated": "2026-10-07T11:30:19Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09870"
  },
  {
    "id": "2610.10628",
    "title": "Agent4RE: A Self-Refining Multi-agent Framework for End-to-End Software Requirements Engineering and Benchmarking",
    "authors": [
      "Yongjian Tang",
      "Linhan Li",
      "Thomas Runkler"
    ],
    "abstract": "Existing LLM-based approaches for software Requirements Engineering (RE) typically rely on basic prompting strategies or rudimentary agent collaboration, under-utilizing the full potential of multi-agent systems. Meanwhile, available datasets focus on isolated subtasks, such as requirements extraction, classification, and completeness detection, leaving the absence of an end-to-end RE benchmark that spans from requirements elicitation to generation. We present Agent4RE - a self-refining multi-agent RE system that orchestrates specialized agents and incorporates two iterative improvement loops. To support evaluation, we construct RE-E2E - a real-world dataset built from human-written requirement specifications, enabling end-to-end assessment of RE workflows. Building on this foundation, we further propose two enhanced Agent4RE versions that incorporate either autonomous self-refinement or structured human feedback, and analyze their strengths and limitations across different scenarios. Evaluation on 8 Large Language Models (LLMs) demonstrates that all three Agent4RE variants consistently outperform a domain-context-augmented prompting baseline by average 8% in text-based metrics. The two enhanced variants achieve the highest LLM-as-a-judge and human ratings, surpassing two RE baselines by approximately 0.8 points on a four-point scale. This consistent performance establishes Agent4RE as a practical end-to-end RE solution for industrial environments.",
    "published": "2026-10-07T11:23:11Z",
    "updated": "2026-10-07T11:23:11Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.10628"
  },
  {
    "id": "2610.09863",
    "title": "Global Average Precision for Representation Learning",
    "authors": [
      "Bill Psomas",
      "Mohammad Mahdi",
      "Michalis Thomas",
      "Danda Pani Paudel",
      "Giorgos Tolias",
      "Giorgos Kordopatis-Zilos"
    ],
    "abstract": "Standard information retrieval metrics, such as mean Average Precision (mAP), assess performance one query at a time, based on how the similarities between a query and its positives compare against those with its negatives. The same holds for common representation learning losses, such as InfoNCE and per-query AP surrogates. None of them considers whether similarities are comparable across queries, which any system with a single decision threshold relies on. Global Average Precision (gAP) does, by ranking all query-candidate pairs in one list and computing a single AP. We introduce gSAP, a differentiable surrogate of gAP. It needs only a similarity matrix and a binary matrix marking the positive pairs, the same input as existing losses, so it is a drop-in replacement for them and agnostic to the encoder, the modality, and the source of supervision. Since it considers all possible pairwise comparisons in the batch jointly, it also remains trainable at low temperatures, a regime where per-query surrogates run out of gradient. Swapping it into established recipes improves supervised metric learning, cross-modal alignment, and self-supervised pretraining, where, to our knowledge, it is the first ranking loss to replace the community standard InfoNCE in the latter two. Its similarities are more consistent across queries, which drives the gains under a universal threshold. gSAP retrieves up to four times as many positive pairs as the strongest AP surrogate at the same precision, and it degrades the least when queries with no positives in the database are added. Beyond thresholding, models trained with gSAP also learn better representations, with higher transfer, $k$NN and zero-shot classification accuracy.",
    "published": "2026-10-07T11:22:05Z",
    "updated": "2026-10-07T11:22:05Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09863"
  },
  {
    "id": "2610.09860",
    "title": "DeepTopoClustering: Unsupervised Derivation of Surface Process Taxonomy from 4D Point Clouds for Topographic Monitoring",
    "authors": [
      "Jiapan Wang",
      "Daan Hulskemper",
      "Mathilde Letard",
      "Roderik Lindenbergh",
      "Katharina Anders"
    ],
    "abstract": "4D point clouds acquired by permanent laser scanning (PLS) enable accurate high-frequency monitoring of surface change in dynamic topographic environments. However, existing methods remain limited in organizing detected surface activities into meaningful process types. We propose DeepTopoClustering (DTC), an unsupervised framework for deriving a hierarchical process taxonomy from object-based surface activities, so-called 4D objects-by-change (4D-OBCs). We transform each 4D-OBC into a GeoMorphogram, a distributional sequence representing the temporal evolution of topographic change within a spatially bounded surface activity. A convolutional autoencoder learns latent embeddings from GeoMorphograms, which are jointly optimized using a hierarchical deep clustering objective to organize surface activities into a hierarchy. We evaluate the learned hierarchy using expert annotations on two 4D datasets of sandy beach sites and their combination. DTC with GeoMorphograms achieves the highest agreement with expert judgment at the taxonomy level comprising eight major process types ($F_1=0.78$, match accuracy $=0.92$), outperforming dimensionality reduction and conventional flat clustering. The learned taxonomy separates major erosion- and deposition-dominated activities and distinguishes finer subtypes based on change magnitude, duration, compactness, and temporal evolution. DTC thus provides a scalable and interpretable route from 4D change detection to a data-driven, expert-supported surface process taxonomy, advancing automated knowledge derivation for understanding surface dynamics in topographic monitoring.",
    "published": "2026-10-07T11:16:19Z",
    "updated": "2026-10-07T11:16:19Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09860"
  },
  {
    "id": "2610.09858",
    "title": "Training Advisors for LLM Agents from Task Outcomes",
    "authors": [
      "Sergei Polezhaev",
      "Barys Liskavets",
      "Ori Press",
      "Alexander Golubev"
    ],
    "abstract": "Large language model agents tackle multi-step tasks by interleaving reasoning and tool calls with observations from the environment. Prior work has shown that natural-language feedback can help these agents revise their decisions during task execution. We introduce Caddie, a method for training critics to provide natural-language analysis and advice as agents work through a task. Unlike approaches that rely on step-level labels or reference critiques, Caddie learns from whether the agent ultimately succeeds after receiving the critic's feedback. We optimize the critic through reinforcement learning while keeping the base model frozen. Trained on multi-hop question answering with a single base model, our Qwen3-4B critic improves success rates across four base models of different scales and architectures, including three not used during critic training. On the MuSiQue benchmark, the trained critic improves Qwen3-4B's success rate by more than 25 percentage points, surpassing the performance of Kimi K3 without a critic. The same critic also yields gains on out-of-domain interactive benchmarks, including $τ^3$ and DeepDive, with no additional training. Our results show that agents can decide when to seek help from a critic at inference time and that outcome-based critic training can produce guidance that transfers across base models and task domains.",
    "published": "2026-10-07T11:14:26Z",
    "updated": "2026-10-07T11:14:26Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09858"
  },
  {
    "id": "2610.09856",
    "title": "Self-Evolve With a Reference:Anchored Training of Tool-Integrated Agents",
    "authors": [
      "Wenjie Liao",
      "Liangjie Zhao",
      "Zehong Cao"
    ],
    "abstract": "Self-evolving tool-integrated agents learn from tasks and feedback generated within their own training loop. A Curriculum Agent generates tasks, while an Executor Agent learns from self-consistency signals through reinforcement learning. However, relying solely on the current Executor for feedback has two limitations: group-relative advantages vanish under full consensus, while uncertainty-based curriculum rewards favor disagreement without showing whether the generated tasks support further learning. These limitations motivate an additional reference beyond the current Executor. We propose \\textit{AnchorLoop}, which introduces a frozen copy of the previous iteration's Executor as a historical reference and reuses it on both sides of the training loop. For the Executor, the anchor provides a cross-reference advantage that evaluates current outputs against both current and historical majority answers. For the Curriculum, it provides an agreement-based reference based on differences in sampled majority agreement. Since the Executor and anchor have identical parameters during Curriculum training, this comparison serves as a proxy for task selection rather than evidence of inter-version improvement or correctness. Across 13 reasoning benchmarks, AnchorLoop improves over Agent0 by 2.5\\% on mathematical reasoning and 2.8\\% on general reasoning tasks. It also maintains higher effective-advantage variance and continues improving in later iterations as the unanchored baseline shows diminishing gains. These results demonstrate the benefit of introducing a lightweight historical reference into self-evolving tool-integrated agents without external task or answer supervision.",
    "published": "2026-10-07T11:13:35Z",
    "updated": "2026-10-07T11:13:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09856"
  },
  {
    "id": "2610.09853",
    "title": "DeltaSplat: Iterative Gaussian Refinement for Pose-Free Feed-Forward 3D Gaussian Splatting",
    "authors": [
      "Chanung Park",
      "Seunghyeon Song",
      "Joo Chan Lee",
      "Eunbyung Park",
      "Jong Hwan Ko"
    ],
    "abstract": "Pose-free feed-forward 3D Gaussian Splatting (3DGS) reconstructs a scene from sparse, unposed images in a single network pass, removing the need for camera calibration and per-scene optimization. However, camera estimation errors propagate into the predicted Gaussians and compound the geometric and photometric inaccuracies of single-pass prediction. To correct these errors, we introduce DeltaSplat, a lightweight Gaussian refinement module for pose-free feed-forward 3DGS. It iteratively renders the current Gaussians at the input context views and predicts per-Gaussian updates from the resulting residuals. A 2D residual alone, however, underdetermines the 3D correction. DeltaSplat therefore conditions each update on per-pixel Plücker rays and rendered depth as a soft geometric prior. A dual-branch convolutional mixer efficiently encodes these inputs, and per-attribute heads decode the fused features into position, opacity, and color updates. The module adds only ~2.2% parameters to the backbone and remains fully feed-forward at inference. On DL3DV, DeltaSplat reaches 26.64 dB PSNR in the pose-free setting, improving its state-of-the-art backbone by 1.75 dB and surpassing even baselines supplied with ground-truth cameras; consistent gains hold across 6-24 views and all camera regimes.",
    "published": "2026-10-07T11:11:22Z",
    "updated": "2026-10-07T11:11:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09853"
  },
  {
    "id": "2610.09849",
    "title": "Hard, Yet Reducible: Controlled Forward Transfer for Synthetic Degradation Curation",
    "authors": [
      "Chunming He",
      "Kailai Zhou",
      "Jiaming Zuo",
      "Hanqi Liu",
      "Fengyang Xiao",
      "Youwei Pang",
      "Xiaofeng Liu",
      "Weisi Lin",
      "Xiaoqi Zhao"
    ],
    "abstract": "Selecting synthetic degradations for dense prediction requires an estimate of their training utility, the generalization gain they bring under a finite training budget. Clean and degraded twins share content and labels, suggesting a score based on how much short training reduces the excess error caused by degradation. However, this gap can also shrink when clean performance deteriorates. Measuring the improvement on degraded images alone avoids that confound, but it still credits progress that the same amount of clean training would have produced. We propose the \\textbf{controlled Reducible Degradation Gap} (cRDG) for regions defined by degradation type and severity. From a common checkpoint, cRDG runs two budget-matched probes that differ only in one augmentation slot, which holds either a synthetic degradation or a clean augmentation. The score is the gain on held-out degraded images relative to the clean-control probe. Clean harm is a separate feasibility constraint. cRDG reveals a correctable severity band in which training on the degradation yields high controlled gain under the available budget, and the band moves with the predictor, the starting checkpoint, and the training budget. \\textbf{Curation of Reducible Bands} (\\method) uses cRDG to select synthetic data without changing the predictor. On semantic segmentation and salient object detection, \\method{} improves representative predictors under matched synthetic-data budgets and training schedules, extends to existing data-generation pipelines, and preserves clean performance. Code and supporting materials will be publicly released.",
    "published": "2026-10-07T11:07:36Z",
    "updated": "2026-10-07T11:07:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09849"
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
  }
];
